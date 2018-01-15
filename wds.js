var array = [1, 2, 3, 4, 5]



var callbackfunction = (data) => {
    var abc = []
    var doSomething = (element, index, array) => {
        if (element > 2 && element < 5) abc.push(element)
    }
    for (let i = 0; i < data.length; i++) {
        doSomething(data[i], i, data)
    }
    return abc;
}

var filter = (somefunc, data) => {
    console.log(somefunc(data))
}

filter(callbackfunction, array)