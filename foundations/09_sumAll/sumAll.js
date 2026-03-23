const sumAll = function(startingNum,endingNum) {
    if (Number.isInteger(startingNum) == false || 
        startingNum < 0) return "ERROR";
    if (Number.isInteger(endingNum) == false || 
        endingNum < 0) return "ERROR";
    let temp = 0;
    let smallerNum = 0;
    let biggerNum = 0;
    if (startingNum <= endingNum){
        smallerNum = startingNum
        biggerNum = endingNum
    }
    else{
        smallerNum = endingNum
        biggerNum = startingNum
    }
    for (let i = smallerNum; i <= biggerNum;i++){
        temp += i
    }
    return temp;
};
console.log(sumAll(10,2))
// Do not edit below this line
module.exports = sumAll;
