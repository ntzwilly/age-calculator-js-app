const form = document.querySelector("form");
const dayInput = document.querySelector("input#day");
const monthInput = document.querySelector("input#month");
const yearInput = document.querySelector("input#year");
const inputDayError = document.querySelector("input#day + span.error");
const inputMonthError = document.querySelector("input#month + span.error");
const inputYearError = document.querySelector("input#year + span.error");

form.addEventListener("submit", (event) => {
  if (!dayInput.validity.valid) {
    validateData();
    console.log("hey my men")
    event.preventDefault();
  }
  if (!monthInput.validity.valid) {
    validateData();
    event.preventDefault();
  }
  if (!yearInput.validity.valid) {
    validateData();
    event.preventDefault();
  }
});

function validateData(e) {
  const dayLabel  = document.getElementById("day-label")
  const monthLabel  = document.getElementById("month-label")
  const yearLabel  = document.getElementById("year-label")
  const day = dayInput.value
  const month = monthInput.value
  const year = yearInput.value
  const numberOfDaysInMonth = new Date(yearInput, monthInput, 0)
  console.log(numberOfDaysInMonth)
  
  if (dayInput.validity.valueMissing) {
    inputDayError.textContent = "This field is required";
    dayLabel.style.color = "hsl(0, 100%, 67%)"
    dayInput.style.borderColor = "hsl(0, 100%, 67%)"
  }
  else if (day > numberOfDaysInMonth.getDate()) {
    inputDayError.textContent = "The date must be valid";
    dayLabel.style.color = "hsl(0, 100%, 67%)"
    dayInput.style.borderColor = "hsl(0, 100%, 67%)"
  }else {
    inputDayError.textContent = "";
    dayLabel.style.color = "hsl(0, 1%, 44%)"
    dayInput.style.borderColor = "hsl(0, 1%, 44%)"
    checkValidity()
  }

  if (monthInput.validity.valueMissing) {
    inputMonthError.textContent = "This field is required";
    monthLabel.style.color = "hsl(0, 100%, 67%)"
    monthInput.style.borderColor = "hsl(0, 100%, 67%)"
  }else {
    inputMonthError.textContent = "";
    monthLabel.style.color = "hsl(0, 1%, 44%)"
    monthInput.style.borderColor = "hsl(0, 1%, 44%)"    
  }
  
  if (yearInput.validity.valueMissing) {
    inputYearError.textContent = "This field is required";
    yearLabel.style.color = "hsl(0, 100%, 67%)"
    yearInput.style.borderColor = "hsl(0, 100%, 67%)"
  }else {
    inputYearError.textContent = "";
    yearLabel.style.color = "hsl(0, 1%, 44%)"
    yearInput.style.borderColor = "hsl(0, 1%, 44%)"    
  }
}

// function checkValidity() {
//   const day = dayInput.value
//   const month = monthInput.value
//   const year = yearInput.value
//   const numberOfDaysInMonth = new Date(year, month, 0)
//   if(day > numberOfDaysInMonth.getDate()) {
//     const a = dayInput.setCustomValidity("This field in not valid")
//     console.log(a) 
//   }
// }
