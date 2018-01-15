var allData = [];

function callback(data) {
    if (typeof data === "string") {
        console.log(data);
    } else if (typeof data === "object") {
        for (var item in data) {
            console.log(item + ": " + data[item]);
        }
    }
}

function mainFunction(data, callback) {

    allData.push(data);
    callback(data)
}


mainFunction({
    name: 'NITISH',
    speciality: 'PPT'
}, callback);