const countryListEl = document.querySelector('.country-list')
const countryInfoEl = document.querySelector('.country-info')
export {countryListEl,countryInfoEl}
import './css/styles.css';
import './css/user-style.css'
import { fetchCountries } from './fetchCountries'
let debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');


inputEl.addEventListener('input', debounce(userInputValue , DEBOUNCE_DELAY));

function userInputValue(e) {
    const userValue = e.target.value.trim();
    if (!userValue) {
        countryListEl.innerHTML = '';
        countryInfoEl.innerHTML = '';
        return
    }
    fetchCountries(userValue)
}

