


var arrayImg = document.getElementsByTagName('img');
//cuando se carga la ventana se carga el eventlistener que cada vez que hace click ejecuta esa funcion
window.onload = function(){
	//mediante un bucle llenamos un array con todos los elementos con nombre de etiqueta(tagName) 'img'
	for(var i=0; i<arrayImg.length; i++){
	arrayImg[i].addEventListener('click', voltea);
	}	
	
	document.getElementById('empezar').addEventListener('click', empezar);

}

//boleano para controlar el turno de tirada, si es el primer o el segundo click
//variables globales
var turno1 = true;
var f1 ="";
var f2="";
var aa="";
var bb="";
var intento = 0;
var puntos = 0;
var cnt = 0;

//funcion del event listener

function voltea(){
	if(turno1){
		this.src = this.id + '.jpg';
		aa = this.id;
		f1 = this.name;
		turno1 = false;
		
	}else{
		//que esta src que hemos clicado pase a ser su id mas .jpg, en el html se ve fácil
		this.src = this.id + '.jpg';
		//asignamos dos variables a esta foto para luego compararla
		bb = this.id;
		f2 = this.name;
		//comparacion a partir de los nombres n1 y n2
		if(f1 != f2){
			setTimeout(function(){document.getElementById(bb).src = 'reverse.jpg'}, 1000);
			setTimeout(function(){document.getElementById(aa).src = 'reverse.jpg'}, 1000);
			intento = intento + 1;
			document.form1.tirada.value = intento;
			turno1 = true;
			//aqui son diferentes, con lo cual las fotos vuelven al reverse con 1s de delay
		}else if(f1 == f2 && bb == aa){
			setTimeout(function(){document.getElementById(bb).src = 'reverse.jpg'}, 1000);
			setTimeout(function(){document.getElementById(aa).src = 'reverse.jpg'}, 1000);
			document.form1.tirada.value = intento;
			turno1 = true;

		}else{
			//las fotos son iguales, en este caso sus nombres, cogemos las ids de las fotos y escondemos aquellas con estos ids
			setTimeout(function(){document.getElementById(aa).hidden = 'hidden'}, 1000);
			setTimeout(function(){document.getElementById(bb).hidden = 'hidden'}, 1000);
			//sumamos intentos, incrementamos un contador para controlar el final del juego, cada vez que entre aqui es que ha encontrado una pareja con lo cual el tope es 6 
			//cada vez que encuentra una igual cnt+1
			intento = intento + 1;
			document.form1.tirada.value = intento;
			turno1 = true;
			cnt = cnt + 1;
				if(cnt == 6)
				 {
					if(intento <= 6){
					puntos = 1000;
					}
					else if(intento > 6 && intento <= 8){
					puntos = 800;
					}		
					else if(intento > 8 && intento <= 10){
					puntos = 600;
					}
					else if(intento > 10 && intento <= 12){
					puntos = 400;
					}
					else if(intento > 12 && intento <= 15){
					puntos = 200;
					}
					else{
					puntos = 50;
					}
					document.form1.result.value = puntos;
				
					}
			
				}	
				
			}
	
		}


function empezar(){

	for(var i = 0; i<arrayImg.length; i++){
		arrayImg[i].src = 'reverse.jpg';
		arrayImg[i].hidden = false;
	}
	
	 turno1 = true;
	 f1 ="";
	 f2="";
	 aa="";
	 bb="";
	 intento = 0;
	 puntos = 0;
	 cnt = 0;
	 document.form1.result.value = puntos;
	 document.form1.tirada.value = intento;
}


//para que una funcion tarde un segundo en ejecutarse
//setTimeout(function(){console.log("HOLA")}, 1000);
//en el bloque entre llaves se puede escribir de todo tipo de funciones o codigo plano, donde se encuentra el console.log