const { readFile, writeFile, copyFile, mkdir } = require('fs').promises;
const esbuild = require('esbuild');
const rimraf = require('rimraf');

const getFileContents = async () => {
  const data = {
    v3: {
      files: {
        'controller.php': await readFile('src/v3_component/controller.php', { encoding: 'utf8' }),
        'empty.php': await readFile('src/v3_component/empty.php', { encoding: 'utf8' }),
        'empty.xml': await readFile('src/v3_component/empty.xml', { encoding: 'utf8' }),
        'views/default/view.html.php': await readFile('src/v3_component/views/default/view.html.php', { encoding: 'utf8' }),
        'views/default/metadata.xml': await readFile('src/v3_component/views/default/metadata.xml', { encoding: 'utf8' }),
        'views/default/tmpl/default.php': await readFile('src/v3_component/views/default/tmpl/default.php', { encoding: 'utf8' }),
        'views/default/tmpl/default.xml': await readFile('src/v3_component/views/default/tmpl/default.xml', { encoding: 'utf8' }),
      },
    },
    v4: {
      files: {
        'empty.xml': await readFile('src/v4_component/empty.xml', { encoding: 'utf8' }),

        'admin/services/provider.php': await readFile('src/v4_component/admin/services/provider.php', { encoding: 'utf8' }),
        'site/src/Controller/DisplayController.php': await readFile('src/v4_component/site/src/Controller/DisplayController.php', { encoding: 'utf8' }),

        'site/src/Dispatcher/Dispatcher.php': await readFile('src/v4_component/site/src/Dispatcher/Dispatcher.php', { encoding: 'utf8' }),
        'site/src/View/home/HtmlView.php': await readFile('src/v4_component/site/src/View/home/HtmlView.php', { encoding: 'utf8' }),
        'site/src/View/home/metadata.xml': await readFile('src/v4_component/site/src/View/home/metadata.xml', { encoding: 'utf8' }),
        'site/tmpl/home/default.php': await readFile('src/v4_component/site/tmpl/home/default.php', { encoding: 'utf8' }),
        'site/tmpl/home/default.xml': await readFile('src/v4_component/site/tmpl/home/default.xml', { encoding: 'utf8' }),
      },
    },
  };

  let htmlFileContents = await readFile('src/assets/index.html', { encoding: 'utf8' });
  let cssContents = await readFile('node_modules/naf-css/css/vars.min.css', { encoding: 'utf8' });
  cssContents += await readFile('node_modules/naf-css/css/base.css', { encoding: 'utf8' });
  cssContents += await readFile('node_modules/naf-css/css/forms.css', { encoding: 'utf8' });
  cssContents += await readFile('src/assets/css/css.css', { encoding: 'utf8' });

  htmlFileContents = htmlFileContents.replace('{{JSONDATA}}', JSON.stringify(data, '', 0));
  htmlFileContents = htmlFileContents.replace('body{}', cssContents);

  await writeFile('docs/index.html', htmlFileContents, { encoding: 'utf8' });

  // Copy the font
  await copyFile('src/assets/css/opensans-light-webfont.woff2', 'docs/css/opensans-light-webfont.woff2');
  await copyFile('src/assets/css/opensans-light-webfont.woff', 'docs/css/opensans-light-webfont.woff');

  // Copy some pre bundled files
  await copyFile('node_modules/@zip.js/zip.js/dist/deflate.js', 'docs/js/deflate.js');
  await copyFile('node_modules/@zip.js/zip.js/dist/inflate.js', 'docs/js/inflate.js');
  await copyFile('node_modules/@zip.js/zip.js/dist/z-worker.js', 'docs/js/z-worker.js');
};


(async () => {
  rimraf.sync('docs');
  await mkdir('docs/css', {recursive: true});
  await mkdir('docs/js', {recursive: true});

  esbuild.build({
    entryPoints: ['src/assets/js/index.js'],
    bundle: true,
    minify: true,
    outfile: 'docs/js/index.esm.js',
    platform: 'browser',
    // target: [
    //     'es5',
    // ],
    // plugins: [envPlugin],
  }).catch(() => process.exit(1));

  try {
    await getFileContents();
  } catch (err) {
    console.log(err);
    process.exit(1)
  }

})();
