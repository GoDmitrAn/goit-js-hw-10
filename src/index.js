import './css/styles.css';
let debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');

const searchParams =`fields=name,capital,population,flags,languages`;
inputEl.addEventListener('input', debounce(userInputValue , DEBOUNCE_DELAY));

function userInputValue(e) {
    const userValue = e.target.value;
    if(!userValue)return
    fetchCountries(userValue)
}

function fetchCountries(countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?${searchParams}`)
        .then(response => {
            // console.log(response.json());
            return response.json();
        }).then(city => {
            loggingCity(city)
            }).catch(error => {
            console.log(error)
        });
    function loggingCity(data) {
        
        if (data.length > 10) { console.log('too many matches'); }
        else {
            data.map(item => {
                console.log(item.name.official);
                const arr=item.capital
                console.log(arr[0]);
                 console.log('=============');
            });
            console.log('=================================');
        }
    }
}
