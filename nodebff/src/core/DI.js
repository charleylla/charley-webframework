const {
    createContainer,
    Lifetime,
    InjectionMode
} = require("awilix");

const {
    scopePerRequest,
    loadControllers
} = require("awilix-koa");

class DI{
    constructor(app,opt){
        this.app = app;
        this.opt = opt;
        this.container = createContainer();
    }

    serve(){
        this.defineContainer();
        this.applyMiddleWare();
    }

    defineContainer(){
        const { SERVICE_PATH,PO_PATH,DI_CWD } = this.opt;
        this.container.loadModules([SERVICE_PATH,PO_PATH],{
            formatName:"camelCase",
            resolverOptions:{
                lifetime:Lifetime.SCOPED
            },
            cwd:DI_CWD
        });
    }

    applyMiddleWare(){
        const { CONTROLLER_PATH,DI_CWD } = this.opt;
        this.app.use(scopePerRequest(this.container))
        this.app.use(loadControllers(CONTROLLER_PATH,{cwd:DI_CWD}))
    }
}

module.exports = DI;