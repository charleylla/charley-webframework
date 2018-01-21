import Koa from "koa";
import router from "koa-simple-router";
import render from "koa-swig";
import koaStatic from "koa-static";

import InitController from "./controllers/InitController";
import CONFIG from "./config";
const PORT = CONFIG.get("PORT");
const app = new Koa();

new InitController(app,router);
app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}.`)
});