let calculation = localStorage.getItem('calc') || '';
displayCal();

function updateCalculation(currentCal, symbol) {
    calculation = currentCal += symbol; 
    console.log(calculation);
    localStorage.setItem('calc', calculation);
    displayCal();
}

function displayCal() {
    document.querySelector('.js-current-cal').innerHTML = calculation;
}