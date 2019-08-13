## 压缩 Minifying

### 压缩 javascript

webpack4 之前的版本压缩工具有 `UglifyJS` 和 `uglify-es`， webpack4 之后官方更加推荐 `terser`。

```shell
$ npm install terser-webpack-plugin --save-dev
```

```js
{
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}
```

### js 作用域提升（scope hoisting）

```js
{
  plugins: [new webpack.optimize.ModuleConcatenationPlugin()];
}
```

### 压缩 html

使用 `html-loader`。

```shell
$ npm install html-loader --save-dev
```

```js
{
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader?minimize=true"
      }
    ];
  }
}
```

### 压缩 css

使用 `optimize-css-assets-webpack-plugin`，`mini-css-extract-plugin` 无法消除重复的 css 样式，但是 `optimize-css-assets-webpack-plugin` 却可以。

```shell
$ npm install --save-dev optimize-css-assets-webpack-plugin
```

```js
{
  plugins: [
    new OptimizeCssAssetsPlugin({
      cssProcessor: require("cssnano"),
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      },
      canPrint: true
    })
  ];
}
```

### 压缩图片

使用 `imagemin-webpack-plugin`

```shell
$ npm install imagemin-webpack-plugin --save-dev
```

```js
{
  plugins: [
    // Make sure that the plugin is after any plugins that add images
    new ImageminPlugin({
      jpegtran: { progressive: true, quality: 100 },
      pngquant: {
        quality: "95-100"
      }
    })
  ];
}
```
