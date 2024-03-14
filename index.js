let result = document.querySelector('#result');
let search = document.querySelector('#search-btn');
let cityRef = document.querySelector('#city');
let apiKey = '42d16758fb5e658bc956f7d251b02237';
const getWeather = () => {
    let cityValue = cityRef.value;
    if (cityRef.length === 0) {
        result.innerHTML = `<h3 class='msg'>Please enter a city name</h3>`;
    }
    else {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
        cityRef.value = '';
        fetch(url).then((res) => {
            return res.json();
        }).then((data) => {
            console.log(data);
            result.innerHTML = `
            <h2>${data.name}</h2>
            <h4 class='weather'>${data.weather[0].description}</h4>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
            <h1>${data.main.temp}°</h1>
            <div class='temp'>
                <div>
                    <h4 class='title'>min</h4>
                    <h4 class='temp1'>${data.main.temp_min}°</h4>
                </div>
                <div>
                    <h4 class='title'>max</h4>
                    <h4 class='temp1'>${data.main.temp_max}°</h4>
                </div>
                <div>
                    <h4 class='title'>Feels like</h4>
                    <h4 class='temp1'>${data.main.feels_like}°</h4>
                </div>
                <div>
                    <h4 class='title'>Humidity</h4>
                    <h4 class='temp1'>${data.main.humidity}</h4>
                </div>
            </div>
            `;
        }).catch(() => {
            result.innerHTML = `<h3 class='msg'>City not found</h3>`;
        })
    }
}
// window.addEventListener('load', getWeather);
search.addEventListener('click', getWeather);