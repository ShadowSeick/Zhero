/** EXPLICATION **
 * We are breaking the problem into segments and putting them in
 * Comments to know how to attack the app and to proper coding form. 
 * The main sections are: --starts or controller--; --logic--; 
 * --display or view--.
 */

//get the values from the UI
//starts or controller function
function getValues() {
    //get the values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //We need to validate our input
    //Parse into Integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);
    
    //Check if the numbers are int, if not alert them to enter integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
        //we call generateNumbers
        let arrayNumbers = generateNumbers(startValue, endValue);
        //we call displayNumbers
        displayNumbersAndBoldEven(arrayNumbers);
    } else {
        alert("You must enter integers");
    }

    
}

//Generate numbers from the startValue to the endValue
//logic function
function generateNumbers(startValue, endValue) {

    let numberValues = []
    
    for (let i = startValue; i <= endValue; i++) {
        numberValues.push(i);
    }
    return numberValues;
}

//Display all the numbers and mark the even numbers bold
//display or view function
function displayNumbersAndBoldEven(numbers) {

    let table = document.getElementById("results");
    table.innerHTML = "";

    let className = "";

    numbers.forEach(element => {
        if (element % 2 === 0 && element !== 0) {
            className = "even";
        } 
        else {
            className = "odd";
        }
        table.innerHTML += `<tr><td class="${className}">${element}</td></tr>`;
    });
}