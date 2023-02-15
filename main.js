/* function getInputValue(id){
    const getInputArea = document.getElementById(id).value;
    const getInputValue = parseInt(getInputArea);
    return getInputValue;
};

function setInnerText(id,value){
    const area = document.getElementById(id);
    area.innerText = value;
};

function setTotalAmount(){
    const chocolate = document.getElementById('chocolate').innerText;
    const chocolateTotal = parseInt(chocolate);
    const rose = document.getElementById('rose').innerText;
    const roseTotal = parseInt(rose);
    const diary = document.getElementById('diary').innerText;
    const diaryTotal = parseInt(diary);
    const total = chocolateTotal + roseTotal + diaryTotal;

    const totalArea = document.getElementById('total');
    totalArea.innerText = total;
    return totalArea;
};




document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
    const KitkatInputValue = getInputValue('kitkat-quantity');
    if(isNaN(KitkatInputValue)){
        alert('Please provide a number');
    }
    const kitkatTotalPrice = KitkatInputValue * 100;
    document.getElementById('kitkat-quantity').value = '';

    setInnerText('chocolate',kitkatTotalPrice);
    setTotalAmount();
});

document.getElementById('rose-buy-btn').addEventListener('click',function(){
    const roseInputValue = getInputValue('rose-quantity');
    if(isNaN(roseInputValue)){
        alert('Please provide a number');
    }
    const roseTotalPrice = roseInputValue * 50;
    document.getElementById('rose-quantity').value = '';

    setInnerText('rose',roseTotalPrice);
    setTotalAmount();
});

document.getElementById('diary-buy-btn').addEventListener('click',function(){
    const diaryInputValue = getInputValue('diary-quantity');
    if(isNaN(diaryInputValue)){
        alert('Please provide a number');
    }
    const diaryTotalPrice = diaryInputValue * 200;
    document.getElementById('diary-quantity').value = '';

    setInnerText('diary',diaryTotalPrice);
    setTotalAmount();
});


document.getElementById('apply').addEventListener('click',function(){
    const promoInput = document.getElementById('promo-code');
    const promoInputValue = promoInput.value;
    const promoInputField = parseInt(promoInputValue);
    promoInput.value = '';
    if(promoInputField === 101){
        const totalArea = document.getElementById('total').innerText;
        const totalAmount = parseInt(totalArea);
        const discountAmount = totalAmount * 10 / 100;
        const discountTotal = totalAmount - discountAmount;

        const allTotal = document.getElementById('all-total');
        allTotal.innerText = discountTotal;
    }
    else{
        alert('Please provide correct promo code');
    }
})


 */