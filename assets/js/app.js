var spans = document.getElementsByClassName("close");
var array = document.getElementsByClassName("img1");

for(var i=0; i<array.length; i++){
  var imagen=array[i];

  spans[i].addEventListener("click", function(){

    this.parentNode.style.display = "none";

  });

}
var mostrar = document.getElementsByTagName("button")[2];
mostrar.addEventListener("click", function(){

  array[0].style.display = "inline-block";
  array[1].style.display = "inline-block";
  array[2].style.display = "inline-block";
  array[3].style.display = "inline-block";
});
