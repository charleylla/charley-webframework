# 基于 Node 的 BFF 架构
## 目录划分
```
nodebff
    ├─assets                —— 静态资源
    │  ├─images
    │  └─styles
    ├─config                —— 配置文件
    ├─controllers           —— Controller 层
    ├─core                  —— 核心文件
    ├─middlewares           —— 中间件
    ├─po                    —— Model 层
    ├─services              —— Service 层
    └─views                 —— View 层
        └─layout
```
## Usage
1. 环境构建
```
npm run dev
```
2. 生产环境构建
```
npm run prod
```
3. 启动开发环境服务
```
npm run serve:dev
```
4. 启动生产环境服务
```
npm run serve:prod
```