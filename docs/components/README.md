# Install

Using npm:

```shell
# Requried axios lib
# npm i axios --save
npm install sk-element-webpack --save
```

Using a script tag for global use:

```html
<!-- import CSS -->
<link rel="stylesheet" href="//xxx.xxx.com/dist/theme-default/index.css">
<!-- import JavaScript -->
<script type="text/javascript" src="//xxx.xxx.com/dist/sk-element.min.js"></script>
```

## Promise

This UI components requires [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises). If your supporting browsers do not implement Promise (e.g. IE), you can use a polyfill library, such as [es6-promise](https://github.com/stefanpenner/es6-promise)

You can include it via CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/es6-promise@4/dist/es6-promise.auto.js"></script>
```

Then `window.Promise` will be available automatically.

If you prefer using a package manager such as NPM or Yarn, install it with the following commands:

```shell
npm install es6-promise --save # NPM
yarn add es6-promise # Yarn
```

Furthermore, add the below line into anywhere in your code before using Vuex:

```js
import "es6-promise/auto";
```
