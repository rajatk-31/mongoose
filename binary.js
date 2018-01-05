// var btd = (a) => {
//     var x = a.split('').reverse()
//     var decimal = 0;
//     x.forEach(function(element, index) {
//         decimal += element * Math.pow(2, index)
//     })
//     console.log(decimal)
// }
// btd('10101')

// function abc(x) {
//     while (((x % 4) == 0) && x > 1) /* While x is even and > 1 */
//         x /= 2;
//     return (x == 1);

// }
// console.log(abc(

var abc = n => {
    var flag = false
    while (n != 1) {
        if ((n / 2) % 1 != 0) {
            flag = true;
            break;
        } else {
            n = Math.floor(n / 2);
        }
    }
    return flag;
}
console.log(abc(6))