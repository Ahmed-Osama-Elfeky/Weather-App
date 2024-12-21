var myData;
const apiKey = ''
var searchBox = document.querySelector('.find-location input.text');
var searchBtn = document.querySelector('.find-location input.button');
var weatherIcon = document.querySelector('.weather-icon');
var weatherIconTwo = document.querySelector('.weather-iconTwo');
var weatherIconThree = document.querySelector('.weather-iconThree');

const apiUrl= "https://api.weatherapi.com/v1/forecast.json?key=beffcd47441e44bfa5e133804241512&days=3&q=";
async function getWeather(city) {
    var myRequest = await fetch(apiUrl + city ,{ method: 'GET' });
    

    var myData = await myRequest.json();
    console.log(myData);
    //Day1
    document.querySelector('.location').innerHTML = myData.location.name;
    document.querySelector('.date').innerHTML = myData.location.localtime;
    document.querySelector('.degree').innerHTML = myData.current.temp_c+ '°C';
    document.querySelector('.status').innerHTML = myData.current.condition.text;
    document.querySelector('.humidity').innerHTML = myData.current.humidity + '%';
    document.querySelector('.wind').innerHTML = myData.current.wind_kph + 'km/h';
    document.querySelector('.region').innerHTML = myData.location.country;
    //Day2
    document.querySelector('.dayTwo').innerHTML = myData.forecast.forecastday[1].date;
    document.querySelector('.dayTwoMax-temp').innerHTML = myData.forecast.forecastday[1].day.maxtemp_c + '°C';
    document.querySelector('.dayTwoMin-temp').innerHTML = myData.forecast.forecastday[1].day.mintemp_c + '°C';
    document.querySelector('.dayTwoStatus').innerHTML = myData.forecast.forecastday[1].day.condition.text;
    //Day3
    document.querySelector('.dayThree').innerHTML = myData.forecast.forecastday[2].date;
    document.querySelector('.dayThreeMax-temp').innerHTML = myData.forecast.forecastday[2].day.maxtemp_c + '°C';
    document.querySelector('.dayThreeMin-temp').innerHTML = myData.forecast.forecastday[2].day.mintemp_c + '°C';
    document.querySelector('.dayThreeStatus').innerHTML = myData.forecast.forecastday[2].day.condition.text;


    console.log(myData.forecast.forecastday[1].day.condition.text);


    
        if (myData.forecast.forecastday[0].day.condition.text == 'Overcast') {
            weatherIcon.src="//cdn.weatherapi.com/weather/64x64/night/122.png";
            weatherIconTwo.src="//cdn.weatherapi.com/weather/64x64/night/122.png";
            weatherIconThree.src="//cdn.weatherapi.com/weather/64x64/night/122.png";
            
        } else if(myData.forecast.forecastday[0].day.condition.text == 'Partly Cloudy'  ){
            weatherIcon.src="//cdn.weatherapi.com/weather/64x64/day/116.png";
            weatherIconTwo.src="//cdn.weatherapi.com/weather/64x64/day/116.png";
            weatherIconThree.src="//cdn.weatherapi.com/weather/64x64/day/116.png";


        }else if(myData.forecast.forecastday[0].day.condition.text == 'Clear'  ){
            weatherIcon.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            weatherIconTwo.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            weatherIconThree.src="//cdn.weatherapi.com/weather/64x64/day/113.png";

        }else if(myData.forecast.forecastday[0].day.condition.text == 'Sunny'  ){
            weatherIcon.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            weatherIconTwo.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            weatherIconThree.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            
            
        }else if(myData.forecast.forecastday[0].day.condition.text == 'Mist'  ){
            weatherIcon.src= "//cdn.weatherapi.com/weather/64x64/night/143.png";
            weatherIconTwo.src= "//cdn.weatherapi.com/weather/64x64/night/143.png";
            weatherIconThree.src= "//cdn.weatherapi.com/weather/64x64/night/143.png";

        }else if(myData.forecast.forecastday[0].day.condition.text == 'Moderate or heavy snow showers'  ){
            weatherIcon.src= "//cdn.weatherapi.com/weather/64x64/day/371.png";
            weatherIconTwo.src= "//cdn.weatherapi.com/weather/64x64/day/371.png";
            weatherIconThree.src= "//cdn.weatherapi.com/weather/64x64/day/371.png";

        }else if(myData.forecast.forecastday[0].day.condition.text == 'Freezing fog'  ){
            weatherIcon.src= "//cdn.weatherapi.com/weather/64x64/night/260.png";
            weatherIconTwo.src= "//cdn.weatherapi.com/weather/64x64/night/260.png";
            weatherIconThree.src= "//cdn.weatherapi.com/weather/64x64/night/260.png";

        }else if(myData.forecast.forecastday[0].day.condition.text == 'Patchy rain nearby'  ){
            weatherIcon.src= "//cdn.weatherapi.com/weather/64x64/day/176.png";
            weatherIconTwo.src= "//cdn.weatherapi.com/weather/64x64/day/176.png";
            weatherIconThree.src= "//cdn.weatherapi.com/weather/64x64/day/176.png";

        }
        
        if (myData.forecast.forecastday[1].day.condition.text == 'Overcast') {
            weatherIcon.src="//cdn.weatherapi.com/weather/64x64/night/122.png";
            weatherIconTwo.src="//cdn.weatherapi.com/weather/64x64/night/122.png";
            weatherIconThree.src="//cdn.weatherapi.com/weather/64x64/night/122.png";
            
        } else if(myData.forecast.forecastday[1].day.condition.text == 'Partly Cloudy'  ){
            weatherIcon.src="//cdn.weatherapi.com/weather/64x64/day/116.png";
            weatherIconTwo.src="//cdn.weatherapi.com/weather/64x64/day/116.png";
            weatherIconThree.src="//cdn.weatherapi.com/weather/64x64/day/116.png";

        }else if(myData.forecast.forecastday[1].day.condition.text == 'Clear'  ){
            weatherIcon.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            weatherIconTwo.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            weatherIconThree.src="//cdn.weatherapi.com/weather/64x64/day/113.png";

        }else if(myData.forecast.forecastday[1].day.condition.text == 'Sunny'  ){
            weatherIcon.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            weatherIconTwo.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            weatherIconThree.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            
            
            
        }else if(myData.forecast.forecastday[1].day.condition.text == 'Mist'  ){
            weatherIcon.src= "//cdn.weatherapi.com/weather/64x64/night/143.png";
            weatherIconTwo.src= "//cdn.weatherapi.com/weather/64x64/night/143.png";
            weatherIconThree.src= "//cdn.weatherapi.com/weather/64x64/night/143.png";

        }else if(myData.forecast.forecastday[1].day.condition.text == 'Moderate or heavy snow showers'  ){
            weatherIcon.src= "//cdn.weatherapi.com/weather/64x64/day/371.png";
            weatherIconTwo.src= "//cdn.weatherapi.com/weather/64x64/day/371.png";
            weatherIconThree.src= "//cdn.weatherapi.com/weather/64x64/day/371.png";

        }else if(myData.forecast.forecastday[1].day.condition.text == 'Freezing fog'  ){
            weatherIcon.src= "//cdn.weatherapi.com/weather/64x64/night/260.png";
            weatherIconTwo.src= "//cdn.weatherapi.com/weather/64x64/night/260.png";
            weatherIconThree.src= "//cdn.weatherapi.com/weather/64x64/night/260.png";

        }else if(myData.forecast.forecastday[1].day.condition.text == 'Patchy rain nearby'  ){
            weatherIcon.src= "//cdn.weatherapi.com/weather/64x64/day/176.png";
            weatherIconTwo.src= "//cdn.weatherapi.com/weather/64x64/day/176.png";
            weatherIconThree.src= "//cdn.weatherapi.com/weather/64x64/day/176.png";

        }

        if (myData.forecast.forecastday[2].day.condition.text == 'Overcast') {
            weatherIcon.src="//cdn.weatherapi.com/weather/64x64/night/122.png";
            weatherIconTwo.src="//cdn.weatherapi.com/weather/64x64/night/122.png";
            weatherIconThree.src="//cdn.weatherapi.com/weather/64x64/night/122.png";
            
        } else if(myData.forecast.forecastday[2].day.condition.text == 'Partly Cloudy'  ){
            weatherIcon.src="//cdn.weatherapi.com/weather/64x64/day/116.png";
            weatherIconTwo.src="//cdn.weatherapi.com/weather/64x64/day/116.png";
            weatherIconThree.src="//cdn.weatherapi.com/weather/64x64/day/116.png";

        }else if(myData.forecast.forecastday[2].day.condition.text == 'Clear'  ){
            weatherIcon.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            weatherIconTwo.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            weatherIconThree.src="//cdn.weatherapi.com/weather/64x64/day/113.png";

        }else if(myData.forecast.forecastday[2].day.condition.text == 'Sunny'  ){
            weatherIcon.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            weatherIconTwo.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            weatherIconThree.src="//cdn.weatherapi.com/weather/64x64/day/113.png";
            
            
            
        }else if(myData.forecast.forecastday[2].day.condition.text == 'Mist'  ){
            weatherIcon.src= "//cdn.weatherapi.com/weather/64x64/night/143.png";
            weatherIconTwo.src= "//cdn.weatherapi.com/weather/64x64/night/143.png";
            weatherIconThree.src= "//cdn.weatherapi.com/weather/64x64/night/143.png";

        }else if(myData.forecast.forecastday[2].day.condition.text == 'Moderate or heavy snow showers'  ){
            weatherIcon.src= "//cdn.weatherapi.com/weather/64x64/day/371.png";
            weatherIconTwo.src= "//cdn.weatherapi.com/weather/64x64/day/371.png";
            weatherIconThree.src= "//cdn.weatherapi.com/weather/64x64/day/371.png";

        }else if(myData.forecast.forecastday[2].day.condition.text == 'Freezing fog'  ){
            weatherIcon.src= "//cdn.weatherapi.com/weather/64x64/night/260.png";
            weatherIconTwo.src= "//cdn.weatherapi.com/weather/64x64/night/260.png";
            weatherIconThree.src= "//cdn.weatherapi.com/weather/64x64/night/260.png";


        }else if(myData.forecast.forecastday[2].day.condition.text == 'Patchy rain nearby'  ){
            weatherIcon.src= "//cdn.weatherapi.com/weather/64x64/day/176.png";
            weatherIconTwo.src= "//cdn.weatherapi.com/weather/64x64/day/176.png";
            weatherIconThree.src= "//cdn.weatherapi.com/weather/64x64/day/176.png";

        }
    





}


getWeather('cairo')
searchBtn.addEventListener('click',()=>{
getWeather(searchBox.value)


})





