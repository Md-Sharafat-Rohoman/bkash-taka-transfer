document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    const amount =  getInputValueById('amount');
    // console.log(amount);
    const pin = getInputValueById('pin');
    // console.log(pin)
    const accountNumber = document.getElementById('Account-number').value;
    // console.log(accountNumber);


    // const mainBalance = getInnerText('main-balance');
    // console.log(mainBalance);
    const mainBalance = getInnerTextById('main-balance');
    // console.log(mainBalance);

    const selectedBank = document.getElementById('select').value;
    console.log(selectedBank);





    if(amount<0){
        alert('positive number dite hobe');
        return;
    }



    if(accountNumber.length === 11){
        // console.log('valid account')
        if(pin === 1234){
            // console.log('valid pin')
            const sum = mainBalance + amount;
            // console.log(sum)
            // document.getElementById('main-balance').innerText = sum;
            setInnerTextByIdandValue('main-balance',sum);


            const container = document.getElementById('transaction-history');
            const p = document.createElement('p');
            p.innerText = `
            added ${amount} from ${accountNumber}
            `
            container.appendChild(p);

            




            
        }
        else{
            alert('pin number is invalid')
        }
    }
    else{
        alert('account number is invalid')
    }



})