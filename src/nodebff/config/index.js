import SERVER from "./server";
const CONFIG = new Map();
if(SERVER.get("ENV") === "dev"){
    CONFIG.set("PORT",SERVER.get("DEV_PORT"))
}else{
    CONFIG.set("PORT",SERVER.get("PROD_PORT"))
}

export default CONFIG;