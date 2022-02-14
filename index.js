const getIdToDOM = (id) => {
  return document.getElementById(id).innerHTML;
};

const calcBmi = () => {
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;

  const bmi = Math.round(weight / height ** 2);

  document.getElementById("calculatedBmi").innerHTML = `Your BMI is ${bmi}`;
  evaluateBmi(bmi);
  changeColor();
};

const evaluateBmi = (bmi) => {
  const age = document.getElementById("age").value;
  const age1 = age >= 19 && age <= 24;
  const age2 = age >= 25 && age <= 34;
  const age3 = age >= 35 && age <= 44;
  const age4 = age >= 45 && age <= 54;
  const age5 = age >= 55 && age <= 64;
  const age6 = age >= 65;
  switch (true) {
    case age1:
      if (bmi >= 19 && bmi <= 24) {
        document.getElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 19) {
        document.getElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        document.getElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    case age1:
      if (bmi >= 19 && bmi <= 24) {
        document.getElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 19) {
        document.getElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        document.getElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    case age2:
      if (bmi >= 20 && bmi <= 25) {
        document.getElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 20) {
        document.getElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        document.getElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    case age3:
      if (bmi >= 21 && bmi <= 26) {
        document.getElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 21) {
        document.getElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        document.getElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    case age4:
      if (bmi >= 22 && bmi <= 27) {
        document.getElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 22) {
        document.getElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        document.getElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    case age5:
      if (bmi >= 23 && bmi <= 28) {
        document.getElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 23) {
        document.getElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        document.getElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    case age6:
      if (bmi >= 24 && bmi <= 29) {
        document.getElementById("evaluatedBmi").innerHTML = `Normal weight`;
      } else if (bmi < 24) {
        document.getElementById("evaluatedBmi").innerHTML = `Underweight`;
      } else {
        document.getElementById("evaluatedBmi").innerHTML = `Overweight`;
      }
      break;
    default:
      console.log(`Please make sure you give correct inputs`);
      break;
  }
};

const changeColor = () => {
  const valueEvaluatedBmi = document.getElementById("evaluatedBmi").innerHTML;
  switch (true) {
    case valueEvaluatedBmi === `Normal weight`:
      document.getElementById("evaluatedBmi").style.backgroundColor =
        "#6CAE75 ";
      break;
    case valueEvaluatedBmi === `Underweight`:
      document.getElementById("evaluatedBmi").style.backgroundColor =
        "#39A0ED  ";
      break;
    case valueEvaluatedBmi === `Overweight`:
      document.getElementById("evaluatedBmi").style.backgroundColor = "#FF006E";
      break;
  }
};

const reset = () => {
  document.getElementById("calculatedBmi").innerHTML = "";
  document.getElementById("evaluatedBmi").innerHTML = "";
  document.getElementById("evaluatedBmi").style.backgroundColor = "white";
};
