var sum = (a, b) => {
    return new Promise((resolve, reject) => {
        if (!a || !b) {
            reject('Error')
        } else {
            resolve(a + b)
        }
    })
}

sum(2).then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})