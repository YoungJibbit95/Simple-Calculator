const { ipcRenderer } = require('electron');

// Define variables
let output = document.getElementById("output");
let buttons = document.querySelectorAll(".button");
let menuButton = document.querySelector(".menu-button");
let menuPopup = document.getElementById("menuPopup");
let codeEditorPopup = document.getElementById("codeEditorPopup");
let fontPopup = document.getElementById("fontPopup");
let aboutPopup = document.getElementById("aboutPopup");

let fontList = [
    "MISans",
    "Poppins",
    "Roboto",
];

// Initialize function
const initializer = () => {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            appendToOutput(button.textContent);
        });
    });

    menuButton.addEventListener("click", toggleMenu);
};

// Helper functions
const appendToOutput = (value) => {
    output.textContent += value;
};

const clearOutput = () => {
    output.textContent = "";
};

const calculate = () => {
    try {
        output.textContent = eval(output.textContent);
    } catch (error) {
        output.textContent = "Error";
    }
};

const backspace = () => {
    output.textContent = output.textContent.slice(0, -1);
};

const toggleMenu = () => {
    menuPopup.classList.toggle("show");
};

const toggleCodeEditor = () => {
    codeEditorPopup.classList.toggle("show");
};

const closeCodeEditorPopup = () => {
    codeEditorPopup.classList.remove("show");
};

const showFont = () => {
    fontPopup.classList.add("show");
};

const closeFontPopup = () => {
    fontPopup.classList.remove("show");
};

const applyFont = (font) => {
    document.body.style.fontFamily = font;
    closeFontPopup();
};

const showAbout = () => {
    aboutPopup.classList.add("show");
};

const closeAboutPopup = () => {
    aboutPopup.classList.remove("show");
};

const showOtherProjects = () => {
    // Implement functionality to show other projects
};

// Event listeners
window.onload = initializer;

// Get the container element
var lineNumbersContainer = document.getElementById("lineNumbers");

// Loop to create and append spans with numbers
for (var i = 1; i <= 100; i++) {
    var span = document.createElement("span");
    span.textContent = i;
    lineNumbersContainer.appendChild(span);
}
