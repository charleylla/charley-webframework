// import IndexModel from "../models/IndexModel"

class IndexController{
    constructor(ctx){

    }
    index(){
        return async(ctx,next) => {
            // ctx.body = await ctx.render("index");
            ctx.body = "Hello Charley";
        }
    }
}

export default IndexController;