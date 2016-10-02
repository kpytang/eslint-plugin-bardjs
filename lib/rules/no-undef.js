'use strict';

module.exports = function (context) {
  var validJasmineGlobals = [
      'describe',
      'it',
      'spyOn',
      'expect',
      'beforeEach',
      'afterEach'
    ],
    bardInjectedGlobals = [];

  return {
    CallExpression: function (node) {
      if (node.callee && node.callee.type === 'MemberExpression' &&
          node.callee.object && node.callee.object.name === 'bard' &&
          node.callee.property && node.callee.property.name === 'inject') {
        node.arguments.forEach(function (injectedDependency) {
          bardInjectedGlobals.push(injectedDependency.value);
        });
      }
    },
    /* eslint-disable no-unused-vars */
    'Program:exit': function (node) {
      var globalScope = context.getScope();

      globalScope.through.forEach(function (globalReference) {
        var identifier = globalReference.identifier;

        if (validJasmineGlobals.indexOf(identifier.name) >= 0 ||
            identifier.name === 'bard' ||
            bardInjectedGlobals.indexOf(identifier.name) >= 0) {
            return;
        }

        context.report({
            node: identifier,
            message: '\'{{name}}\' is not defined.',
            data: identifier
        });
      });
    }
  };
};
