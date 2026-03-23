const removeFromArray = function(arr,...args) {
    let remove = [];
    for (let i = 1; i <= arguments.length-1;i++){
        remove.push(arguments[i])
    }
    function removal(item){
        for (let i = 0; i <= remove.length-1;i++){
            if (item === remove[i]) return false;
        }
        return true;
    }
    let temp = arr.filter(removal)
    return temp

    
};
// Do not edit below this line
module.exports = removeFromArray;
