const Koa = require("koa");
const Kit = require("./kit");
const app = new Koa();
new Kit(app).start();