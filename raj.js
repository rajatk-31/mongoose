let crypto = require('crypto')


let encrypt = (crptoKey, ...value) => {
        console.log(value)
        // var mykey = crypto.createCipher('aes-128-cbc', crptoKey);
        console.log(value)
        let output = [];
        console.log('here')
        value.forEach(element => {
            var mykey = crypto.createCipher('aes-128-cbc', crptoKey);
            console.log(element)
            let mystr = mykey.update(element, 'utf8', 'hex')
            mystr += mykey.final('hex');
            output.push(mystr)
        });
        console.log(output)
    
}

var encrypts = (crptoKey, value)=>{
    var mykey = crypto.createCipher('aes-128-cbc', crptoKey);
    let mystr = mykey.update(value, 'utf8', 'hex')
    mystr += mykey.final('hex');
    console.log(mystr)
}
encrypt('abcd','skhfhd','545454')