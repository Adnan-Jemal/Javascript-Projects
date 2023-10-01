const firstCurrency = document.getElementById("currency-frist")
const monyFirst = document.getElementById("mony-first")
const SecondCurrency = document.getElementById('currency-second')
const monytwo = document.getElementById('monytwo');
const conversionrate = document.getElementById('exchange-rate')


function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/3ac9d15f726e079119a8c624/latest/${firstCurrency.value}`)
        .then((response) => response.json())
        .then((data) => {
            const rate = data.conversion_rates[SecondCurrency.value];
            conversionrate.innerText = `1 ${firstCurrency.value} = ${rate} ${SecondCurrency.value}`;
            monytwo.innerText = (firstCurrency.value * rate).toFixed(2);
            console.log(monyFirst.value)
            console.log((firstCurrency.value * rate).toFixed(2))
        })
        .catch((error) => {
            console.log(error);
        });
}

updateRate()


firstCurrency.addEventListener("change",updateRate)
monyFirst.addEventListener("input",updateRate)
SecondCurrency.addEventListener("change",updateRate);
