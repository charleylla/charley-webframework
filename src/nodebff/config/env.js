class Env{
    init(){
        if(process.env.NODE_ENV === "dev"){
            console.log("Do somethind in dev env.")
        }else if(process.env.NODE_ENV === "prod"){
            console.log("Do somethind in prod env.")
        }else if(process.env.NODE_ENV === "test"){
            console.log("Do somethind in test env.")
        }
    }
}

export default Env;