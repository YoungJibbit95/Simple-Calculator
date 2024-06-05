const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
    display.classList.toggle('show'); // Toggle the show class on the display element
    setTimeout(() => display.classList.toggle('show'), 1000); // Toggle back after 1 second
}


function clearDisplay(){
    display.value = "";
}




function calculate(){
    try {
        let expression = display.value;

       
        expression = expression.replace(/√(\d*\.?\d+)/g, function(match, number) {
            return Math.sqrt(parseFloat(number));
        });

        
        display.value = eval(expression);
    } catch(error){
        display.value = "Error";
    }
}


function toggleDashboard() {
    var dashboard = document.getElementById("dashboard-window");
    if (dashboard.classList.contains("show")) {
        dashboard.classList.remove("show");
        setTimeout(() => dashboard.style.display = "none", 300);
    } else {
        dashboard.style.display = "block";
        setTimeout(() => dashboard.classList.add("show"), 10);
    }
}

function closeDashboard() {
    var dashboard = document.getElementById("dashboard-window");
    dashboard.classList.remove("show");
    setTimeout(() => dashboard.style.display = "none", 300);
}

function changeFontToSans() {
    document.body.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
}

function changeBackground() {
    document.body.style.background = "linear-gradient(140deg, darkblue 0%, darkred 100%)";
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
        addTouchAndClickListener(button, toggleDashboard);
    } else if (button.id === 'fontChange') {
        addTouchAndClickListener(button, changeFontToSans);
    } else if (button.id === 'close-dashboard') {
        addTouchAndClickListener(button, closeDashboard);
    } else if (button.id === 'changeBackground') {
        addTouchAndClickListener(button, changeBackground);
    } else {
        addTouchAndClickListener(button, () => appendToDisplay(value));
    }

    function appendToDisplay(input) {
        if (input === '√') {
            display.value += input;
        } else {
            display.value += input;
        }
    }

    function appendToDisplay(input) {
        if (input === '+' || input === '-' || input === '*' || input === '/') {

            display.value += input;
        } else if (input === '√') {

            display.value += 'mathLib.squareRoot(';
        } else {

            display.value += input;
        }
    }

});