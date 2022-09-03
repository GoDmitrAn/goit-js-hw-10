const countryListEl = document.querySelector('.country-list')
const countryInfoEl = document.querySelector('.country-info')
export {countryListEl,countryInfoEl}
import './css/styles.css';
import { fetchCountries } from './fetchCountries'
let debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');

countryListEl.style.listStyle="none"
inputEl.addEventListener('input', debounce(userInputValue , DEBOUNCE_DELAY));

function userInputValue(e) {
    const userValue = e.target.value.trim();
    if(!userValue)return
    fetchCountries(userValue)
}

