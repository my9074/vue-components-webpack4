# vue-components-webpack4
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

UI component library template based on webpack4 + babel7 + vue implementation

# Install
Using npm:
```shell
npm install sk-element-webpack --save
```

Using a script tag for global use:

```html
<script type="text/javascript" src="sk-element.min.js"></script>
```

# Usage

## Fully import
In main.js:
```javascript
import Vue from 'vue';
import SKElement from 'sk-element-webpack';
import App from './App.vue'

Vue.use(SKElement);

new Vue({
  el: '#app',
  render: h => h(App)
})

```

## On demand

With the help of [babel-plugin-component](https://github.com/ElementUI/babel-plugin-component), we can import components we actually need, making the project smaller than otherwise.

First, install babel-plugin-component:

```shell
npm install babel-plugin-component --save-dev
```

Then edit .babelrc/babel.config.js:
```json
{
  "presets": [
    // other config
  ],
  "plugins": [
      "component",
      {
        "libraryName": "sk-element-webpack",
        "libDir": "dist",
        "style": false
      }
    ]
}
```

Next, if you need Text and other component, edit main.js:
```javascript
import Vue from 'vue'
import { Text } from 'sk-element-webpack'
import App from './App.vue'

Vue.component(Text.name, Text)
/* or
 * Vue.use(Text)
 */

new Vue({
  el: '#app',
  render: h => h(App)
})
```

# Features
- [x] Support on-demand loading
- [ ] I18n
- [ ] Add CLI to support rapid development
- [x] Example docs with vuepress
- [ ] Unit Test

