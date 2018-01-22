var abc = () => {
    return new Promise((resolve, reject) => {
        resolve("abc")
    })
}

var bcd = () => {
    return new Promise((resolve, reject) => {
        reject("bcd")
    })
}

var a = abc()
var b = bcd()
Promise.all([b, a]).then(data => {
    console.log(data)
}).catch(Err => {
    console.log(Err)
})