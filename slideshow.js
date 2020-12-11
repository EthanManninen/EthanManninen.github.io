var slideIndex = 0;
carousel();

function carousel() {
  console.log("1");
  var i;
  var x = document.getElementsByClassName("slide");
  console.log(x);
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  console.log("2");
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000);
}
