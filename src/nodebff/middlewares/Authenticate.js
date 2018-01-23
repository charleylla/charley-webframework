export default function Authenticate(){
    return async (ctx,next) => {
        const { id } = ctx.params;
        if(id % 2){
            ctx.redirect("/")
            return;
        }
        await next()
    }
}