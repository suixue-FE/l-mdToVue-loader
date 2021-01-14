## MDTOVUE-loader
### 简介
一个基于webpack的将Markdown文件转换为vue模板语法的loader

### 用法

在webpack.config.js中配置

```javascript
 module: {
  rules: [
    { 
      test: /\.md$/,
      use: [
        'vue-loader', 
        // 此loader为直接引入js文件，暂时还未上传至npm
        {loader: path.resolve(__dirname, './src/index.js')}
        ]
    }
  ]
}
```

**注意**: 要配合vue-loader使用，因为本loader只将Markdown文件转换为vue的template语法。
所以此loader一般在vue项目中使用。

### 后续规划

- 增加分块规则，以便于更好的处理 md 层级
- 将内置依赖打包到一起并上传至npm