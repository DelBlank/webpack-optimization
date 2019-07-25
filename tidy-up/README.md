## 整洁构建 Tidy-Up

### 清空构建目标文件夹无用文件

通常我们会通过 webpack 将代码打包到某个特定文件（如 `build`），每次打包前希望清空目标文件夹遗留无用的文件，有两种办法：

1. 通过 `npm script`，如 `build: rm -rf build && webpack`
2. 使用 `clean-webpack-plugin`

```shell
npm -i clean-webpack-plugin -D
```

方法 1 的缺点在于对于不同的操作系统，执行的脚本命令可能不一样，要想完全兼容，可能需要写很多语句。

方法 2 使用的 `clean-webpack-plugin` 兼容性好，支持的功能更多。
