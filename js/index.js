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

    
   

    

  

    
} 