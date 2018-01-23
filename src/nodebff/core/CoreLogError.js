import ErrorHandler from "../middlewares/ErrorHandler"
import log4js from "log4js";

log4js.configure({
    appenders: { errors: { type: 'file', filename: './logs/errors.log' } },
    categories: { default: { appenders: ['errors'], level: 'error' } }
});

export default class LogError{
    constructor(app){
        this.app = app;
        this.logger = log4js.getLogger();
        new ErrorHandler(this.app,this.logger);
    }
}
