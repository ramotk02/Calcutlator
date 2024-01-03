
 const display = document.getElementById("display");

    function appendToDisplay(input) {
    display.value += input;
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "ERROR";
        }
    
        }
    function resetDisplay() {
        display.value = "";
    }

    function deleteFromDisplay() {
        var currentDisplayValue = display.value;
    
        if (currentDisplayValue.length > 0) {
        currentDisplayValue = currentDisplayValue.slice(0, -1);
        display.value = currentDisplayValue;
        }
    }
    

    
    