import HyperHTMLElement from 'hyperhtml-element';
import { JSZip, saveAs, dataControllerPhp, dataEmptyPhp, dataEmptyXml, dataViewHtmlPhp, dataMetadataXml, dataDefaultXml, dataDefaultPhp } from './data'

const zip = new JSZip();

const reserved = [
  'ajax',
  'banners',
  'config',
  'contact',
  'content',
  'contenthistory',
  'fields',
  'finder',
  'mailto',
  'media',
  'menus',
  'modules',
  'newsfeeds',
  'privacy',
  'search',
  'tags',
  'users',
  'wrapper'
];

const escapeRegExp = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}

const replaceAll = (str, find, replace) => {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

const alpha_numeric_filter = (string) => {
  const alpha_numeric = Array.from('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
  const json_string = JSON.stringify(string)
  let filterd_string = ''

  for (let i = 0; i < json_string.length; i++) {
    let char = json_string[i]
    let index = alpha_numeric.indexOf(char)
    if (index > -1) {
      filterd_string += alpha_numeric[index]
    }
  }

  return filterd_string
};

const removeFirstNum = (str) => {
  while (typeof str.charAt(0) === 'number') {
    str = str.substr(1);
  }

  return str;
}

const generateZip = (ev) => {
  const div = ev.target.parentNode.parentNode;
  const componentName = div.getAttribute('data-component');

  let controllerPhp = replaceAll(dataControllerPhp, '{{componentName}}', componentName);
  controllerPhp = replaceAll(controllerPhp, '{{componentNameLowercase}}', componentName.toLowerCase());
  zip.file("controller.php", controllerPhp);

  let emptyXml = replaceAll(dataEmptyXml, '{{componentName}}', componentName);
  emptyXml = replaceAll(emptyXml, '{{componentNameLowercase}}', componentName.toLowerCase());
  zip.file(`${componentName}.xml`, emptyXml);

  let emptyPhp = replaceAll(dataEmptyPhp, '{{componentName}}', componentName);
  emptyPhp = replaceAll(emptyPhp, '{{componentNameLowercase}}', componentName.toLowerCase());
  zip.file(`${componentName}.php`, emptyPhp);

  const views = zip.folder("views");
  const defaultF = views.folder("default");

  let viewHtmlPhp = replaceAll(dataViewHtmlPhp, '{{componentName}}', componentName);
  viewHtmlPhp = replaceAll(viewHtmlPhp, '{{componentNameLowercase}}', componentName.toLowerCase());
  defaultF.file("view.html.php", viewHtmlPhp);

  let metadataXml = replaceAll(dataMetadataXml, '{{componentName}}', componentName);
  metadataXml = replaceAll(metadataXml, '{{componentNameLowercase}}', componentName.toLowerCase());
  defaultF.file("metadata.xml", metadataXml);


  const tmpl = defaultF.folder("tmpl");
  let defaultXml = replaceAll(dataDefaultXml, '{{componentName}}', componentName);
  defaultXml = replaceAll(defaultXml, '{{componentNameLowercase}}', componentName.toLowerCase());
  tmpl.file("default.xml", defaultXml);

  let defaultPhp = replaceAll(dataDefaultPhp, '{{componentName}}', componentName);
  defaultPhp = replaceAll(defaultPhp, '{{componentNameLowercase}}', componentName.toLowerCase());
  tmpl.file("default.php", defaultPhp);

  zip.generateAsync({ type: "blob" }).then((blob) => {
    saveAs(blob, `com_${componentName}.zip`);
  }, (err) => {
    this.text(err);
  });
}

const GenButton = (name) => {
  return HyperHTMLElement.wire(generateZip)`
  <div class="card-footer">
    <button class="build-button" onclick="${generateZip}" type="button">Computer,
      build me the component...</button>
  </div>`;
}

class RemoveFatElement extends HyperHTMLElement {
  constructor() {
    super()

    this.render = this.render.bind(this);
    this.onchange = this.onchange.bind(this);
  }

  created() {
    this.componentName = 'Empty';
    this.componentNameLowercase = 'empty';
    this.disabled = true;

    this.render();
  }

  onchange(event) {
    event.preventDefault();
    event.stopPropagation();

    let el = event.target;
    let value = el.value;

    value = alpha_numeric_filter(value);
    value = removeFirstNum(value);

    if (value.length && value.charAt(0) !== value.charAt(0).toUpperCase()) {
      value = value.replace(firstChar, firstChar.toUpperCase());
    }

    if (this.checkValidity(value)) {
      this.componentName = value;
      this.componentNameLowercase = value.toLowerCase();
      el.value = value;
      this.disabled = false;
    } else {
      this.componentName = 'Empty';
      this.componentNameLowercase = 'empty';
    }

    this.render()
  }

  checkValidity(name) {
    let valid = true;
    reserved.forEach(val => {
      if (val === name.toLowerCase()) {
        return valid = false;
      }
    });

    return valid;
  }

  render() {
    this.html`
      <div class="card" data-component="${this.componentName}">
        <h1 class="h1">Joomla's Landing Page Component Creator</h1>
        <h2>Customise the component</h2>
        <div class="card">
          <label class="form-label" for="the-only-input">Component name </label>
          <input class="form-input" type="text" id="the-only-input" value="${this.componentName}" onkeyup=${this.onchange}>
        </div>
        ${GenButton}
      
      </div>`;
  }
}

RemoveFatElement.define('hide-joomla-junk');

const El = new RemoveFatElement({})
document.body.appendChild(El)