import IndexController from "./IndexController";

const IndexControllerIns = new IndexController();

class InitController{
    constructor(app,router){
        this.server = app;
        this.router = router;
        this.init();
    }
    init(){
        this.server.use(this.router(_ => {
            _.get("/",IndexControllerIns.index())
            _.get("/index.html",IndexControllerIns.index())
        }))
    }
}

export default InitController;