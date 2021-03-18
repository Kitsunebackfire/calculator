let numbers = [];
let operations = [];
let currentNumber = '0';

function operate(num1, num2, op) {
    switch(op) {
        case '+':
            return num1 + num2;
        
        case '-':
            return num1 - num2;
        
        case '×': 
            return num1 * num2;

        case '÷':
            return num1 / num2;

        default:
            return '0';
    }

}

function Calculate() {
    let total = 0;
    for (let i = 0; i<numbers.length; i++) {
        if (i === 0) {
            total = Number.parseFloat(numbers[i]);
        }else{
            total = operate(total, Number.parseFloat(numbers[i]), operations[i-1]);
        }
    }
    return `${total}`;
}

function operatorPress(op) {
    operations.push(op);
    numbers.push(currentNumber);

    if (op == "=") {
        currentNumber = Calculate();
        updateDisplay(currentNumber);
        reset(currentNumber);
    }else {
        currentNumber = '0';
        updateDisplay();
    }
}

function numberPress(num) {
    currentNumber === '0'? currentNumber = num : currentNumber += num;
    updateDisplay(currentNumber);
}

function reset(num = '0') {
    numbers = [];
    operations = [];
    currentNumber = num;
}

function updateDisplay(num = '0') {
    const digitCount = num.length;
    const displayEl = document.getElementById('display');

    displayEl.innerText = num;
}


function deleteEnd() {
    let displayEl2 = document.getElementById('display') 
    displayEl2 = displayEl2.innerText.slice(0, displayEl2.innerText.length - 1);
    currentNumber = displayEl2;
    
}

function handleButtonPress(btnhtml) {
    if (btnhtml === '.') {
        currentNumber = currentNumber + '.';
        updateDisplay(currentNumber);
    }else if (btnhtml === 'AC') {
        console.log('Im cleared');
        reset();
        updateDisplay();
    }else if (btnhtml ==='Delete') {
        console.log("I delete stuff on the end");
        deleteEnd();
        updateDisplay(currentNumber);
    }else if (!isNaN(Number.parseInt(btnhtml))) {
        numberPress(btnhtml);
    }else {
        operatorPress(btnhtml);
    }
}


function main() {
    Array.from(document.getElementsByClassName('btn'))
        .forEach(btn => {
            btn.addEventListener('click', () => handleButtonPress(btn.innerHTML))
            
        });
    console.log(Array);
}

main();
