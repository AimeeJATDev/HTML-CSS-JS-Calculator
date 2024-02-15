// Global Variables
let firstNum;
let secondNum;

function clr() {
    // Clears everything from the input and text label
    document.getElementById("numInput").value = "";
    document.getElementById("sum").innerHTML = "";
}

function del() {
    let oldVal = document.getElementById("numInput").value;
    // Deletes the last character in the input
    let newVal = oldVal.slice(0, -1);
    document.getElementById("numInput").value = newVal;
}

function enterNum(btnId) {
    // Adds the id of button to the input
    document.getElementById("numInput").value += btnId;
}

function decimal() {
    let input = document.getElementById("numInput").value;
    // Checks whether the input includes a decimal point
    const regex = new RegExp ("\\.", "g");
    let search = regex.test(input);

    //If no decimal points exist and the input isn't blank, a decimal point will be input
    if (search == false && input != "") {
        document.getElementById("numInput").value += ".";
    }
}

function symbols(btnId) {
    let input = document.getElementById("numInput").value;

    firstNum = input;
    
    // Checks whether the input includes a maths symbol
    const regex = new RegExp("[^0-9.-]", "g");
    let search = regex.test(input);

    // If no and input isn't blank, the maths symbol will be added
    if (search == false && input != "") {
        document.getElementById("sum").innerHTML = input;
        document.getElementById("sum").innerHTML += btnId;
        document.getElementById("numInput").value = "";
    }
}

function percentage() {
    // Divides number by 100 to get percentage value 
    let input = document.getElementById("numInput").value;
    let result = input / 100;

    // Displays sum and result to calculator screen
    document.getElementById("numInput").value = result;
    document.getElementById("sum").innerHTML = input + "%";
}

function pos_neg() {
    let input = document.getElementById("numInput").value;
    
    // Checks whether number has a minus at the start
    if (input[0] == "-") {
        // If it does, remove the minus
        let newVal = Math.abs(input);
        document.getElementById("numInput").value = newVal;
    }
    else {
        // If not, add a minus
        let newVal = -Math.abs(input);
        document.getElementById("numInput").value = newVal;
    }
}

function equals() {
    let input = document.getElementById("numInput").value;
    let sum = document.getElementById("sum").innerHTML;

    // Removes spaces from input
    let ns_sum = sum.replace(/\s/g, '');
    
    // Regex used to check for maths symbols
    let regex = new RegExp("(?!^)[^0-9.]", "g");
    let match = ns_sum.match(regex);
    let search = ns_sum.search(/[^0-9.]$/g);

    // Gets second number from input and stores in variables
    secondNum = input;
    let result = 0;

    //Checks which sign is used and completes the calculation
    if (match == "÷") {
        result = firstNum / secondNum;
    }
    else if (match == "x") {
        result = firstNum * secondNum;
    }
    else if(match == "-") {
        result = firstNum - secondNum;
    }
    else if(match == "+") {
        result = Number(firstNum) + Number(secondNum);
    }

    // Shows previous input to the sum label and shows result on the input screen
    if (search != -1) {
        document.getElementById("sum").innerHTML += input;
        document.getElementById("numInput").value = result;
    }
}