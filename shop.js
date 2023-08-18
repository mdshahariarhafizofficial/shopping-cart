// const plusBtn = document.getElementById('plus-btn');
// plusBtn.addEventListener('click', function(){
//     const inputValue = document.getElementById('input-value').value;
//     const inputValueNumber = parseFloat(inputValue);

//     const totalValue = inputValueNumber+1
//     document.getElementById('input-value').value = totalValue;

    
//     const ipPrice = document.getElementById('ip-price').innerText;
//     // const ipPriceNumber = parseFloat(ipPrice);
//     const totalIpPrice = totalValue*1219;
//     document.getElementById('ip-price').innerText = totalIpPrice;

// })

itemAddFun('plus-btn', 1219)


const minusBtn = document.getElementById('minus-btn');
minusBtn.addEventListener('click', function(){
    const inputValue = document.getElementById('input-value').value;
    const inputValueNumber = parseFloat(inputValue);
    const totalNegativeValue = inputValue-1;
    if (totalNegativeValue == 0){
        return 0;
    }
    document.getElementById('input-value').value = totalNegativeValue;


    const ipPrice = document.getElementById('ip-price').innerText;
    const totalIpPrice = totalNegativeValue*1219;
    document.getElementById('ip-price').innerText = totalIpPrice;

})

function itemAddFun(id, price) {
    const plusBtn = document.getElementById(id);
    plusBtn.addEventListener('click', function(){
    const inputValue = document.getElementById('input-value').value;
    const inputValueNumber = parseFloat(inputValue);

    const totalValue = inputValueNumber+1
    document.getElementById('input-value').value = totalValue;

    
    const ipPrice = document.getElementById('ip-price').innerText;
    // const ipPriceNumber = parseFloat(ipPrice);
    const totalIpPrice = totalValue*price;
    document.getElementById('ip-price').innerText = totalIpPrice;

})
}