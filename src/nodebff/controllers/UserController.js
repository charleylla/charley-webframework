import { route,GET,POST,before } from "awilix-koa";
import Authenticate from "../middlewares/Authenticate";
@route("/user")
class UserController{
    constructor({userService}){
        console.log("Controller creating...")
        this.userService = userService;
    }

    @route("/:id")
    @GET()
    @before([Authenticate()])
    async getUser(ctx,next){
        console.log("middleware-2")
        const data = await this.userService.getUser(ctx.params.id)
        ctx.body = await ctx.render("index",{
            text:data
        });
    }
}

export default UserController;