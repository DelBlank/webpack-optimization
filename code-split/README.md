## 代码拆分 Code-Splitting

加载不同页面的时候，每个页面依赖的代码不尽相同，因此对不同页面代码进行**懒加载**可以剔除无用代码并且有效减少代码模块大小，从而提高性能。

webpack 实现代码动态加载需要通过 `import()` 或 `require.ensure` 两种方式。

原生 es6 并不支持 `import()` 的写法，因此需要通过 `babel` 插件进行转义：

```shell
$ npm install @babel/plugin-syntax-dynamic-import --save-dev
```

```json
/* .babelrc */
{
  "plugins": ["@babel/syntax-dynamic-import"]
}
```
