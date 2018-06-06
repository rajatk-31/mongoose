var calculate = function(a) {
    if (a.indexOf('+') > -1) {
        var x = a.split('+') //['2','2']
        console.log(parseInt(x[0]) + parseInt(x[1]))
    }
}

calculate('2+2')
calculate('2/2')
calculate('2*2')