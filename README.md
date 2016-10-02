# eslint-plugin-bardjs

ESLint rules for bardjs

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-bardjs`:

```
$ npm install eslint-plugin-bardjs --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-bardjs` globally.

## Usage

Add `bardjs` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "bardjs"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "bardjs/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here
