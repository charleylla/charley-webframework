export default function Authenticate(){
    return (ctx,next) => {
        const { id } = ctx.params;
        if(id % 2){
            ctx.redirect("http://www.baidu.com")
            return;
        }
        return next()
    }
}