class IndexModel{
    getIndexData(){
        const resList = ["NANA","CHARLEY","MIKE","JERRY"]
        return new Promise(res => {
            setTimeout(() => {
                const data = resList[Math.floor(Math.random()*resList.length)]
                res(`Hello ${data}`);
            }, 1000);
        })
    }
}

export default IndexModel;