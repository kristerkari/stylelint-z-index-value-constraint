# stylelint-z-index-value-constraint

[![NPM version](https://img.shields.io/npm/v/stylelint-z-index-value-constraint.svg)](https://www.npmjs.com/package/stylelint-z-index-value-constraint)
[![Build Status](https://travis-ci.org/kristerkari/stylelint-z-index-value-constraint.svg?branch=master)](https://travis-ci.org/kristerkari/stylelint-z-index-value-constraint)
[![Build status](https://ci.appveyor.com/api/projects/status/uuutq5xq74a8ko4i/branch/master?svg=true)](https://ci.appveyor.com/project/kristerkari/stylelint-z-index-value-constraint/branch/master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

Stylelint rule for setting minimum and maximum constraint value for z-index.

This is a fork of [niksy/stylelint-number-z-index-constraint](https://github.com/niksy/stylelint-number-z-index-constraint) plugin.

## Install

```sh
npm install stylelint-z-index-value-constraint --save-dev
```

or

```sh
yarn add stylelint-z-index-value-constraint --dev
```

## Usage

Add this config to your `.stylelintrc`:

```
{
  "plugins": ["stylelint-z-index-value-constraint"],
  "rules": [
    "plugin/z-index-value-constraint": {
      "min": 10,
      "max": 9999
    }
  ]
}
```

## Details

```css
a {
  z-index: 10;
}
/**        ↑
 * This number */
```

From [CSS Tricks article](https://css-tricks.com/handling-z-index/):

> It's fairly common to see people number in the hundreds with z-index in web design too. The idea being that you could slip something in between later if need be, which you couldn't if you did 1, 2, 3, etc, because z-index doesn't support decimals.

This rule also handles negative values.

### Options

#### `{ min: 10 }`

The following patterns are considered warnings:

```css
a {
  z-index: 9;
}
input {
  z-index: 2;
}
```

```css
a {
  z-index: -9;
}
input {
  z-index: -2;
}
```

The following patterns are _not_ considered warnings:

```css
a {
  z-index: 10;
}
input {
  z-index: 25;
}
```

```css
a {
  z-index: -10;
}
input {
  z-index: -25;
}
```

#### `{ max: 9999 }`

The following patterns are considered warnings:

```css
a {
  z-index: 10000;
}
input {
  z-index: 200000;
}
```

```css
a {
  z-index: -10000;
}
input {
  z-index: -200000;
}
```

The following patterns are _not_ considered warnings:

```css
a {
  z-index: 9999;
}
input {
  z-index: 8000;
}
```

```css
a {
  z-index: -9999;
}
input {
  z-index: -8000;
}
```

## Optional options

### `ignoreValues: ["number"]`

#### `{ max: 10 }, { ignoreValues: [11, 20] }`

The following patterns are considered warnings:

```css
a {
  z-index: 12;
}
input {
  z-index: 19;
}
```

The following patterns are _not_ considered warnings:

```css
a {
  z-index: 11;
}
input {
  z-index: 20;
}
```

---

## License

MIT
