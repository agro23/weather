import $ from 'jquery';
// import fetchResults from "../src/main.js";

function getDrink(){

  let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();

      promise.then(function(response) {
        let body = JSON.parse(response);
        fetchResults(body);
        // console.log("got here!");
        // console.log(body);
      }, function(error) {
        badResult (error);
      });
    });
}

export { getDrink };
