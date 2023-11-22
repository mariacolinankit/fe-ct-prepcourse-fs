/*
//explicacion del  bucle FOR
for (var i = 0;  i < 5; i++){
    console.log(1)
}


var palabra = "hola"

for (var i = 0;  i< palabra.length; i++){
    console.log(palabra[i]);
}


 var  arrayFrutas = ["fresa","banana"," manzana",]

 for (var i = 0; i <arrayFrutas.length; i ++){
    console.log(arrayFrutas[i]);
 }



  var arrayComidas =["ensalada", "totopos", "tacos",]

  for (var i = 0; i < arrayComidas.length; i ++){
    console.log(arrayComidas [i])
  }



var arrayAnimales =["caballo", "tortuga", "tigre",]

for (var i = 0; i< arrayAnimales.length; i ++){
    console.log(arrayAnimales[i])
}


var arrayTelefonos = ["23412345", "2345678", "5678901",]

for (var i = 0; i<arrayTelefonos.length; i ++){
    console.log(arrayTelefonos[i])
}


var arrayCosmeticos = ["espejo", "cepillo", "diadema"]

for (var i = 0; i<arrayCosmeticos.length; i ++){
    console.log([i])
}

var arrayAutos = ["chebrolet", "nissan", "toyota",]

for (var i = 0; i<arrayAutos.length; i ++){
    console.log([i])
}
//explicacion del bucle WHILE
/*
while (condicon){

}
*/

// bucle SWITCH

/*
var idioma = "es"

switch (idioma){
    case "es":
    console.log(hola);
    break
    case "en":
    console.log(hello);
    break
    case "fr":
    console.log(bonjaur);
    break
    default:
    console.log("no se encontro el idioma");
    break
}

var meses =(enero)


switch (meses){
    case "enero":
    console.log(enero);
    break
    case "febrero":
    console.log(febrero);
    break
    case "marzo":
    console.log(marzo);
    break
    case "abril":
    console.log(abril);
    break
    case "mayo":
    console.log(mayo);
    break
    case "junio":
    console.log(junio);
    break
    case "julio":
     console.log(julio);
    break
    case "agosto":
    console.log(agosto);
    break
    case "septiembre":
    console.log(septiembre);
    break
    case "octubre":
    console.log(octubre);
    break
    case "noviembre":
    console.log(noviembre);
    break
    case "diciembre":
    console.log(diciembre);
    break
    default:
    console.log("no es un mens")
}  

var letra = "e"
switch(letra){
    case "a":
    console.log("soy la letra a");
    break
    case "b":
    console.log("soy la letra b");
    break
    case "c":
    console.log("soy la letra c");
    break
    default:
    console.log("no soy la letra deseada");
    break
}


var valuarNumero = 5

switch (valuarNumero){
    case 1:
        console.log("soy el  numero 2");
    break;
    case 2:
        console.log("soy el numero");
    break;
    case 4:
    console.log("soy el numero 4");
    break;
    case 5:
       console.log("soy el numero 5");
    break;
    default: console.log("no soy ningun numero");
    break
}

// Los arrays


var alumnos = ["juan", "pedro", "maria", "jose",]
console.log(alumnos[0]);
console.log(alumnos[2]);

//para agregar alumnos
alumnos[2] = Andres;

console.log(alumnos[2]);


for  (alumnos of alumnos){
    console.log(alumnos);
}

*/

var numeros = [1, 2, 3, 4, 5]

for(numeros of numeros);
   console.log(numeros);


   var paises = ["mexico", "argentina", "india","peru", "chile"]
   for (paises of paises);
   console.log(paises);

   if (status === 1){
    return "online"
 } else if (status === 2){
    return "Away"
    }
    return "offline";




