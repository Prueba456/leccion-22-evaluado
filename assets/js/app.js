var spans = document.getElementsByClassName("close");
var array = document.getElementsByClassName("img1");

for(var i=0; i<array.length; i++){
  var imagen=array[i];

  spans[i].addEventListener("click", function(){

    this.parentNode.style.display = "none";
  
  });
}
