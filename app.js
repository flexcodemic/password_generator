
// Password Generator App

const input = document.querySelector("#txtInput");
const inputBtn = document.querySelector("#inputBtn");
const lowerBtn = document.querySelector("#lowerBtn");
const upperBtn = document.querySelector("#upperBtn");
const numberBtn = document.querySelector("#numberBtn");
const symbolBtn = document.querySelector("#symbolBtn");
const generatedResult = document.querySelector("#generatedResult");

// Optional booleans value to "on" or "off"
let includeLowerCase = false;
let includeUpperCase = false;
let includeNumber = false;
let includeSymbol = false;

// Password Generator function
function passwordGenerator(
    length,
    includeLowerCase,
    includeUpperCase,
    includeNumber,
    includeSymbol
) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars = "~!@#$%^&*()_-+=:;',[]{{\\|?.";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumber ? numberChars : "";
    allowedChars += includeSymbol ? symbolsChars : "";

    if (input.value === "") {
        return "Enter a valid password length";
    }

    if (length <= 0) {
        return "❌ Password length must be at least 1";
    } else if (length > 14) {
        return "❌ Password length must NOT be greater than 14";
    }

    if (allowedChars.length === 0) {
        return "❌ Please select at least one character type";
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

// Main Button Event Listener
inputBtn.addEventListener("click", () => {
    const passwordLength = parseInt(input.value, 10);
    const password = passwordGenerator(
        passwordLength,
        includeLowerCase,
        includeUpperCase,
        includeNumber,
        includeSymbol
    );
    generatedResult.textContent = password;


});

// Character Button Event Listener
lowerBtn.addEventListener("click", () => {
    includeLowerCase = !includeLowerCase;
    addLowerCase();
});

upperBtn.addEventListener("click", () => {
    includeUpperCase = !includeUpperCase;
    addUpperCase();
});

numberBtn.addEventListener("click", () => {
    includeNumber = !includeNumber;
    addNumber();
});

symbolBtn.addEventListener("click", () => {
    includeSymbol = !includeSymbol;
    addSymbol();
});

// Activate the lowercase character
function addLowerCase() {
    if(includeLowerCase) {
        
        return lowerBtn.classList.add("active");
    } else {
        return lowerBtn.classList.remove("active");
    }
}
// Activate the uppercase character
function addUpperCase() {
    if(includeUpperCase) {
        return upperBtn.classList.add("active");
    } else {
        return upperBtn.classList.remove("active");
    }
}
// Activate the number character
function addNumber() {
    if(includeNumber) {
        return numberBtn.classList.add("active");
    } else {
        return numberBtn.classList.remove("active");
    }
}
// Activate the symbols character
function addSymbol() {
    if(includeSymbol) {
        return symbolBtn.classList.add("active");
    } else {
        return symbolBtn.classList.remove("active");
    }
}