'use strict';

const firstClassMinusBtn = document.querySelector('.first-class-minus');
const firstClassPlusBtn = document.querySelector('.first-class-plus');
const economyMinusBtn = document.querySelector('.economy-minus');
const economyPlusBtn = document.querySelector('.economy-plus');

// Increse Spinner
function increaseSpinner(itemPlus) {
    itemPlus.value++;
    itemPlus.value * 150;
}
// Decrease Spinner
function decreaseSpinner(itemMinus) {
    let decValue = Number(itemMinus.value);

    if (!decValue || decValue < 0) {
        itemMinus.classList.add('error');
    } else {
        itemMinus.value--;
        itemMinus.value * 150;
    }
}

//Total Price Count
function grandTotal() {
    let subTotal = (document.querySelector('.subtotal').textContent = getFirstClassPrice + getEconomyPrice);
    let userSubTotal = (document.querySelector('.user-subtotal').textContent = subTotal);
    let vat = (document.querySelector('.vat').textContent = Math.round(subTotal * 0.1));
    let userVat = (document.querySelector('.user-vat').textContent = vat);
    let total = (document.querySelector('.total').textContent = subTotal + vat);
    let userTotal = (document.querySelector('.user-total').textContent = total);
}

// Booking conform block
document.querySelector('.book-now').addEventListener('click', function () {
    const slNo = document.querySelector('.sl-no').value;
    const sName = document.querySelector('.name').value;
    const fryingDeparture = document.querySelector('.flying-departure').value;
    const fryingReturn = document.querySelector('.flying-return').value;

    if (!slNo) {
        document.querySelector('.warning').textContent = '⚠ Please fill required fields 😣';
    }
    else {
        document.querySelector(".booking-form").style.display = "none";
        document.querySelector(".booking-details").style.display = "block";
        document.querySelector(".user-sl-no").textContent = slNo;
        document.querySelector(".user-name").textContent = sName;
        document.querySelector(".user-departure-date").textContent = fryingDeparture;
        if (fryingReturn === "") {
			document.querySelector(".user-return-date").textContent = "No Return Ticket";
			} 
        else {
			document.querySelector(".user-return-date").textContent = fryingReturn;
		} 
        grandTotal();
	}
});
