## Tree Shaking

得益于 `ES6` 模块，webpack 可以在静态分析时候区分哪些代码是有用的，哪些代码是冗余的。对于 `commonjs` 模块，可以使用 [`webpack-common-shake`](https://www.npmjs.com/package/webpack-common-shake) 插件来实现。只有在**生产环境**才能代开 Tree Shaking。

对于依赖的 `node_modules`，必须在相应 npm 模块 `package.json` 文件中声明 `module` 字段，并且 `module` 指明的入口必须是 `ES6` 模块的。
