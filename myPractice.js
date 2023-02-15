function getInputValue(id){
    const inputField = document.getElementById(id).value;
    const inputFieldAmount = parseInt(inputField);
    return inputFieldAmount;
}

function setInnerText(id, value){
    const textField = document.getElementById(id);
    textField.innerText = value;
};

function setTotalAmount(){
    const chocolate = document.getElementById('chocolate').innerText;
    const chocolateAmount = parseInt(chocolate);
    const rose = document.getElementById('rose').innerText;
    const roseAmount = parseInt(rose);
    const diary = document.getElementById('diary').innerText;
    const diaryAmount = parseInt(diary);
    const totalAmount = chocolateAmount + roseAmount + diaryAmount;

    const totalTextField = document.getElementById('total');
    totalTextField.innerText = totalAmount;

}


document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
    const kitkatInputValue = getInputValue('kitkat-quantity') * 100;
    if(isNaN(kitkatInputValue)){
        alert('Please provide valid number')
    }
    document.getElementById('kitkat-quantity').value = '';

    setInnerText('chocolate',kitkatInputValue);
    setTotalAmount();
})

document.getElementById('rose-buy-btn').addEventListener('click',function(){
    const roseInputValue = getInputValue('rose-quantity') * 50;
    if(isNaN(roseInputValue)){
        alert('Please provide valid number')
    }
    document.getElementById('rose-quantity').value = '';

    setInnerText('rose',roseInputValue);
    setTotalAmount();
})

document.getElementById('diary-buy-btn').addEventListener('click',function(){
    const diaryInputValue = getInputValue('diary-quantity') * 200;
    if(isNaN(diaryInputValue)){
        alert('Please provide valid number')
    }
    document.getElementById('diary-quantity').value = '';

    setInnerText('diary',diaryInputValue);
    setTotalAmount();
})

document.getElementById('apply').addEventListener('click',function(){
    const promoCodeField = document.getElementById('promo-code');
    const promoCodeFieldString = promoCodeField.value;
    const promoCodeNumber = parseInt(promoCodeFieldString);
    promoCodeField.value = '';
    if(promoCodeNumber === 101){
        const totalAmountString = document.getElementById('total').innerText;
        const totalAmount = parseInt(totalAmountString);
        const discountAmount = totalAmount * 0.1;
        const finalAmount = totalAmount - discountAmount;

        const allCost = document.getElementById('all-total');
        allCost.innerText = finalAmount;
    }
    else{
        alert('Please provide valid promo code')
    }

})