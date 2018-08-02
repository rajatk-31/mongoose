var sum = function(a, b) {
    return new Promise(function(resolve, reject) {
        if (!a || !b) {
            reject("Please send all numbers")
        } else {
            resolve(a + b)
        }
    })
}

sum(3, 5).then(function(data) {
    console.log(data)
}).catch(err => {
    console.log(err)
})