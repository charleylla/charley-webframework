import Koa from "koa";
import router from "koa-simple-router";
import render from "koa-swig";
import koaStatic from "koa-static";
import co from "co";

import CoreLogError from "./core/CoreLogError";
import CoreDI from "./core/CoreDI";
import CONFIG from "./config";

const PORT = CONFIG.get("PORT");
const VIEWS_DIR = CONFIG.get("VIEWS_DIR");
const STATIC_DIR = CONFIG.get("STATIC_DIR");

const app = new Koa();
// 让 ctx 拥有渲染页面的能力
app.context.render = co.wrap(render({
    root: VIEWS_DIR,
    autoescape: true,
    cache: "memory", 
    ext: "html",
    writeBody: false,
    varControls:["[[","]]"]
}));

app.use(koaStatic(STATIC_DIR));

// 启用日志和错误中间功能
new CoreLogError(app);
// 启用依赖注入功能
new CoreDI(app,{
    cwd:__dirname,
    servicePath:"./services/*Service.js",
    poPath:"./po/*Po.js",
    controllerPath:"./controllers/*Controller.js"
});

app.listen(PORT,()=>{
    console.info(`Server is running at ${PORT}.`)
});