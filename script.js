//Variáveis e Seleção de Elementos
const apiKey = '60f3f899cdbdb2f702a599622631128a';
const apiCountryURL = 'https://flagsapi.com/BR/shiny/64.png';

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

//Funções
const getWheaterData = async (city) => {
    const apiWheaterURL = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid='+apiKey+'&lang=pt_br';

    const res = await fetch(apiWheaterURL);
    const data = await res.json();

    return data;
};

const showWheaterData = async (city) =>{
    const data = await getWheaterData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", `https://flagsapi.com/${data.sys.country}/shiny/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${data.wind.speed}km/h`;
};

//Eventos
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    showWheaterData(city);
});
