let display = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let value = btn.textContent.trim();

        if (value === "AC") {
            string = "";
        }
        else if (value === "DEL") {
            string = string.slice(0, -1);
        }
        else if (value === "=") {
            try {
                string = eval(string).toString();
            } catch {
                string = "";
                display.value = "Error";
                return;
            }
        }
        else {
            string += value;
        }

        display.value = string;
    });
});