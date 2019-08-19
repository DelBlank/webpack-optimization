## Environment Variables

webpack4 允许开发者在编译代码的时候通过 `DefinePlugin` 注入环境变量。

比如注入 node 运行环境 `process.env.NODE_ENV`：

```js
{
  plugins: [new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})],
}
```
