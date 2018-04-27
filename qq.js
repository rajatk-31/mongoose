var func = async() => {
    var a = [1, 1, 8888]
    var flag = 0

    a.forEach((ele, i) => {
        console.log('---', i)
        if (ele === 8888) {
            flag = 1;
        }
    })
    console.log(flag)
}

func()