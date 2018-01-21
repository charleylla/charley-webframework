const SERVER = new Map();

SERVER.set("DEV_PORT",3000);
SERVER.set("PROD_PORT",80);
SERVER.set("ENV",process.env.NODE_ENV);
export default SERVER;