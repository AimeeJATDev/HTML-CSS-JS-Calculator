
//let inputVal;

function clr() {
    // Clears everything from the input
    document.getElementById("numInput").value = "";
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
    
    // Checks whether the input includes a maths symbol
    const regex = new RegExp("[^0-9.]", "g");
    let search = regex.test(input);

    // If no and input isn't blank, the maths symbol will be added
    if (search == false && input != "") {
        document.getElementById("numInput").value += btnId;
    }
}

function pos_neg() {
    let input = document.getElementById("numInput").value;

    // Checks whether number has a minus at the start
    if (input[0] == "-") {
        // If it does, remove the minus
        let newVal = input.substring(1);
        document.getElementById("numInput").value = newVal;
    }
    else {
        // If not, add a minus
        let newVal = "-" + input;
        document.getElementById("numInput").value = newVal;
    }
}

function equals() {
    let input = document.getElementById("numInput").value;
    let regex = new RegExp("[^0-9.]", "g");
    let match = input.match(regex);

    let firstNum = input.substring(0, input.indexOf(match));
    let secondNum = input.slice(input.indexOf(match)); //TODO: Fix

    alert(secondNum);
}