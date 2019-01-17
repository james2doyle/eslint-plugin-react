/**
 * @fileoverview Prevent usage of style JSX prop (modified from no-danger rule)
 * @author James Doyle
 */
'use strict';

const docsUrl = require('../util/docsUrl');
const jsxUtil = require('../util/jsx');

// ------------------------------------------------------------------------------
// Constants
// ------------------------------------------------------------------------------

const DENIED_MESSAGE = 'Disallowed property \'{{name}}\' found';

const DENIED_PROPERTY_NAMES = [
  'style'
];

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

/**
 * Checks if a JSX attribute is no allowed.
 * @param {String} name - Name of the attribute to check.
 * @returns {boolean} Whether or not the attribute is no allowed.
 */
function isDenied(name) {
  return DENIED_PROPERTY_NAMES.indexOf(name) !== -1;
}

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Prevent usage of style JSX prop',
      category: 'Best Practices',
      recommended: false,
      url: docsUrl('no-inline-style')
    },
    schema: []
  },

  create: function(context) {
    return {
      JSXAttribute: function(node) {
        if (jsxUtil.isDOMComponent(node.parent) && isDenied(node.name.name)) {
          context.report({
            node: node,
            message: DENIED_MESSAGE,
            data: {
              name: node.name.name
            }
          });
        }
      }

    };
  }
};
