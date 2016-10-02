'use strict';

var rule = require('../../lib/rules/no-undef'),
    RuleTester = require('eslint').RuleTester,
    eslintTester = new RuleTester();

eslintTester.run('no-focused-tests', rule, {
  valid: [
    [
      'describe("describe1", function() {',
      '   beforeEach("", function() {',
      '       bard.inject("a", "b");',
      '       spyOn(a, "someFunction");',
      '   });',
      '   it("", function() { expect(a.someFunction).toHaveBeenCalled(); });',
      '});'
    ].join('\n')
  ],

  invalid: [
    {
      code: [
          'describe("describe1", function() {',
          '   beforeEach("", function() {',
          '       bard.inject("a", "b");',
          '       spyOn(c, "someFunction");',
          '   });',
          '   it("", function() { var a = Object.create(d); });',
          '});'
      ].join('\n'),
      errors: [
        {
          message: '\'c\' is not defined.',
          line: 4,
          column: 14
        }, {
          message: '\'d\' is not defined.',
          line: 6,
          column: 46
        }
      ]
    }
  ]
});
