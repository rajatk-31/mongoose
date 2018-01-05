var sum = (a, b) => {
    return new Promise((resolve, reject) => {
        if (!a || !b) {
            reject("Both numbers not entered")
        } else {
            resolve({ sum: a + b })
        }
    })
}

sum().then(data => {
    console.log(data)
}, err => {
    console.log(err)
})