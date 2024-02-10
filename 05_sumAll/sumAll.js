const sumAll = function(num1, num2) 
{
    let result;
    if (typeof(num1) == "number" & typeof(num2) == "number" & num1 >= 0 & num2 >= 0) 
    {
        let temp;
        result = 0;
    
    if (num1 > num2) 
    {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }

    for (let i = 0; i <= num2 - num1 ; i++) 
    {
        result += num1 + i;   
    }
        
    }else
    {
        result = "ERROR"
    }
    

    return result;
};

// Do not edit below this line
module.exports = sumAll;
