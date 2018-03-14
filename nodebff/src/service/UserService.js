class UserService{
    constructor({ user1Po,user2Po }){
        this.user1Po = user1Po;
        this.user2Po = user2Po;
    }
    async getUser(id){
        const name = await this.user1Po.getName(id);
        const age = await this.user2Po.getAge(id);
        return{
            name,
            age
        }
    }
}

module.exports = UserService;