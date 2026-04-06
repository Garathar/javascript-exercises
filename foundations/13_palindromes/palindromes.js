const palindromes = function (string) {
    string = string.toLowerCase(string);
    let rev = string.split("").reverse();
    let norm = string.split("");
    rev = rev.reduce((combined,letter) => {
        if (letter.match(/[a-z]/g)){
            combined += letter
            return combined
        }
        else if (letter.match(/[0-9]/g)){
            combined += letter
            return combined
        }
        return combined
    }, "");
    norm = norm.reduce((combined,letter) => {
        if (letter.match(/[a-z]/g)){
            combined += letter
            return combined
        }
        else if (letter.match(/[0-9]/g)){
            combined += letter
            return combined
        }
        return combined
    }, "");
    return rev == norm
};
   /* let asd = "bacon, eggs ch3ese";
    asd = asd.split("")
    let test = asd.reduce((combined,letter) => {
        if (letter.match(/[a-z]/g)){
            combined += letter
            return combined
        }
        else if (letter.match(/[0-9]/g)){
            combined += letter
            return combined
        }
        return combined
    }, "")
    console.log(test) */
// Do not edit below this line
module.exports = palindromes;
