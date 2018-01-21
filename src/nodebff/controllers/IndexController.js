// import IndexModel from "../models/IndexModel"

class IndexController{
    constructor(ctx){

    }
    index(){
        return async(ctx,next) => {
            // ctx.body = await ctx.render("index");
            ctx.body = 123;
        }
    }
}

export default IndexController;