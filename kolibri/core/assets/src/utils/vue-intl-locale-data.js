/*
* This is an autogenerated file, any manual edits to this may be overridden.
* To modify how this code is generated please look at frontend_build/src/intl_code_gen.js
* If you change the supported_language.json, then this file must be regenerated by running:
* yarn run generate-locale-data
*/
module.exports = function(locale) {
  switch (locale) {
    case 'ar':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/ar.js'], function(require) {
          resolve(require('vue-intl/locale-data/ar.js'));
        });
      });
    case 'en':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/en.js'], function(require) {
          resolve(require('vue-intl/locale-data/en.js'));
        });
      });
    case 'es-ES':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/es.js'], function(require) {
          resolve(require('vue-intl/locale-data/es.js'));
        });
      });
    case 'fa':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/fa.js'], function(require) {
          resolve(require('vue-intl/locale-data/fa.js'));
        });
      });
    case 'fr-FR':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/fr.js'], function(require) {
          resolve(require('vue-intl/locale-data/fr.js'));
        });
      });
    case 'hi-IN':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/hi.js'], function(require) {
          resolve(require('vue-intl/locale-data/hi.js'));
        });
      });
    case 'mr':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/mr.js'], function(require) {
          resolve(require('vue-intl/locale-data/mr.js'));
        });
      });
    case 'pt-BR':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/pt.js'], function(require) {
          resolve(require('vue-intl/locale-data/pt.js'));
        });
      });
    case 'sw-TZ':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/sw.js'], function(require) {
          resolve(require('vue-intl/locale-data/sw.js'));
        });
      });
    case 'ta':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/ta.js'], function(require) {
          resolve(require('vue-intl/locale-data/ta.js'));
        });
      });
    case 'te':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/te.js'], function(require) {
          resolve(require('vue-intl/locale-data/te.js'));
        });
      });
    case 'ur-PK':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/ur.js'], function(require) {
          resolve(require('vue-intl/locale-data/ur.js'));
        });
      });
    case 'nyn':
      return new Promise(function(resolve) {
        require.ensure(['vue-intl/locale-data/nyn.js'], function(require) {
          resolve(require('vue-intl/locale-data/nyn.js'));
        });
      });
    default:
      return Promise.resolve({});
  }
};
