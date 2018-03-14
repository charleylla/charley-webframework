const koaStatic = require("koa-static");
const {
    PORT,
    PUBLIC_PATH,
    CONTROLLER_PATH,
    SERVICE_PATH,
    PO_PATH,
    DI_CWD
} = require("../config");
const ErrorHandler = require("../middwares/ErrorHandler");
const DI = require("../core/DI");
class Kit{
    constructor(app){
        this.app = app;
    }

    start(loggerEnable=true){
        this.startStaticServer();
        if(loggerEnable){
            new ErrorHandler(this.app).handle();
        }
        this.diServe();
        this.startServer();
    }

    startStaticServer(){
        this.app.use(koaStatic(PUBLIC_PATH));
    }

    startServer(){
        this.app.listen(PORT,() => {
            console.info(`Server is running at ${PORT}`)
        });
    }

    diServe(){
        new DI(this.app,{
            CONTROLLER_PATH,
            SERVICE_PATH,
            PO_PATH,
            DI_CWD
        }).serve();
    }
}

module.exports = Kit;