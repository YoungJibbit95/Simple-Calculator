const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch(error){
        display.value = "Error";
    }
}

function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("show")) {
        menu.classList.remove("show");
        setTimeout(() => menu.style.display = "none", 300);
    } else {
        menu.style.display = "block";
        setTimeout(() => menu.classList.add("show"), 10);
    }
}

function openFontMenu() {
    var fontMenu = document.getElementById("font-menu");
    fontMenu.style.display = "block";
}

function changeFont(fontName) {
    document.getElementById("calculator").style.fontFamily = fontName;
}


function addTouchAndClickListener(element, handler) {
    let touchHandled = false;

    element.addEventListener('click', function(event) {
        if (!touchHandled) {
            handler(event);
        }
    });

    element.addEventListener('touchstart', function(event) {
        touchHandled = true;
        handler(event);
        setTimeout(() => touchHandled = false, 500);
    });
}


document.querySelectorAll('button').forEach(button => {
    const value = button.innerText;
    if (button.classList.contains('operator-btn')) {

    } else if (value === 'C') {
        addTouchAndClickListener(button, clearDisplay);
    } else if (value === '=') {
        addTouchAndClickListener(button, calculate);
    } else if (value === 'Menu') {
        addTouchAndClickListener(button, toggleMenu);
    } else {
        addTouchAndClickListener(button, () => appendToDisplay(value));
    }
});