const reverseString = function(string) 
{   
    const charArray = string.split("");
    let result = "";

    while(charArray.length != 0)
    {
        result += charArray.pop();
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
