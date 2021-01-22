const readLineSync = require('readline-sync');
console.log("Welcome to UnitConverter Utility App\n");

function centimeterToInch(value){
    return value * 0.3937007874;
}
function inchToCentimeter(value){
  return value * 2.54;
}
function fahrenheitToCelsius(value){
  return (5*(value-32))/9;
}
function celsiusToFahrenheit(value){
  return ((value+32)*9)/5;
}

function utilityConverter(){

  let selectedOption = parseInt(readLineSync.question("Option 0 to leave the Unit Converter Utility Application\nOption 1: To convert Centimeter to Inch\nOption 2: To convert Inch to Centimeter\nOption 3: To convert Fahrenheit to Celsius\nOption 4: To convert Celsius to Fahrenheit\nPlease provide your input\n"));

  console.log(`Hi, you have selected option: ${selectedOption}\n`);

  if(selectedOption==0){
     return selectedOption;
  }

   while(selectedOption!=0){
    switch(selectedOption){
      case 1:
      const cmVal = parseInt(readLineSync.question("Please enter the value in centimeter\n"));
      console.log("The converted value is : "+ centimeterToInch(cmVal)+ " in");
      break;
      case 2:
      const inchVal = parseInt(readLineSync.question("Please enter the value in Inch\n"));
      console.log("The converted value is : "+ inchToCentimeter(inchVal)+ " cm");
      break;
      case 3:
      const fahrenheitval = parseInt(readLineSync.question("Please enter the temperature in Fahrenheit\n"));
      console.log("The converted value is : "+ fahrenheitToCelsius(fahrenheitval)+" degree Celsius");
      break;
      case 4:
      const celsiusval = parseInt(readLineSync.question("Please enter the temperature in Celsius\n"));
      console.log("The converted value is : "+celsiusToFahrenheit(celsiusval)+ " degree Fahrenheit");
      break;
      default:
      console.log("Invalid Option\n");
      break;
    }

    selectedOption = parseInt(readLineSync.question("Please provide your input\n"));
    console.log(`Hi, you have selected option: ${selectedOption}\n`);

   }

}

const val = utilityConverter();
console.log("Thank you for using Unity Converter Utility App\n");