const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search') 

const APIKEY = "3265874a2c77ae4a04bb96236a642d2f";

const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`

async function getWeatherByLocation(city) {
    const resp = await fetch(url(city), {
        origin: "cors" });
    const respData = await resp.json();
    
    console.log(respData, KtoC(respData.main.temp));

    addWeatherToPage(respData);
} 

function addWeatherToPage(data) {
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
    <small>The Temperature is</small>
    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>${temp} &#x2103;</h2>
    <p>in ${search.value}</p>
    <small>${data.weather[0].main}</small>
    
    `;

    // cleanup
    main.innerHTML = '';

    main.appendChild(weather);
} 

function KtoC(K) {
    return Math.floor(K - 273.15);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    

    
}) 