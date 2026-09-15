async function getWeather(){
    const city = document.getElementById("input_bar").value;

    if(!city){
        console.log(city)
        console.log("Error No City");
        return;
    }

    try{
        const url = 
        "http://api.weatherapi.com/v1/current.json" + 
        "&q=" + encodeURIComponent(city);

        const response = await fetch(url);
        const data = await response.json();
        document.getElementById("weather_icon").src = "https:" + data.current.condition.icon;
        document.getElementById("location").textContent = data.location.name + ", " + data.location.country;
        document.getElementById("location").textContent = data.location.name + ", " + data.location.country;
        document.getElementById("temperature").textContent = data.current.temp_c + "°C";
        document.getElementById("condition").textContent = data.current.condition.text;
        document.getElementById("humidity").textContent = data.current.humidity;
        document.getElementById("wind").textContent = data.current.wind_kph;
        document.getElementById("feelsLike").textContent = data.current.feelslike_c+ "°C";
    } catch(err){
        console.log(err);
    }
}
