import IndexModel from "../models/IndexModel"

class IndexController{
    constructor(ctx){

    }
    index(){
        const indexModel = new IndexModel();
        return async(ctx,next) => {
            const data = await indexModel.getIndexData();
            ctx.body = await ctx.render("index",{
                text:data
            });
        }
    }
}

export default IndexController;