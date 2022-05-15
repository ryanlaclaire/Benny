//Get the values from the Page
//Start of Controller function
function getValues() {
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //Validate data from input
    //attempt to parse into INT
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //if statement to validate data
    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {

        //All is good and continue
        //call generateNumbers()
        let numbers = generateNumbers(startValue, endValue);
        //call displayNumbers()
        displayNumbers(numbers);

    }else{
        alert("You must enter valid numbers.")
    }

    
}

//Generate #s from startValue to endValue
//Logic function(s)
function generateNumbers(sValue, eValue) {
    //create empty array
    let numbers = [];

    //we want to get all numbers from start to end
    for (let i = sValue; i <= eValue; i++){
        //loops until conditions are true
        numbers.push(i);
    }

    return numbers;
}

//Display numbers and mark even numbers BOLD
//Display or view functions
function displayNumbers(numbers) {  

    let templateRows = "";
    let className = "even";

    for (let index = 0; index < numbers.length; index++) {

            let number = numbers[index];
            if(number % 2 == 0){
                className = "even";
            }else{
                className = "odd";
            }
            templateRows += `<tr><td class=${className}>${number}</td></tr>`;

        }

    document.getElementById("results").innerHTML = templateRows;

}