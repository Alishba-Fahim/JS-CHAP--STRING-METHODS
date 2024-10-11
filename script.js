// **************CHAPTER# 21- 25  (STRING METHODS)**********************************

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// // 

// Answer--------

let firstN = prompt('Enter your First Name?');
let lastN = prompt('Enter your Last Name?');
let fullN = firstN + " " + lastN;
document.write(`<b>${fullN}</b><br/>`);

// ==========================================================================================================
// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// Answer--------
let userPhone = prompt('Enter your favorite mobile phone model ?');
phoneLength = userPhone.length;
document.write(`<b> <br/> My Favourite Phone is:${userPhone} <br/> Length of my phone is ${phoneLength}<br/>`);

// ==========================================================================================================
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser

// Answer--------

let string = "Pakistani";
let index = string.indexOf('n');
document.write(`<br/>String: ${string} <br/> Index  of 'n': ${index}<br/>`);


// ==========================================================================================================
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// Answer--------
let str = "Hello world";
let lastInd = str.lastIndexOf('l');
document.write(`<br/>String: ${str} <br/> Index  of 'l': ${lastInd}<br/>`);

// ==========================================================================================================

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// Answer--------

let countryName = "Pakistani";
let charName = countryName.charAt(3);
document.write(`<br/>String: ${countryName} <br/> Character at Index 3: ${charName}<br/>`);

// ==========================================================================================================

// 6. Repeat Q1 using string concat() method.

// Answer--------
let firstName = prompt('Enter your First Name?');
let lastName = prompt('Enter your Last Name?');
let fullName = firstName.concat(" ", lastName);
document.write(`<b><br/> ${fullName} <b/> <br/>`);

// ==========================================================================================================
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// Answer--------
let city = "Hyderabad";
let newCity = city.replace("Hyderabad", "Islamabad");
document.write(`<b><br/>City: ${city} <br/> After replacement: ${newCity} <br/>`);

// ==========================================================================================================
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

// Answer--------

let message = "Ali and Sami are best friends. They play cricket and football together.";
let newMsg = message.replaceAll("and", "&");
document.write(`<b><br/> ${newMsg}<br/><br/>`);

// ==========================================================================================================

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// Answer--------
let value = "472";
let numValue = Number(value);
document.write(`<b><br/> Value: ${value}<br/> Type of value: ${typeof (value)}<br/>`);
document.write(`<b>Value: ${numValue}<br/> Type of converted value: ${typeof (numValue)}<br/>`);

// ==========================================================================================================

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// Answer--------

let userInput = prompt("Enter a word");
let UpperCase = userInput.toUpperCase();
document.write(`<b><br/> User Input: ${userInput}<br/> Upper Case: ${UpperCase} <br/>`);


// ==========================================================================================================

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// Answer--------

let userInp = "javascript";
let titCase = userInp[0].toUpperCase() + userInp.slice(1).toLowerCase();
document.write(`<br/>User Input: ${userInp}<br/> Title Case: ${titCase}<br/>`);

// ==========================================================================================================

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// Answer--------

let num = 35.36;
let removeNum = num.toString().replace(".", "");
document.write(`<br/>Original number: ${num} <br/> Number without dot: ${removeNum}<br/>`);

// ==========================================================================================================

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Answer--------   
let username = prompt("Enter your username:");

let invalidChars = ['@', '.', ',', '!'];
let isValid = true;

for (let i = 0; i < invalidChars.length; i++) {
    if (username.includes(invalidChars[i])) {
        isValid = false;
        break;
    }
}

if (isValid) {
    document.write(`<br/>Username is valid: ${username}<br/>`);
} else {
    alert("<br/>Please enter a valid username without special characters like @, ., , or !<br/>");
}


// ==========================================================================================================

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// Answer--------  
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let user = prompt("Welcome to Our Bakery. What do you want to order Sir/Mam?").toLowerCase();

let indexx = A.findIndex(item => item.toLowerCase() === user);

if (indexx !== -1) {
    alert(`${A[indexx]} is available at index ${indexx} in our bakery.`);
} else {
    alert(`We are sorry! ${user} is not available in our bakery.`);
}

// ==========================================================================================================
// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// Answer-------- 

let password = prompt("Enter your password:");

function isValidPassword(password) {
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (!isNaN(password.charAt(0))) {
        alert("Password should not start with a number.");
        return false;
    }

    let hasAlphabet = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let char = password.charAt(i);
        if (isNaN(char)) {
            hasAlphabet = true;
        } else {
            hasNumber = true;
        }
    }

    if (!hasAlphabet || !hasNumber) {
        alert("Password must contain both alphabets and numbers.");
        return false;
    }

    return true;
}

if (isValidPassword(password)) {
    alert("Password is valid.");
} else {
    alert("Please enter a valid password.");
}

// ==========================================================================================================

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// Answer-------- 
var university = "University Of Karachi";
let newUni = university.split(""); // Split string into individual characters

// Display each character in a new line
for (let i = 0; i < newUni.length; i++) {
    document.write(newUni[i] + "<br/>"); // Each character on a new line
}

// ==========================================================================================================
// 17.Write a program to display the last character of a user
// input.

// Answer-------- 
let user_Input = prompt("Enter a string:");
let lastChar = user_Input[user_Input.length - 1];

document.write(` <br>User Input: ${user_Input} <br> Last Character of input: ${lastChar}`);

// ==========================================================================================================

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.


// Answer-------- \

let sentence = "The quick brown fox jumps over the lazy dog";
let lowerCaseSentence = sentence.toLowerCase();
let count = lowerCaseSentence.split("the").length - 1;

document.write(`<br>The word "the" appears ${count} times in the sentence.<br>`);


// ===============================================END==========================================================