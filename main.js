let result = document.getElementById("inputText");

const buttons = Array.from(document.querySelectorAll("button"));

let calculate = (event) => {
  switch (event.target.innerText.toLowerCase()) {
    case "c": {
      result.value = null;
      break;
    }
    case "del": {
      result.value = result.value.slice(0, -1);
      break;
    }
    case "=": {
      try {
        result.value = eval(result.value);
      } catch (err) {
        alert("Enter the valid input");
      }
      break;
    }
    default: {
      result.value += event.target.innerText;
    }
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", calculate);
});
