const logger = require("../core/Log");
class ErrorHandler{
    constructor(app){
        this.app = app;
    }
    
    handle(){
        this.app.use(this.handleServerError);
        this.app.use(this.handleClientError);
    }

    async handleClientError(ctx,next){
        await next();
        const statusCode = ctx.status.toString();
        if(statusCode.startsWith(4)){
            ctx.body = {
                message:"Bad Request"
            }
            logger.warn("url:",ctx.url)
        }
    }

    async handleServerError(ctx,next){
        try{
            await next();
        }catch (err) {
            ctx.body = {
                message: err.message,
            };
            logger.error(err)
        }
    }
}

module.exports = ErrorHandler;