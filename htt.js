var allUserData;

function logStuff(userData) {
    if (typeof userData === "string") {
        console.log(userData);
    } else if (typeof userData === "object") {}
} // A function that takes two parameters, the last one a callback function​
function getInput(options, someFunction) {
    allUserData.push(options);
    someFunction(options);
}
getInput({
    name: 'NITISH',
    speciality: 'PPT'
}, logStuff)