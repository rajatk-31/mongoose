var armstrong = number => {
    return new Promise((resolve, reject) => {
        var x = number.toString().split('')
        var sum = Math.pow(parseInt(x[0]), 3) + Math.pow(parseInt(x[1]), 3) + Math.pow(parseInt(x[2]), 3)
        if (sum == number) {
            resolve("Equal")
        } else {
            resolve("Not equal")
        }
    })

}
armstrong(351)