var array = [1, 2, 3, 4, 5];
var length = array.length;
// console.log(length)
// for (i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
/**
 * forEch
 * map
 * reduce
 * filter
 */
// var name = function(a, b) {
//     console.log(a)
//     console.log('name function');
//     b();
// }
// var callback = function() {
//     console.log('callback function')
// }

// name('HI', callback)

// array.forEach(function(element, index, arr) {
//         console.log(element, index, arr)
//     })
// var x = array.map(function(element, index, arr) {
//     console.log(element, index, arr);
//     return element + 3
// })
// console.log(x)

// array.push(56)
// console.log(array);
// array.pop();
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift(78)
// console.log(array);


var btod = function(binary) {
    var splitted = binary.split('');
    var len = splitted.length - 1;
    var final = 0;
    splitted.forEach(function(element) {
        var z = parseInt(element) * Math.pow(2, len);
        final += z;
        len = len - 1
    });
    console.log(final)
}

btod('1100110')
var dtob = function(decimal) {
    var z = [];
    var y;
    while (decimal > 0) {
        y = decimal % 2;
        z.push(y);
        decimal = parseInt(decimal / 2)
    }
    console.log(z.reverse().join(''))

}
dtob(102)