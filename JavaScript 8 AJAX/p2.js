function buttonClicked(clicked_id) {
  var httpRequestInstance = new XMLHttpRequest();

  var name = clicked_id.id;
  var regEx = /\d/;
  var buttonID = name.match(regEx);

  httpRequestInstance.onreadystatechange = function() {
    if (httpRequestInstance.readyState == 4 && httpRequestInstance.status == 200) {
      document.getElementById("icon" + buttonID).innerHTML = httpRequestInstance.responseText;

    }
  };
  var url = "https://dl.dropboxusercontent.com/u/10089854/Web3/ajaxPractical/images/" + name + ".svg";
  httpRequestInstance.open("GET", url, true);
  httpRequestInstance.send();
}
