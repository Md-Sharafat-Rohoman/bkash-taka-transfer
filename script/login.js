document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('hello boss');

    const accountNumber = document.getElementById('Account-number').value;
    const convertAccountNumber = parseInt(accountNumber);
    // console.log(convertAccountNumber);

    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin);
    console.log(convertAccountNumber, convertPin);
})