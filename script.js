
// Phone Elements
const increasePhone = document.getElementById('increasePhone');
const decreasePhone = document.getElementById('decreasePhone');
const numberOfPhone = document.getElementById('numberOfPhone');
const phonePrice = document.getElementById('phonePrice');

// Case elements
const increaseCase = document.getElementById('increaseCase');
const decreaseCase = document.getElementById('decreaseCase');
const numberOfCase = document.getElementById('numberOfCase');
const casePrice = document.getElementById('casePrice');

// Pricing elements
const subTotal = document.getElementById('subTotal');
const tax = document.getElementById('tax');
const total = document.getElementById('total');

// checkOut btn
const checkOut = document.getElementById('checkOut');




// For Increase Number of Phones.
increasePhone.addEventListener('click', function () {
    numberOfPhone.value++;
    setPhonesPrice();
    setSubtotal();
    setTax();
    setTotal();
})
decreasePhone.addEventListener('click', function () {
    if(numberOfPhone.value > 0) {
        numberOfPhone.value--;
        setPhonesPrice();
        setSubtotal();
        setTax();
        setTotal();
    }
})


// For Increase Number of Cases.
increaseCase.addEventListener('click', function () {
    numberOfCase.value++;
    setCasesPrice();
    setSubtotal();
    setTax();
    setTotal();
})
decreaseCase.addEventListener('click', function () {
    if(numberOfCase.value > 0) {
        numberOfCase.value--;
        setCasesPrice();
        setSubtotal();
        setTax();
        setTotal();
    }
})


// Particular Functions


function setPhonesPrice () {
    phonePrice.innerText = parseFloat(numberOfPhone.value) * 1219;
}

function setCasesPrice () {
    casePrice.innerText = parseFloat(numberOfCase.value) * 59;
    
}

function setSubtotal () {
    subTotal.innerText = parseFloat(phonePrice.innerText) + parseFloat(casePrice.innerText);
}
function setTax () {
    tax.innerText = (parseFloat(subTotal.innerText) * 0.1).toFixed(2);
}

function setTotal () {
    total.innerText = (parseFloat(subTotal.innerText) + parseFloat(tax.innerText)).toFixed(2);
}