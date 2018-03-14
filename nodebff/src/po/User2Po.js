class User2Po{
    getAge(id){
        return new Promise((res) => {
            setTimeout(()=>{
                res(12)
            },1000)
        })
    }
}

module.exports = User2Po;