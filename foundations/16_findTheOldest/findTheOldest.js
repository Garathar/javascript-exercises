const findTheOldest = function(arr) {
    const old = arr.reduce((oldest,currant) => {  
        if (!oldest.yearOfDeath){
            oldest.yearOfDeath = (new Date()).getFullYear();
        }
        if (!currant.yearOfDeath){
            currant.yearOfDeath = (new Date()).getFullYear();
        }
        let old = currant.yearOfDeath-currant.yearOfBirth
        if (old > (oldest.yearOfDeath-oldest.yearOfBirth))return oldest=currant
        return oldest
    })
    return old

};

// Do not edit below this line
module.exports = findTheOldest;
