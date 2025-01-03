bdocument.addEventListener("DOMContentLoaded", () => {
    const resultField = document.getElementById("result");
    let currentInput = "";
  
    document.querySelectorAll(".btn").forEach(button => {
      button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
  
        if (value === "=") {
          try {
            currentInput = eval(currentInput); // Achtung: Eval hat Sicherheitsrisiken, nur für Demo-Zwecke verwenden.
            resultField.value = currentInput;
          } catch (e) {
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
  