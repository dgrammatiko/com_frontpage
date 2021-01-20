const { readFile } = require('fs').promises;

module.exports = async function() {
  const data = {
    v3: {
      files: {
        // Definition
        'empty.xml': await readFile('PHP_Components/v3_component/empty.xml', { encoding: 'utf8' }),

        'empty.php': await readFile('PHP_Components/v3_component/empty.php', { encoding: 'utf8' }),
        'controller.php': await readFile('PHP_Components/v3_component/controller.php', { encoding: 'utf8' }),

        'views/default/view.html.php': await readFile('PHP_Components/v3_component/views/default/view.html.php', { encoding: 'utf8' }),
        'views/default/metadata.xml': await readFile('PHP_Components/v3_component/views/default/metadata.xml', { encoding: 'utf8' }),

        'views/default/tmpl/default.php': await readFile('PHP_Components/v3_component/views/default/tmpl/default.php', { encoding: 'utf8' }),
        'views/default/tmpl/default.xml': await readFile('PHP_Components/v3_component/views/default/tmpl/default.xml', { encoding: 'utf8' }),
      },
    },
    v4: {
      files: {
        // Definition
        'empty.xml': await readFile('PHP_Components/v4_component/empty.xml', { encoding: 'utf8' }),

        'admin/services/provider.php': await readFile('PHP_Components/v4_component/admin/services/provider.php', { encoding: 'utf8' }),

        'site/src/Controller/DisplayController.php': await readFile('PHP_Components/v4_component/site/src/Controller/DisplayController.php', { encoding: 'utf8' }),
        'site/src/Dispatcher/Dispatcher.php': await readFile('PHP_Components/v4_component/site/src/Dispatcher/Dispatcher.php', { encoding: 'utf8' }),

        'site/src/View/home/HtmlView.php': await readFile('PHP_Components/v4_component/site/src/View/home/HtmlView.php', { encoding: 'utf8' }),
        'site/src/View/home/metadata.xml': await readFile('PHP_Components/v4_component/site/src/View/home/metadata.xml', { encoding: 'utf8' }),

        'site/tmpl/home/default.php': await readFile('PHP_Components/v4_component/site/tmpl/home/default.php', { encoding: 'utf8' }),
        'site/tmpl/home/default.xml': await readFile('PHP_Components/v4_component/site/tmpl/home/default.xml', { encoding: 'utf8' }),
      },
    },
  };

  return data;
}
