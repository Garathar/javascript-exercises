const fibonacci = function(count) {
    let counter = parseInt(count)
    if (counter < 0)return"OOPS"
    let arr = [0,1]
    if (counter < 2)return arr[counter]
    for (let i = 2;i <= counter;i++){
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr[counter]
};
// Do not edit below this line
module.exports = fibonacci;
