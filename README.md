## BFF
Backend for Frontend
这里的 Backend 是 PHP 或 Node 等中间层代理，使用中间层的好处：
- 削减后端 API 数量
- 方便跨域
- 方便 SSR
## 常用的企业级开发框架
- Egg
- ThinkJS
- Hapi

## 使用 Rollup 做代码清洗
如果直接使用 rollup，其是单文件入口的，类似 webpack，因此并不能完整的复制目录。
Gulp 不会分析依赖关系，其是多入口的，会将文件送到打包后的位置。如：
```
src/app.js -> build/app.js
src/test.js -> build/test.js
```
Webpack 会分析文件的依赖关系，然后将多个文件合并到一个文件中。如：
```
src/app.js + src/test.js -> build/bundle.js
```
Rollup 的处理模式和 Webpack 相似，只处理 input 文件。