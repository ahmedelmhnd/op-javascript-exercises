const removeFromArray = function(pArray, ...options ) 
{
    for (let i = 0; i < options.length; i++) 
    {
        while (pArray.includes(options[i]) == true) 
        {
            let idx = pArray.indexOf(options[i]);
            pArray.splice(idx, 1)
            
        }
        
    }

    return pArray;
};

// Do not edit below this line
module.exports = removeFromArray;
