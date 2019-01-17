/**
 * @fileoverview Tests for no-inline-style (modified from no-danger rule)
 * @author James Doyle
 */

'use strict';

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const rule = require('../../../lib/rules/no-inline-style');
const RuleTester = require('eslint').RuleTester;

const parserOptions = {
  ecmaVersion: 2018,
  sourceType: 'module',
  ecmaFeatures: {
    jsx: true
  }
};

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const ruleTester = new RuleTester({parserOptions});
ruleTester.run('no-inline-style', rule, {
  valid: [
    {code: '<App />;'},
    {code: '<App style={null} />;'},
    {code: '<div className="bar"></div>;'}
  ],
  invalid: [{
    code: '<div style={{ fontSize: "12px" }}></div>;',
    errors: [{message: 'Disallowed property \'style\' found'}]
  }, {
    code: '<div style={{}}></div>;',
    errors: [{message: 'Disallowed property \'style\' found'}]
  }, {
    code: '<div style="display: none"></div>;',
    errors: [{message: 'Disallowed property \'style\' found'}]
  }]
});
