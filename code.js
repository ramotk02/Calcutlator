let displayValue = '0';

      function appendToDisplay(value) {
        if (displayValue === '0' && value !== '.') {
          displayValue = value;
        } else {
          displayValue += value;
        }
        updateDisplay();
      }

      function deleteFromDisplay() {
        displayValue = displayValue.slice(0, -1);
        if (displayValue === '') {
          displayValue = '0';
        }
        updateDisplay();
      }

      function resetDisplay() {
        displayValue = '0';
        updateDisplay();
      }

      function calculate() {
        try {
          displayValue = eval(displayValue).toString();
        } catch (error) {
          displayValue = 'Error';
        }
        updateDisplay();
      }

      function updateDisplay() {
        document.getElementById('display').innerText = displayValue;
      }