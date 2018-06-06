var a = () => {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve('wow')
        }, 1000)
    })
}
var b = () => {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            reject('edfdf')
        }, 2000)
    })
}
var c = () => {
    return new Promise((resolve, reject) => {
        setInterval(() => {
            resolve('dffds')
        }, 3000)
    })
}

const verifyUser = async function() {

    const userInfo = await a();
    const rolesInfo = await b().catch((err) => { console.log(err); });;
    console.log('----')
    const logStatus = await c();
    console.log(userInfo, rolesInfo, logStatus)

};
verifyUser();