const form = document.querySelector("form");
const input = document.querySelector("input#day");
const inputError = document.querySelector("input + span.error");

const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

input.addEventListener("input", (event) => {
  if (input.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    inputError.textContent = ""; // Reset the content of the message
    inputError.className = "error"; // Reset the visual state of the message
  } else {
    // If there is still an error, show the correct error
    showError();
  }
});

form.addEventListener("submit", (event) => {
  if (!input.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if (input.validity.valueMissing) {
    inputError.textContent = "You need to enter an input address.";
  } else if (input.validity.typeMismatch) {
    inputError.textContent = "Entered value needs to be an input address.";
  } else if (input.validity.tooShort) {
    inputError.textContent = `input should be at least ${input.minLength} characters; you entered ${input.value.length}.`;
  }

  inputError.className = "error active";
}
