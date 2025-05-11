document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log('cashout btn')

    const accountNumber = document.getElementById('Account-number').value;
    // console.log(accountNumber);

    const amount = getInputValueById('cashOut-amount');

    const pin = getInputValueById('cashOutPin');
    const mainBalance = getInnerTextById('main-balance')

    if(amount>mainBalance){
        alert('invalid amount');
        return;
    }


    if (accountNumber.length === 11) {
        if (pin === 1234) {
            const sum = mainBalance - amount;
            setInnerTextByIdandValue('main-balance', sum);

            const container = document.getElementById('transaction-history');
            const p = document.createElement('p');
            p.innerText = `
            cashout ${amount} from this ${accountNumber} account
            `
            container.appendChild(p);
        }
    }
    else {
        alert('account number is invalid');
    }

})