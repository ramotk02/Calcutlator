
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
       if(display.value === "ERROR") {
        resetDisplay()
       }
       let result = display.value;
       result = result.slice(0, -1);
       display.value = result;
    }
    

    
    