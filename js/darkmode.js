var dToggle = document.getElementById("darkMode")
dToggle.onclick = function dMode(){
  var body = document.body;
  body.classList.toggle("darkBody");
  var button = document.button;
  button.classList.toggle("darkButton");
}