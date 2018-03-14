class User1Po{
    getName(id){
        return new Promise((res) => {
            setTimeout(()=>{
                res("MIKE")
            },1000)
        })
    }
}

module.exports = User1Po;