// reference html elements
const form = document.getElementById('form');
const numOneInput = document.getElementById('num1');
const numTwoInput = document.getElementById('num2');
const resultText = document.getElementById('result');

// form event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // we can convert the strings into numbers using the Number() function
    const numOneVal = Number(numOneInput.value); 
    const numTwoVal = Number(numTwoInput.value);
    
    console.log(`numOneVal is of type: ${typeof numOneVal}, with a value of ${numOneVal}`);
    console.log(`numTwoVal is of type: ${typeof numTwoVal}, with a value of ${numTwoVal}`);
    // now the numbers add up correctly
    resultText.innerText = `${numOneVal} + ${numTwoVal} = ${numOneVal + numTwoVal}`;
})
