// function for document.getElementById
const ElementById = (id) => {
  return document.getElementById(id);
};

// Trigger "onclick" by enter
const lastInput = ElementById("height");
lastInput.addEventListener("keyup", function (e) {
  if (e.which === 13) {
    ElementById("go").click();
  }
});

// Calculate BMI
const calcBmi = () => {
  const height = ElementById("height").value;
  const weight = ElementById("weight").value;

  const bmi = Math.round(weight / height ** 2);
  console.log(bmi);

  // If nothing is input, result box says "No inputs!".
  if (isNaN(bmi)) {
    ElementById("tadaa").innerHTML = `Tadaa!`;
  } else {
    ElementById("tadaa").innerHTML = `Tadaa! You are...`;
    ElementById("calculatedBmi").innerHTML = `Your BMI is ${bmi}`;
  }

  // Function evaluation of BMI
  evaluateBmi(bmi);

  // Function to change color of result box
  changeColor();
};

const evaluateBmi = (bmi) => {
  const age = ElementById("age").value;

  // Categorization of ages
  const age1 = age >= 19 && age <= 24;
  const age2 = age >= 25 && age <= 34;
  const age3 = age >= 35 && age <= 44;
  const age4 = age >= 45 && age <= 54;
  const age5 = age >= 55 && age <= 64;
  const age6 = age >= 65;

  switch (true) {
    case age1:
      if (bmi >= 19 && bmi <= 24) {
        ElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 19) {
        ElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        ElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    case age1:
      if (bmi >= 19 && bmi <= 24) {
        ElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 19) {
        ElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        ElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    case age2:
      if (bmi >= 20 && bmi <= 25) {
        ElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 20) {
        ElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        ElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    case age3:
      if (bmi >= 21 && bmi <= 26) {
        ElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 21) {
        ElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        ElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    case age4:
      if (bmi >= 22 && bmi <= 27) {
        ElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 22) {
        ElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        ElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    case age5:
      if (bmi >= 23 && bmi <= 28) {
        ElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 23) {
        ElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        ElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    case age6:
      if (bmi >= 24 && bmi <= 29) {
        ElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 24) {
        ElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        ElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    default:
      ElementById("evaluatedBmi").innerHTML = `No inputs yet!`;
      break;
  }
};

// Function to change color of result box
const changeColor = () => {
  const valueEvaluatedBmi = ElementById("evaluatedBmi").innerHTML;
  if (valueEvaluatedBmi === `Normal weight`) {
    ElementById("result").style.backgroundColor = "#96d279";
  } else if (
    (valueEvaluatedBmi === `Underweight`) |
    (valueEvaluatedBmi === `Overweight`)
  ) {
    ElementById("result").style.backgroundColor = "#e15073";
  } else {
    ElementById("result").style.backgroundColor = "#fcd194";
  }
};

// set input fields to 0
const reset = () => {
  ElementById("calculatedBmi").innerHTML = "";
  ElementById("evaluatedBmi").innerHTML = "";
  ElementById("result").style.backgroundColor = "rgba(255, 255, 255, 0.11)";
  ElementById("tadaa").innerHTML = ``;
  ElementById("age").value = "0";
  ElementById("weight").value = "0";
  ElementById("height").value = "0.0";
};
