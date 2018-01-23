class UserPo{
    getUser(id){
        const resList = ["NANA","CHARLEY","MIKE","JERRY"]
        return new Promise(res => {
            setTimeout(() => {
                const data = resList[id] || "游客"
                res(`Hello ${data}`);
            }, 1000);
        })
    }
}

export default UserPo;