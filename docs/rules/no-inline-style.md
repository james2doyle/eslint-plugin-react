# Prevent usage of style JSX property (react/no-inline-style)

Inline styles are difficult for some teams to maintain and keep in sync. For projects that rely heavily on classes and framework styles may want to disallow inline styles on JSX tags.

## Rule Details

The following patterns are considered warnings:

```jsx
var React = require('react');

var Hello = <div style={{ lineHeight: 1 }}></div>;
```

The following patterns are **not** considered warnings:

```jsx
var React = require('react');

var Hello = <div>Hello World</div>;
```

## When Not To Use It

You need to use inline styles for certain reasons either with your framework of choice or your components expectations.
