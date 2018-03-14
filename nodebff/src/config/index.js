const path = require("path");
const isDev = (process.env.NODE_ENV === "dev");
module.exports = {
    "PORT":isDev ? 3000 : 80,
    "PUBLIC_PATH":path.join(__dirname,"..","..","www"),
    "CONTROLLER_PATH":"./controller/*Controller.js",
    "SERVICE_PATH":"./service/*Service.js",
    "PO_PATH":"./po/*Po.js",
    "DI_CWD":path.join(__dirname,"..")
}