const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-container');

search.addEventListener('click', () => {

  const APIKey = 'b0d3536ee8dbda85c13629106a3c152b';
  const city = document.querySelector('.search-box input').value;

  if (city === '')
    return;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
    .then(response => response.json())

    .then(json => {
      console.log(json)

      if(json.cod === "404") {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".search-box").style.display = "none"
        document.querySelector(".weather-container").style.display = "none"
        document.querySelector(".container-before").style.display = "none"
      }
      else {
        document.querySelector(".temperature").innerHTML = Math.round(json.main.temp) + "°c";
        document.querySelector(".description").innerHTML = json.weather[0].main;
  
        const image = document.querySelector('.weather-container img');
  
        if(json.weather[0].main == "Clouds"){
          image.src = "images/cloud.png";
        }
        else if(json.weather[0].main == "Clear"){
          image.src = "images/clear.png";
        }
        else if(json.weather[0].main == "Rain"){
          image.src = "images/rain.png";
        }
        else if(json.weather[0].main == "Mist"){
          image.src = "images/mist.png";
        }
        else if(json.weather[0].main == "Snow"){
          image.src = "images/snow.png";
        }
  
        document.querySelector(".weather-container").style.display = "block"
        document.querySelector(".container-before").style.display = "block"
        document.querySelector(".error").style.display = "none"

      }


    });


});
