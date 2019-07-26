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

### 压缩 html

使用 `html-loader`

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

### 压缩图片
