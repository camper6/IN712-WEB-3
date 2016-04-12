function ajaxRequest() {
  var httpRequestInstance = new XMLHttpRequest();
  var input = document.getElementById("userInputText").value;
  httpRequestInstance.onreadystatechange = function() {
    if (httpRequestInstance.readyState == 4 && httpRequestInstance.status == 200) {
      var atheletes = JSON.parse(httpRequestInstance.responseText);
      if (atheletes[input] != undefined) {
        document.getElementById("output").innerHTML = "Are you thinking about " + input + " " + atheletes[input] + "?";
      } else {
        document.getElementById("output").innerHTML = "Sorry, do not know that athelete."
      }
    }
  };
  var url = "https://dl.dropboxusercontent.com/u/10089854/Web3/ajaxPractical2/athletes.json";
  httpRequestInstance.open("GET", url, true);
  httpRequestInstance.send();
}


document.getElementById("bu").addEventListener("click", ajaxRequest);
