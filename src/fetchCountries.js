import { countryInfoEl, countryListEl } from "./index";

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
                console.log("Country not found ",error)
                    });
    // function loggingCity(data) {
        
    //     if (data.length > 10) { console.log('too many matches'); }
    //     else {
    //         data.map(item => {
    //             console.log(item.name.official);
    //             const arr=item.capital
    //             console.log(arr[0]);
    //             console.log('=============');
    //         });
    //         console.log('=================================');
    //     }
    // }

   
}
function markupCountries(data) {
     let fullTemplate = ''
     if (data.length > 10) {
         clearArticlesContainer();
         console.log('too many matches');
     } else {
          if (data.length == 1) {
              clearArticlesContainer();
              console.log(data);
              const oneCountry = data[0];
              fullTemplate = `<div> <img src="${oneCountry.flags.svg}" alt="country flag" style="width:30px;height:15px">
                                 <h1>${oneCountry.name.official}</h1></div>`
     } else {
         clearArticlesContainer();
        
        data.map(item => {
            console.log(item);
            const template = `<li><span style="margin-right:20px;display:inlone-block">
            <img src="${item.flags.svg}" alt="country flag" style="width:30px;height:15px"></span><p style="display: inline-block">${item.name.official}</p></li>`;
            fullTemplate += template;
        
        })
          
        }
     }
    
    
    countryListEl.insertAdjacentHTML("afterbegin", fullTemplate);
    }
    function clearArticlesContainer() {
    countryListEl.innerHTML = '555555';
}