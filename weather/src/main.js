import $ from 'jquery';
import { getWeather } from "../src/weather-interface.js";
import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';

$(document).ready(function() {
    $('#weatherLocation').click(function() {
      let city = $('#location').val();
      $('#location').val("");
      getWeather(city, displayResult, displayError);
  });
});

let displayResult = function(response){
  $('.showHumidity').text(`The humidity is ${response.main.humidity}%`);
  $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
}

let displayError = function(error){
  // $('.errors').text(error);
  $('.errors').text("There was an error in your request!");
}
