import { countryInfoEl, countryListEl } from "./index";
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '380px',
  position: 'center-top',
  distance: '10px',
  timeout: 1500
});

const searchParams = `fields=name,capital,population,flags,languages`;


export const fetchCountries = function(countryName) {
    fetch(`https://restcountries.com/v3.1/name/${countryName}?${searchParams}`)
        .then(response => {
            if (!response.ok) {
            throw new Error(response.status);
            }
            return response.json();
        }).then(countryObj => {
                    markupCountries(countryObj);
                    }).catch(error => {
                        console.log("Country not found ", error)
             clearArticlesContainer();
       clearInfoContainer();
                        Notiflix.Notify.failure('Oops, there is no country with that name');
                    });
    
}
function markupCountries(data) {
    let fullTemplate = ''
    let infoTemplate=''
     if (data.length > 10) {
         clearArticlesContainer();
         clearInfoContainer();
         
        Notiflix.Notify.info('too many matches');

     } else {
          if (data.length == 1) {
              clearArticlesContainer();
              clearInfoContainer();
             
                const {flags, capital, languages,population,name} = data[0];
              infoTemplate = `<img src="${flags.svg}" alt="country flag" class="country-flag">
                                 <h1 class="country-name">${name.official}</h1>
                                 <ul class="info-list"><li class="info-item"><h2>Capital:</h2><span>${capital}</span></li>
                                                            <li class="info-item"><h2>Population:</h2><span>${population}</span></li>
                                                            <li class="info-item"><h2>Languages:</h2><span>${Object.values(languages)}</span></li></ul>`
     } else {
         clearArticlesContainer();
         clearInfoContainer();
        
        fullTemplate =   data.map(item => {
                
                  return `<li class="country-list__item">
            <img src="${item.flags.svg}" alt="country flag"><p>${item.name.official}</p></li>`;
                  
        
              }).join('');
          
        }
     }
    
    
    countryListEl.insertAdjacentHTML("afterbegin", fullTemplate);
    countryInfoEl.insertAdjacentHTML("afterbegin", infoTemplate);

    
}
    
    function clearArticlesContainer() {
        countryListEl.innerHTML = '';
}
 function clearInfoContainer() {
        countryInfoEl.innerHTML = '';
}