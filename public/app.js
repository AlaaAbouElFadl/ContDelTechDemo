document.addEventListener("DOMContentLoaded", () => {
    const resultField = document.getElementById("result");
    let currentInput = "";
  
    document.querySelectorAll(".btn").forEach(button => {
      button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
  
        if (value === "=") {
          try {
            currentInput = eval(currentInput); 
            resultField.value = currentInput;
          } catch {
            resultField.value = "Error";
            currentInput = "";
          }
        } else if (value === "C") {
          currentInput = "";
          resultField.value = "";
        } else {
          currentInput += value;
          resultField.value = currentInput;
        }
      });
    });
  });
  