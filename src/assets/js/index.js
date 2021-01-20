import {render, html} from 'uhtml';
import {
  configure,
  ZipReader,
  ZipWriter,
  BlobReader,
  BlobWriter,
} from '@zip.js/zip.js/lib/zip.js';

import {removeFirstNum, alpha_numeric_filter, replaceAll, reservedNames } from './utils.js';

configure({
  workerScriptsPath: '/com_frontpage/js/', // /com_frontpage/js/ for production or /docs/js/ for local
});

class ComponentCreator extends HTMLElement {
  constructor() {
    super()

    this.jVersion = 4;
    this.renderEl = this.renderEl.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onSelectChange = this.onSelectChange.bind(this);
    this.generateZip = this.generateZip.bind(this);
    this.transform = this.transform.bind(this);
    this.addFile = this.addFile.bind(this);
  }

  connectedCallback() {
    const jsonEl = document.getElementById('data');
    try {
      this.data = JSON.parse(jsonEl.innerText);
    } catch (err) {
      throw new Error('Malformed JSON...')
    }

    if (!this.data) {
      throw new Error('Data is missing...')
    }

    this.componentName = 'Empty';
    this.componentNameLowercase = 'empty';
    this.disabled = true;

    this.renderEl();
  }

  onInputChange(event) {
    let el = event.target;
    let value = el.value;
    value = alpha_numeric_filter(value);
    value = removeFirstNum(value);

    if (value.charAt(0) !== value.charAt(0).toUpperCase()) {
      value = value.replace(value.charAt(0), value.charAt(0).toUpperCase());
    }

    if (!reservedNames.includes(value.toLowerCase())) {
      this.componentName = value;
      this.componentNameLowercase = value.toLowerCase();
      el.value = value;
      this.disabled = false;
    } else {
      this.disabled = true;
    }

    if (!value) {
      this.disabled = true;
    }

    this.renderEl()
  }

  onSelectChange(event) {
    const sel = event.target;
    this.jVersion = parseInt(sel.options[sel.selectedIndex].value, 10);

    this.renderEl();
  }

  transform(el, data, files) {
    let curData = replaceAll(data[el], '{{componentName}}', this.componentName);
    curData = replaceAll(curData, '{{componentNameLowercase}}', this.componentName.toLowerCase());
    files[el] = curData;
  }

  async addFile(fileName, contents) {
    const theBlob = new Blob([contents], { type: "text/plain" });
    await this.ZipWriter.add(fileName, new BlobReader(theBlob));
  }

  async generateZip() {
    this.writer = new BlobWriter("application/zip");
    this.ZipWriter = new ZipWriter(this.writer);
    let blobURL;
    const queue = [];
    const files = {};
    const data = this.data[`v${this.jVersion}`].files;
    Object.keys(data).map(el => this.transform(el, data, files));
    Object.keys(files).map(el => queue.push(this.addFile(`${el}`, files[el], {})));
    await Promise.all(queue);
    const zipReader = new ZipReader(new BlobReader(await this.ZipWriter.close()));

    try {
      await zipReader.close();
      blobURL = URL.createObjectURL(await this.writer.getData());
      this.ZipWriter = null;
      let a = document.createElement('a');
      a.href = blobURL;
      a.download = `${this.componentName.toLowerCase()}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      alert(error);
    }
  }

  renderEl() {
    render(
      this,
      html`
        <div class="card" data-component="${this.componentName}">
          <h1>Joomla SPA Component Creator</h1>
          <h2>Customise the component</h2>
          <div class="card">
            <label for="text-input">Component Name </label>
            <input type="text" id="text-input" value="${this.componentName}" onkeyup=${this.onInputChange}>
            <br>
            <label for="select-input">For Joomla </label>
            <select value=${this.jVersion} oninput=${this.onSelectChange} id="select-input">
              ${[4, 3].map(el => html`<option value=${el} .checked=${this.jVersion === el} >Version ${el}.x</option>`)}
            </select>
          </div>
          <div class="card-footer">
            <button class="build-button" onclick="${this.generateZip}" type="button">
              Computer, build me the component...
            </button>
          </div>
        </div>`
    );
  }
}

customElements.define('create-joomla-empty-component', ComponentCreator);
