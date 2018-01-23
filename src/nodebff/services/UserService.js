class UserService{
    constructor({userPo}){
        this.userPo = userPo;
    }
    async getUser(id){
        const res = await this.userPo.getUser(id)
        return res;
    }
}

export default UserService;