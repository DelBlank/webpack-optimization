## 打包拆分 Bundle-Splitting

如果把整个应用代码打包成一个单独的 js 文件，则每次在生产环境中发布新应用后，该 js 文件都会变化，js 文件包含的依赖都会在客户端重新下载（哪怕这些依赖没有变化）造成额外开销。

更好的做法是把业务代码，webpack runtime 辅助代码，三方依赖打包成不同文件，比如叫 `app.js`，`app.runtime.js` 和 `vendor.js`。如果 `app.js` 内容发生变化，则只需要重新发布 `app.js` 的代码到生产环境，客户端只需要重新下载 `app.js` 即可，不需要重新下载 `vendor.js` 和 `app.runtime.js`，反过来如果是 `vendor.js` 或 `app.runtime.js` 内容发生变化也是如此处理。

上述做法将一个文件请求拆分成了两个，可能会带来额外开销，可以通过客户端缓存不变的文件来减少这种开销。

```js
{
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /\/node_modules\//,
          name: 'vendor',
          chunks: 'initial'
        }
      }
    },
    runtimeChunk: true
  }
}
```
