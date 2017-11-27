
var palabra0=[];
var condicion=true;
var intentos=0;
var aciertos=0;


var array1 = ["puerta","coche","lampara","foto","raton"];
aleatoria = Math.floor(Math.random()*(array1.length));
adivinar = array1[aleatoria];
console.log(adivinar);



for (var i = 0; i < adivinar.length; i++) {
    palabra0[i]='0';
}
while (intentos<5 && aciertos<adivinar.length) {
condicion=true;
  var letrauser =prompt("Dame letra");
  while (condicion) {
      if (isNaN(letrauser)) {
        condicion=false;
      } else {
          var letrauser = prompt("Introduce un letra, no un numero "," ");
          condicion=true;
        }
      }
  var acertado=false;
  for (var i = 0; i < adivinar.length; i++) {
    if (adivinar.charAt(i)==letrauser) {
      palabra0[i]=adivinar.charAt(i);
      acertado=true;
      aciertos++;
      console.log(aciertos);
    }
  }
  if (acertado==true) {
    alert("has acertado,bien echo");
  } else {
    alert("letra no encontrada");
    intentos++;
  }
}
console.log(palabra0);
