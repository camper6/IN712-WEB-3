var countryList = "http://cors.io/?u=http://api.population.io:80/1.0/countries";

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {

    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);

  } else if (typeof XDomainRequest != "undefined") {

    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);

  } else {

    // Otherwise, CORS is not supported by the browser.
    xhr = null;

  }
  return xhr;
}

// Make the actual CORS request.
function makeCorsRequest(url) {
  var text = "";

  // All HTML5 Rocks properties support CORS.
  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    console.log('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    text = xhr.responseText;
    var list = JSON.parse(text);
    console.log(list);
    $( "#autocomplete" ).autocomplete({
      source: list["countries"]
    });
  };

  xhr.onerror = function() {
    text = null;
    console.log('There was an error!');
  };

  xhr.send();
}

// Make the actual CORS request.
function makeCorsPopulationRequest(url) {
  var text = "";

  // All HTML5 Rocks properties support CORS.
  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    console.log('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    text = xhr.responseText;
    var list = JSON.parse(text);
    console.log(list);
  };

  xhr.onerror = function() {
    text = null;
    console.log('There was an error!');
  };

  xhr.send();
}

makeCorsRequest(countryList);

document.getElementById("btn-find").addEventListener("click", function(event) {
  //Prevent page from reloading by overriding default button behaviour
  event.preventDefault();
  
  var country = document.getElementById('autocomplete').value
  if (country != null) {
    var populationList = "http://cors.io/?u=http://api.population.io:80/1.0/population/2015/"+ country + "/";
    makeCorsPopulationRequest(populationList)
  }
});
