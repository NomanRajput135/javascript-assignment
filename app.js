//  ==================Assignment #1=================
// ========== Question # 1 ============

alert("Congratulations! for visiting our website");

// ========== Question # 2 ============

alert("Error! Please enter a valid password.");

// ========== Question # 3 ============

alert("Welcome to JS Land. \nHappy Coding!");

//  ========= Question # 4 ============

alert(" Welcome to JS Land");
alert("Happy Coding!");

// ========== Question # 5 ============

alert("Hello... i can run JS through my web browser's console");

// ========== Question # 6 ============

// it's answer is available in html file...

// ========== Question # 7 =============

// it's answer you can see in html file.....

// ========================== Assignment # 2 ==========================
// =========== Question # 1 ============

let username = "";

// =========== Question # 2 ============

let myName = "Noman nizamuddin";

// =========== Question # 3 ============

let message;
message = "Hello World";

alert(message);

// =========== Question # 4 ============

let studentName = "John Doe";
let studentAge = "15 years old";
let studentCertificate = "Certified Mobile Application Development";

alert(studentName);
alert(studentAge);
alert(studentCertificate);

// =========== Question # 5 ============

let a = "PIZZA \nPIZZ \nPIZ \nPI \nP";

alert(a);

// =========== Question # 6 =============

let email = "My email address is ";
email += "";
email += "example@example.com";

alert(email);

// =========== Question # 7 =============

let book = "A smarter way to learn JavaScript";

alert(`I am trying to learn from the book ${book}`);

// =========== Qustion # 8 ==============

document.write("Yeah! I can write HTML content through JavaScript<br><br>")

// =========== Question # 9 =============

let myVariable1 = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";

alert(myVariable1);

// =========================== Assignment # 3 =======================

// ============ Question # 1 =============

let age = "I am 30 years old";

alert(age);

// ============ Question # 2 =============

let visitCount = (14);

alert(`You have visited this site ${visitCount} times`);

// ============ Question # 3 =============

let birthYear = 1990;

document.write(`"My birth year is", ${birthYear}<br>`);
document.write("Data type of my declared variable is number<br>");

// ============ Question # 4 =============

let visitorName = "John Doe";
let productTitle = "T-shirt(s)";
let quantity = 5;

document.write(`${visitorName} ordered ${quantity} ${productTitle} on XYZ clothing store`)

// =============================== Assignment # 4 ============================

// ============ Question # 1 =============

let x = 10, y = 15, z = 20;

// ============ Question # 2 =============
// ====== 5 legal variables =======

// let name = "noman";
// let _name = "noman";
// let $name = "noman";
// let name_for_name = "noman";
// let name123 = "noman";

// ====== 5 illegal variables =======

// let 123name = "noman";
// let name-for-name = "noman";
// let name for name = "noman";
// let name$ = "noman";
// let @name = "noman";

// =========== Question # 3 ==============

document.write("<h1>Rules for naming JS variables</h1>")
document.write("a.Variable names can only contain numbers (1), dollar sign ($), underscore (_) and letters (alphabet).<br>")
document.write("b.Variables must begin with a  letter(alphabet), doolar sign($) and underscore(_).<br>")
document.write("c.Variable names are case sensitive.<br>")
document.write("d.Variable names should not be JS keywords.<br><br><br>")

// ================================= Assignment # 5 ======================================

// =========== Qustion # 1 ==============

let num1 = 3;
let num2 = 5;
let sum = num1 + num2;

document.write(`1.Sum of ${num1} and ${num2} is ${sum}<br>`);

// =========== Question # 2 =============

let subt = num1 - num2;
let multi = num1 * num2;
let divi = num1 / num2;
let modu = num1 % num2;

document.write(`2.subtraction of ${num1} and ${num2} is ${subt}<br>`)
document.write(`3.multiplication of ${num1} and ${num2} is ${multi}<br>`)
document.write(`4.division of ${num1} and ${num2} is ${divi}<br>`)
document.write(`5.modulus of ${num1} and ${num2} is ${modu}<br><br><br>`)

// ============ Question # 3 ==============

 var myVariable;

 document.write("Value after variable declaration is: " + myVariable + "<br>");

 myVariable = 5;

 document.write("Initial value: " + myVariable + "<br>");

 myVariable++;

 document.write("Value after increment is: " + myVariable + "<br>");

 myVariable += 7;

 document.write("Value after addition is: " + myVariable + "<br>");

 myVariable--;

 document.write("Value after decrement is: " + myVariable + "<br>");

 var remainder = myVariable % 3;

 document.write("The remainder is: " + remainder);
 document.write(`<br><br><br>`)

 // ============= Question # 4 =============

 let ticketPrice = 600;
 let numTickets = 5;
 let totalCost1 = ticketPrice * numTickets;

 document.write(`Total cost to buy ${numTickets} tickets to a movie is ${totalCost1} PKR<br><br><br>`)

 // ============= Question # 5 ===============

var number = parseInt(prompt("Enter a number for the multiplication table:"));

if (isNaN(number)) {
  document.write("Invalid input. Please enter a valid number.");
} else {
  document.write("Table of " + number + "<br>");

  for (var i = 1; i <= 10; i++) {
    var resultA = number * i;
    document.write(number + " multiply " + i + " = " + resultA + "<br>");
  }
}
document.write("<br><br><br>")

 // ============= Question # 6 ================

 var celsiusTemperature = 25;

 var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
 document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");
 
 var fahrenheitTemperature2 = 70;
 
 var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
 document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C<br><br>");

 // ============= Question # 7 ===============

        var priceItem1 = 650;
        var priceItem2 = 100;
        var quantityItem1 = 3;
        var quantityItem2 = 7;
        var shippingCharges = 100;

        var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

        document.write("<p>Price of Item 1: " + priceItem1 + "</p>");
        document.write("<p>Price of Item 2: " + priceItem2 + "</p>");
        document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
        document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
        document.write("<p>Shipping Charges: " + shippingCharges + "</p>");
        document.write("<p>Total Cost of Your Order: " + totalCost + "</p>");

 // ============= Question # 8 =================
 
 var totalMarks = 980;
 var marksObtained = 804;

 var percentage = (marksObtained / totalMarks) * 100;

 document.write("<h1>Total Marks</h1>")
 document.write("<p>Total Marks: " + totalMarks + "</p>");
 document.write("<p>Marks Obtained: " + marksObtained + "</p>");
 document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");

 // ============== Question # 9 ===================

var usDollars = 10;
var saudiRiyals = 25;

var usdToPkrRate = 104.80;
var sarToPkrRate = 28;

var totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

document.write("<h1>CURRENCY IN PKR</h1>")
document.write("Total Pakistani Rupees: " + totalPkr);
document.write("<br><br><br>")
// =============== Question # 10 ==================

var initialValue = 7;

var result1 = ((initialValue + 5) * 10) / 2;

document.write("Result: " + result1);

// ============== Question # 11 ===================

var currentYear = 2016;

var birthYear1 = 1992;

var age1 = currentYear - birthYear1;

document.write("<h1>Age Calculator</h1>")
document.write("Current year: " + currentYear);
document.write("<br>")
document.write("Birth year: " + birthYear1);
document.write("<br>")
document.write("Your birth year: " + age1)

// ==============   Question # 12 ================

var radius = 20;

var circumference = 2 * Math.PI * radius;

var area = Math.PI * Math.pow(radius, 2);

document.write("<h1>The Geometrizer</h1>")
document.write("Radius of a circle: " + radius);
document.write("<br>")
document.write("The circumference is: " + circumference);
document.write("<br>")
document.write("The area is: " + area);

// ============= Question # 13 ==================

var favoriteSnack = "chocolate chip";

var currentAge = 15;

var maximumAge = 65;

var snacksPerDay = 3;

var yearsRemaining = maximumAge - currentAge;
var snacksNeeded = yearsRemaining * 365 * snacksPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>")
document.write("Favorite Snack: " + favoriteSnack );
document.write("<br>")
document.write("Current Age: " + currentAge);
document.write("<br>")
document.write("Estimated Maximum Age: " + maximumAge);
document.write("<br>")
document.write("Amount of Snacks Per Day: " + snacksPerDay);
document.write("<br>")
document.write("You will need " + snacksNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");
document.write("<br><br><br>")

// ================================ Assignment # 6 ========================================

// =========== Question # 1 =============

let variableA = 10;

document.write("The value of a is: " + variableA);
document.write("<br><br>")

++variableA;
document.write("The value of ++a is: " + variableA);
document.write("<br><br<")

variableA++;
document.write("The value of a++ is: " + variableA);
document.write("<br><br>")

--variableA;
document.write("The value of --a is: " + variableA);
document.write("<br><br>")

variableA--;
document.write("The value of a-- is: " + variableA)
document.write("<br><br><br>")

// ============= Question # 2 =============

// let a = 2;
// let b = 1;
// let result = --a - --b + ++b + b--;

// 1) --a;

// a is pre-decremented, so a becomes 1.
// a is now 1.

// 2) --a - --b;

// a is pre-decremented again, so a becomes 0.
// b is pre-decremented, so b becomes 0.
// The expression becomes 0 - 0, which results in 0.
// a is now 0, and b is now 0.

// 3) --a - --b + ++b;

// a is pre-decremented again, so a becomes -1.
// b is pre-incremented, so b becomes 1.
// The expression becomes -1 - 1 + 1, which results in -1.
// a is now -1, and b is now 1.

// 4) --a - --b + ++b + b--;

// a is pre-decremented again, so a becomes -2.
// b is post-decremented, so it's used as 1 in the expression, and then it becomes 0.
// The expression becomes -2 - 0 + 1 + 1, which results in 0.
// a is now -2, and b is now 0.
// So, after the execution of the script, the values of variables a, b, and result are as follows:

// a is -2
// b is 0
// result is 0
// The output at each stage is explained above, and the final result is 0

// ============= Question # 3 =============

var userName = prompt("Please enter your name:");

if (userName !== null) {
    alert("Hello, " + userName + "! Welcome to our website.");
} else {
    alert("Hello, guest! Welcome to our website.");
}

// ==============   Question # 4 ============

// Question no. 4 is not mentioned in assignment. it's missing so i skipped it...

// ============== Question # 5 =============

      var userNumber = prompt("Enter a number for the multiplication table:");

      userNumber = parseInt(userNumber);

      if (isNaN(userNumber)) {
          userNumber = 5;
      }

      document.write("<h2>Multiplication Table for " + userNumber + "</h2>");
      for (var i = 1; i <= 10; i++) {
          document.write(userNumber + " x " + i + " = " + (userNumber * i) + "<br>");
      }
document.write("<br><br><br>")
// ============= Question # 6 ==============

let subject1 = "English";
let subject2 = "Math";
let subject3 = "Urdu";
let totalMarksPerSubject = 100;
let obtainedMarksSubject1 = 54;
let obtainedMarksSubject2 = 54;
let obtainedMarksSubject3 = 48;
let totalMarks1 = totalMarksPerSubject * 3;
let totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
let percentage1 = (totalObtainedMarks / totalMarks1) * 100;

document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject1 + "</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject2 + "</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarksPerSubject + "</td><td>" + obtainedMarksSubject3 + "</td></tr>");
document.write("<tr><td>Total</td><td>" + totalMarks1 + "</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td>Percentage</td><td colspan='2'>" + percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");

// ================================= Assignment # 9 to 10 ==================================

// =========== Question # 1 ==============

    var cityName = prompt("Enter a city name:");

    if (cityName === "karachi") {
        alert("Welcome to the city of lights");
    } else {
        alert("Welcome to " + cityName);
    }

// ============= Question # 2 =============

var gender = prompt("Enter your gender (male or female):");

if (gender === "male") {
    alert("Good Morning Sir.");
} else if (gender === "female") {
    alert("Good Morning Ma'am.");
} else {
    alert("Good Morning!");
}

// =========== Question # 3 ===============

var signalColor = prompt("Enter the color of the traffic signal (Red, Yellow, or Green):");

if (signalColor === "red"){
    alert("Must Stop");
}else if (signalColor === "yellow"){
    alert("Ready to move");
}else if(signalColor === "green"){
    alert("Move now");
}else{
    alert("Invalid input or color not recognized")
}

// ============ Question # 4 ==============

var remainingFuel = prompt("Enter the remaining fuel in your car (in liters):");

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("You have sufficient fuel. Drive safely!");
}

// ============== Question # 5 =============

var a1 = 4;
if (++a1 === 5) {
    alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

if ("car" < "cat") {
    alert("car is smaller than cat");
}

// ============= Question # 6 ==============

   var subject1Marks = parseFloat(prompt("Enter marks obtained in Subject 1:"));
   var subject2Marks = parseFloat(prompt("Enter marks obtained in Subject 2:"));
   var subject3Marks = parseFloat(prompt("Enter marks obtained in Subject 3:"));

   var totalMarks = parseFloat(prompt("Enter total marks for the three subjects:"));

   var totalObtainedMarks2 = subject1Marks + subject2Marks + subject3Marks;

   var percentage = (totalObtainedMarks2 / totalMarks) * 100;

   var grade, remarks;

   if (percentage >= 80) {
       grade = "A-one";
       remarks = "Excellent";
   } else if (percentage >= 70) {
       grade = "A";
       remarks = "Good";
   } else if (percentage >= 60) {
       grade = "B";
       remarks = "You need to improve";
   } else {
       grade = "Fail";
       remarks = "Sorry";
   }

   document.write("<h1>Marks Sheet</h1>")
   document.write("<p>Total Marks: " + totalMarks + "</p>");
   document.write("<p>Marks Obtained: " + totalObtainedMarks2 + "</p>");
   document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
   document.write("<p>Grade: " + grade + "</p>");
   document.write("<p>Remarks: " + remarks + "</p>");

// ============ Question # 7 =============

var secretNumber = Math.floor(Math.random() * 10) + 1;

var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, try again!");
}

// ============ Question # 8 ===============

var userNumber = prompt("Enter a number:");

if (userNumber % 3 === 0) {
    alert(userNumber + " is divisible by 3.");
} else {
    alert(userNumber + " is not divisible by 3.");
}

// ============= Question # 9 ================

var userNumber = prompt("Enter a number:");

if (userNumber % 2 === 0) {
    alert(userNumber + " is an even number.");
} else {
    alert(userNumber + " is an odd number.");
}

// ============== Question # 10 ===============

var temperature = prompt("Enter the temperature in degrees Celsius:");

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("It's freezing outside!");
}

// ============== Question # 11 ===============

var numb1 = parseFloat(prompt("Enter the first number:"));

var numb2 = parseFloat(prompt("Enter the second number:"));

var operation = prompt("Enter the operation (+, -, *, /, %):");

var result3;

if (operation === "+") {
    result3 = numb1 + numb2;
} else if (operation === "-") {
    result3 = numb1 - numb2;
} else if (operation === "*") {
    result3 = numb1 * numb2;
} else if (operation === "/") {
    if (numb2 === 0) {
        alert("Division by zero is not allowed.");
    } else {
        result3 = numb1 / numb2;
    }
} else if (operation === "%") {
    result3 = numb1 % numb2;
} else {
    alert("Invalid operation");
}

if (result3 !== undefined) {
    alert("Result: " + result3);
}

// ================================= Assignment # 12 to 13 ================================

// ============ Question # 1 =============

function checkCharacter(char) {
    var charCode = char.charCodeAt(0);
  
    if (charCode >= 48 && charCode <= 57) {
      return "Number";
    } else if (charCode >= 65 && charCode <= 90) {
      return "Uppercase Letter";
    } else if (charCode >= 97 && charCode <= 122) {
      return "Lowercase Letter";
    } else {
      return "Other Character";
    }
  }
  
  var input = "A";
  var result3 = checkCharacter(input);
  
  console.log(input + " is a " + result3);

// ============= Question # 2 ===============

function findLargerNumber(a, b) {
    if (a > b) {
      console.log(`${a} is larger than ${b}.`);
    } else if (b > a) {
      console.log(`${b} is larger than ${a}.`);
    } else {
      console.log(`${a} and ${b} are equal.`);
    }
  }
  
  const num11 = parseInt(prompt("Enter the first integer:"));
  const num22 = parseInt(prompt("Enter the second integer:"));
  
  if (!isNaN(num11) && !isNaN(num22)) {
    findLargerNumber(num11, num22);
  } else {
    console.log("Invalid input. Please enter valid integers.");
  }
  
// ============= Question # 3 ==============

function checkNumberSign(number) {
    if (number > 0) {
      console.log(`${number} is positive.`);
    } else if (number < 0) {
      console.log(`${number} is negative.`);
    } else {
      console.log(`${number} is zero.`);
    }
  }
  
  const userInput = parseFloat(prompt("Enter a number:"));
  
  if (!isNaN(userInput)) {
    checkNumberSign(userInput);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }

// ============= Question # 4 =============

// Function to check if a character is a vowel
function isVowel(char) {
    // Convert the character to lowercase to handle both cases (upper and lower)
    char = char.toLowerCase();
  
    // Define a string of vowels
    const vowels = "aeiou";
  
    // Check if the character is in the list of vowels
    return vowels.includes(char);
  }
  
  // Example usage:
  const userInput1 = prompt("Enter a character (single letter):");
  
  // Check if the input is a single character
  if (userInput1.length === 1) {
    if (isVowel(userInput1)) {
      console.log(`${userInput1} is a vowel.`);
    } else {
      console.log(`${userInput1} is not a vowel.`);
    }
  } else {
    console.log("Invalid input. Please enter a single character.");
  }

// ============ Question # 5 ==============

const correctPassword = "mySecretPassword";

const userPassword = prompt("Enter your password:");

if (userPassword === null || userPassword === "") {
  console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password.");
}

// ============= Question # 6 ==============

var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting)

// ============= Question # 7 ===============

var userInput2 = prompt("Enter the time in 24-hour format (e.g., 1900):");

var time = parseInt(userInput2);

if (time >= 0000 && time < 1200) {
  console.log("Good morning.");
} else if (time >= 1200 && time < 1700) {
  console.log("Good afternoon.");
} else if (time >= 1700 && time < 2100) {
  console.log("Good evening.");
} else if (time >= 2100 && time <= 2359) {
  console.log("Good night.");
} else {
  console.log("Invalid time input.");
}


// ================================= Assignment # 13 to 15 =================================

// =========== Question # 1 ==============

let studentNames = [];

// =========== Question # 2 ==============

let studentNames1 = new Array();

// ============ Question # 3 ==============

let stringArray = ["Dog", "cat", "lion"];

// ============ Question # 4 ==============

let numbersArray = [10, 20, 30, 40];

// ============ Question # 5 ==============

let booleanArray = [true, false, true, false];

// ============ Question # 6 ==============

let mixedArray = ["Hi there", 5, true, null];

// ============ Question # 7 ==============

let qualifications = ["SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M.PHIL", "phD"];

document.write(`<h1>Qualifications</h1>`)
document.write(`1.SSC<br>2.HSC<br>3.BCS<br>4.BS<br>5.B.COM<br>6.MS<br>7.M.phil<br>8.phD<br><br><br>`)

// ============= Question # 8 ==============

let studentName1 = ["Michael"];
let studentName2 = ["John"];
let studentName3 = ["Tony"];

let scoreOfStudent1 = 320;
let scoreOfStudent2 = 230;
let scoreOfStudent3 = 480;

document.write(`Score of ${studentName1} is ${scoreOfStudent1}. Percentage: 64%<br>`)
document.write(`Score of ${studentName2} is ${scoreOfStudent2}. Percentage: 46%<br>`)
document.write(`Score of ${studentName3} is ${scoreOfStudent3}. Percentage: 96%<br><br><br>`)

// ============== Question # 9 ===============

let colors = ["red", "blue", "green", "pink", "yellow"];
document.write(`9. ${colors}.<br>`)

colors.unshift("brown");
document.write(`a. ${colors}.<br>`)

colors.push("indigo");
document.write(`b. ${colors}.<br>`)

colors.splice(0,0, "orange", "black")
document.write(`c. ${colors}.<br>`)

colors.shift()
document.write(`d. ${colors}.<br>`)

colors.pop()
document.write(`e. ${colors}.<br>`)

colors.splice(2,0, "gray")
document.write(`f. ${colors}.<br>`)

colors.splice(4,2)
document.write(`g. ${colors}.<br><br><br>`)

// =============== Question # 10 ================

let studentScores = [320, 230, 480, 120];
document.write(`Scores of Students: ${studentScores}<br>`)

studentScores.sort()
document.write(`Ordered Scores of Students: ${studentScores}<br><br><br>`)

// ============== Question # 11 =================

var cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];

var selectedCities = [];

selectedCities.push(cities[2]);
selectedCities.push(cities[3]);
selectedCities.push(cities[4]);

document.write("Selected cities list:<br>", selectedCities);
document.write("<br><br><br>")
// ============== Question # 12 ================

let arr = ["This ", "is ", "my ", "cat "];
let result = arr.join("");

document.write(result);
document.write("<br><br><br>")

// =============== Question # 13 ================

var fifoQueue = [];

fifoQueue.push("Keyboard");
fifoQueue.push("mouse");
fifoQueue.push("printer");
fifoQueue.push("monitor");

document.write("out:<br>", fifoQueue.shift());
document.write("<br>out:<br>", fifoQueue.shift());
document.write("<br>out:<br>", fifoQueue.shift());
document.write("<br>out:<br>", fifoQueue.shift());
document.write("<br><br><br>")

// ============== Question # 14 =================

var lifoStack = [];

lifoStack.push("Keyboard");
lifoStack.push("mouse");
lifoStack.push("printer");
lifoStack.push("monitor");

document.write("out:<br>", lifoStack.pop());
document.write("<br>out:<br>", lifoStack.pop());
document.write("<br>out:<br>", lifoStack.pop());
document.write("<br>out:<br>", lifoStack.pop());
document.write("<br><br><br>")

// ============== Question # 15 =================

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

var dropdownHTML = '<select id="manufacturerSelect">';

for (var i = 0; i < manufacturers.length; i++) {
  dropdownHTML += '<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>';
}

dropdownHTML += '</select>';

document.write(dropdownHTML);
