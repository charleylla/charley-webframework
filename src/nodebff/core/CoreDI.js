import { createContainer,Lifetime,InjectionMode  } from "awilix";
import { scopePerRequest,loadControllers } from "awilix-koa";

export default class CoreDI{
    constructor(app,opt){
        this.app = app;
        this.opt = opt;
        this.container = createContainer();
        this.init();
    }

    init(){
        this.defineContainer();
        this.applyMiddleWare();
    }

    defineContainer(){
        // 将 Service 注册到容器，缓存 Service 实例
        const { servicePath,poPath,cwd } = this.opt;
        this.container.loadModules([servicePath,poPath],{
            formatName: "camelCase",
            resolverOptions: {
              lifetime: Lifetime.SCOPED
            },
            cwd
        });
    }

    applyMiddleWare(){
        const { controllerPath,cwd } = this.opt;
        this.app.use(scopePerRequest(this.container))
        this.app.use(loadControllers(controllerPath,{cwd}))
    }
}