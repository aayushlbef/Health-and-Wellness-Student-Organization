fetch("/HTML/navigationBar.html")
  .then(res => res.text())
  .then(data => document.getElementById("header").innerHTML = data);

fetch("/HTML/footer.html")
  .then(res => res.text())
  .then(data => document.getElementById("footer").innerHTML = data);