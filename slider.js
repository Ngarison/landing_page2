var slide = new Array("images/voiture5.png","images/voiture6.jpg");
var numero = 0;
function ChangeSlide(sens) {
 numero = numero + sens;
 if (numero < 0)
 numero = slide.length - 1;
 if (numero > slide.length - 1)
 numero = 0;
 document.getElementById("slide").src = slide[numero];
}


setInterval("ChangeSlide(1)", 4000)
