var n = 10;
var space = n - 1;

// run loop (parent loop) till number of rows
for (var i = 0; i < n; i++) {
    var p = ''
        // loop for initially space, before
        // star printing
    for (var j = 0; j < space; j++) {
        p += ' '
    }

    // Print i+1 stars
    for (var j = 0; j <= i; j++) {
        p += '* '
    }

    console.log(p)
    space--;
}

space = 0;
for (i = 10; i > 0; i--) {
    var p = '';
    for (j = 0; j < space; j++) {
        p += ' ';
    }
    for (j = 0; j < i; j++) {
        p += '* ';
    }
    console.log(p)
    space++;
}