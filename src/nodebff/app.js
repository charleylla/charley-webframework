import Koa from "koa";
import router from "koa-simple-router";
import render from "koa-swig";
import koaStatic from "koa-static";
import co from "co";
import log4js from "log4js";

import InitController from "./controllers/InitController";
import CONFIG from "./config";
import ErrorHandler from "./middlewares/ErrorHandler"

const app = new Koa();
const PORT = CONFIG.get("PORT");
const VIEWS_DIR = CONFIG.get("VIEWS_DIR");
const STATIC_DIR = CONFIG.get("STATIC_DIR");
log4js.configure({
    appenders: { errors: { type: 'file', filename: './logs/errors.log' } },
    categories: { default: { appenders: ['errors'], level: 'error' } }
});
const logger = log4js.getLogger();

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
new InitController(app,router);
new ErrorHandler(app,logger);
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}.`)
});