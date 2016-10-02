'use strict';

module.exports = {
  rules: {
    'no-undef': require('./lib/rules/no-undef')
  },
  configs: {
    recommended: {
      rules: {
        'bardjs/no-undef': 2
      }
    }
  }
};
