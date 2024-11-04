
document.querySelector("#calculate").addEventListener("click", () => {
  let weight = parseFloat(document.getElementById("weight").value); // kg
  let heightCm = parseFloat(document.getElementById("height").value); // cm
  let height = heightCm / 100; // convert to meters

  if (weight > 0 && height > 0) {
      let bmi = (weight / (height * height)).toFixed(2);
      let category = "";

      if (bmi < 18.5) {
          category = "You are Underweight";
      } else if (bmi >= 18.5 && bmi < 25) {
          category = "You are Normal weight";
      } else if (bmi >= 25 && bmi < 30) {
          category = "You are Overweight";
      } else if (bmi >= 30 && bmi < 35) {
          category = "You are Obese";
      } else if (bmi >= 35) {
          category = "You are extremely Obese";
      }

      document.querySelector("#bmiResult").innerHTML = `Your BMI is: ${bmi} (${category})`;
  } else {
      document.querySelector("#bmiResult").innerHTML = "Please enter valid weight & height";
  }
});
