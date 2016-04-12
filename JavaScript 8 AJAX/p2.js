function ajaxRequest() {
  var httpRequestInstance = new XMLHttpRequest();
  var input = document.getElementById("userInputText").value;
  httpRequestInstance.onreadystatechange = function() {
    if (httpRequestInstance.readyState == 4 && httpRequestInstance.status == 200) {
      var atheletes = JSON.parse(httpRequestInstance.responseText);
      document.getElementById("output").innerHTML = input + " " + atheletes[input];
    }
  };
  var url = "https://dl.dropboxusercontent.com/u/10089854/Web3/ajaxPractical/images/";
  httpRequestInstance.open("GET", url, true);
  httpRequestInstance.send();
}


document.getElementById("bu").addEventListener("click", ajaxRequest);
