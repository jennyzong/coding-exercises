const speedWarning = (speedLimit, actualSpeed)=> {
    if( speedLimit < actualSpeed){
        return `You are going at ${actualSpeed} mph!`
    }
}    
console.log(speedWarning(80, 40))

/*
Challenge
1. Refactor this function so it only warns drivers 
   who are going over the speed limit.
2. The function now needs to take in two parameters. 
   The first is the speed limit, the second is the 
   driver's actual speed.
*/