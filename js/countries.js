const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
};

const displayCountries = countries => {
    console.log(countries[0]);
    const countryHtml = countries.map(country => getCountryHtml(country));
    // console.log(countryHtml[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countryHtml.join(' ');
}
//original
// const getCountryHtml = country => {
//     return `
//         <div class="single-country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
            
//                 <h3>Population: ${country.population}</h3>
//                 <p>${country.capital?country.capital:'no data found'}</p>
//         </div>
//     `
// }

//option 1
// const getCountryHtml = country => {
//     const { name, flags, capital, population } = country;
//     return `
//     <div class="single-country">
//         <h2>${name.common}</h2>
//         <img src="${flags.png}">
        
//             <h3>Population: ${population}</h3>
//             <p>${capital ? capital : 'no data found'}</p>
//     </div>
// `
// }

//option 2
const getCountryHtml = ({ name, flags, capital, population,area,region }) => {
    return `
    <div class="single-country">
        <h2>${name.common}</h2>
        <p style="color:red;">${area}</p>
        <h3 style="color:green;">${region}</h3>
        <img src="${flags.png}">
        <h3>Population: ${population}</h3>
        <p>${capital ? capital : 'no data found'}</p>
    </div>
`
}

loadCountries()