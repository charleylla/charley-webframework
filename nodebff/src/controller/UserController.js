const { route,GET,POST,before } = require("awilix-koa");

@route("/user")
class UserController{
    constructor({userService}){
        this.userService = userService;
    }

    @route("/:id")
    @GET()
    async getUser(ctx,next){
        const data = await this.userService.getUser(ctx.params.id)
        ctx.body = {
            code:1,
            message:"success",
            data,
        }
    }
}

module.exports = UserController;