class ErrorHandler {
    constructor(app,logger){
        this.app = app;
        this.logger = logger;
        this.error();
    }

    async handleClientError(ctx,statusCode){
        console.log("middleware-3",statusCode)
        if(!statusCode.toString().startsWith(4)) return;
        ctx.status = statusCode;
        ctx.body = await ctx.render("error",{
            msg:"资源不存在~"
        });
        this.logger.error("资源不存在~")
    }

    async handleServerError(ctx,statusCode,err){
        if(!statusCode.toString().startsWith(5)) return;
        ctx.status = statusCode;
        ctx.body = await ctx.render("error",{
            msg:"服务器内部错误~"
        });
        this.logger.error(err)
    }
        
    error(){
        this.serverErrorMiddware();
        this.clientErrorMiddware();
    }
    serverErrorMiddware(){
        this.app.use(async (ctx,next) => {
            const { status } = ctx;
            try{
                console.log("middleware-1")
                await next();
            }catch(err){
                this.handleServerError(ctx,status,err)
            }
        });
    }    

    clientErrorMiddware(){
        this.app.use(async (ctx,next) => {
            await next();
            const { status } = ctx;
            this.handleClientError(ctx,status)
        });
    }   
}

export default ErrorHandler;