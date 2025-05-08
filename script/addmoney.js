document.getElementById('cashout').style.display = 'none';

document.getElementById('add-money-box').addEventListener('click',function(){
    document.getElementById('addmoney').style.display = 'block';
    document.getElementById('cashout').style.display = 'none';
})

document.getElementById('cashout-box').addEventListener('click',function(){
    document.getElementById('addmoney').style.display = 'none';
    document.getElementById('cashout').style.display = 'block';
})


document.getElementById('add-money').addEventListener('click',function(event){
    // console.log('sharafat rohoman')
    event.preventDefault();
    const accountNumber = document.getElementById('Account-number').value;
    const pin = document.getElementById('pin').value;
    const convertedPin = parseInt(pin);
    // console.log(convertedPin)
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    // console.log(convertedAmount)

    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if(accountNumber.length === 11){
        if(convertedPin === 1234){
            const sum = convertedMainBalance + convertedAmount;
            // console.log(convertedMainBalance, convertedAmount);
            // console.log(sum) ;
            document.getElementById('main-balance').innerText = sum;

        }

    }
    else{
        alert('account number invalid')
    }

})