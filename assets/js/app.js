var spans = document.getElementsByClassName("close");
var array = document.getElementsByClassName("img1");

for(var i=0; i<array.length; i++){
  var imagen=array[i];

  spans[i].addEventListener("click", function(){

    this.parentNode.style.display = "none";

  });

}
var origenId = document.getElementById("origen");
var extincionId = document.getElementById("extincion");
var mostrar = document.getElementsByTagName("button")[2];
mostrar.addEventListener("click", function(){
  array[0].style.display = "inline-block";
  array[1].style.display = "inline-block";
  array[2].style.display = "inline-block";
  array[3].style.display = "inline-block";
});

var extincion = document.getElementsByTagName("button")[1];
extincion.addEventListener("click", function(){
 if(extincionId.style.display == "inline-block"){
   extincionId.style.display = "none";
 }else{
   extincionId.style.display = "inline-block";
 }
});
var origen = document.getElementsByTagName("button")[0];
origen.addEventListener("click", function(){
 if(origenId.style.display == "inline-block"){
   origenId.style.display = "none";
 }else{
   origenId.style.display = "inline-block";
 }
});
