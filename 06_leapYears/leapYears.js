const leapYears = function(pYear) 
{
    let result;
    if ( ( (pYear%4 == 0) & (pYear%100 != 0) ) || (pYear%400 == 0) ) 
    {
        result = true;    
    }else 
    {
        result = false;
    }

    return result;
};

// Do not edit below this line
module.exports = leapYears;
