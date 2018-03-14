const log4js = require("log4js");

class Log{
    constructor(){
        this.initLog4JS();
    }

    initLog4JS(){
        log4js.configure({
            appenders:{ 
                icbV3:{
                    type:"file",
                    filename:"nodebff/logs/logs.log"
                }
            },
            categories:{
                default:{
                    appenders:["icbV3"],
                    level:"warn"
                }
            }
        });
        this.logger = log4js.getLogger();
    }
}

module.exports = new Log().logger;