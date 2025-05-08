document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('hello boss');

    const accountNumber = document.getElementById('Account-number').value;
    // const convertAccountNumber = parseInt(accountNumber);
    // console.log(convertAccountNumber);

    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin);
    // console.log(convertAccountNumber, convertPin);

   if(accountNumber.length === 11){
    if(convertPin === 1234){
        // console.log('its oky');
        window.location.href = 'main.html';
    }
    else{
        alert('need to valid pin number')
    }
   }
   else{
    alert('need to valid account')
   }






})