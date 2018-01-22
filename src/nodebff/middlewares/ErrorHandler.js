class ErrorHandler {
    constructor(app,logger){
        this.app = app;
        this.logger = logger;
        this.error();
    }

    async handleClientError(ctx,stausCode){
        ctx.status = stausCode;
        ctx.body = await ctx.render("error",{
            msg:"资源不存在~"
        });
        this.logger.error("资源不存在~")
    }

    async handleServerError(ctx,stausCode){
        ctx.status = stausCode;
        ctx.body = await ctx.render("error",{
            msg:"服务器内部错误~"
        });
        this.logger.error("服务器内部错误~")
    }
        

    error(){
        this.app.use(async (ctx,next) => {
            const { status } = ctx;
            try{
                await next();
                this.handleClientError(ctx,status)
            }catch(err){
                this.handleServerError(ctx,status)
            }
        });
    }    
}

export default ErrorHandler;