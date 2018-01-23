import { route,GET,POST } from "awilix-koa";

@route("/user")
class UserController{
    constructor({userService}){
        console.log("Controller creating...")
        this.userService = userService;
    }

    @route("/:id")
    @GET()
    async getUser(ctx){
        const data = await this.userService.getUser(ctx.params.id)
        console.log("middleware-2")
        ctx.body = await ctx.render("index.html",{
            text:data
        });
    }
}

export default UserController;