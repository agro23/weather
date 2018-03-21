import $ from 'jquery';

function getWeather(city, displayResult, displayError) {

$.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=85071d34e4085d1696790ab6d413e0cd`).then(function(response){
        displayResult(response);
      }).fail(function(error) {
        displayError(error);
      });
}
export { getWeather };
