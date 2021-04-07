const { readFile } = require('fs').promises;

module.exports = async function() {
  return {
    css: (await Promise.all([
    await readFile('node_modules/naf-css/css/vars.min.css', { encoding: 'utf8' }),
    await readFile('node_modules/naf-css/css/base.min.css', { encoding: 'utf8' }),
    await readFile('node_modules/naf-css/css/forms.min.css', { encoding: 'utf8' }),
    await readFile('src/assets/css/css.min.css', { encoding: 'utf8' })
  ])).join('')
  };
}
