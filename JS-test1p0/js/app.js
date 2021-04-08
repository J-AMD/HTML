var botones = document.getElementsByClassName("btn-primary");
var reproductor = new Audio();
var ultimaCancion="";
var playList = document.getElementById("lista");
var barraProgreso = document.getElementById("progreso");

///////////////////////////////////////////
var botonProncipal = document.getElementById("accionp");

/////////////////////////////////llamada a funcion para agregar canciones a la pag
//crearPlaylist(); // recordar borrar la lista completa en Reproductor.html

var listaCanciones =[
	{
		nombre : "dancin",
		nombreArtista: "Aaron Smith",
		imgArchivo: "Dancin.jpg",
		audioArchivo: "Dancing.mp3"
	},

	{
		nombre : "andromeda",
		nombreArtista: "Charles Anns",
		imgArchivo: "Charles.jpg",
		audioArchivo: "andromeda.mp3"
	},

	{
		nombre : "atravesdelvaso",
		nombreArtista: "Los Sebastianes",
		imgArchivo: "sebastianes.jpg",
		audioArchivo: "atravesdelvaso.mp3"
	},

	{
		nombre : "flashing",
		nombreArtista: "Kannye West",
		imgArchivo: "Kanye.jpg",
		audioArchivo: "flashing.mp3"
	},

	{
		nombre : "adanEva",
		nombreArtista: "Paulo y Londra",
		imgArchivo: "Paulo.jpg",
		audioArchivo: "adanEva.mp3"
	},

	{
		nombre : "chalino",
		nombreArtista: "Chalino Sanchez",
		imgArchivo: "Chalino.jpg",
		audioArchivo: "Chalino.mp3"
	}
];

for(boton of botones){
	boton.onclick = play;
}

reproductor.addEventListener('timeupdate', function(e){
	var avance = (reproductor.currentTime/reproductor.duration)*100;
	barraProgreso.style.width = avance + "%";
});

botonProncipal.addEventListener('click', function(e){ //pause y reproduccion de cancion ejecutandose
	flujoReproduccion();
});

function crearPlaylist(){
	for(i=0; i< listaCanciones.length; i++){
		var cancion = listaCanciones[i];
		crearElementoCancion(cancion);
	}
}

function crearElementoCancion(cancion){ //PARAMETRO DE LA listaCanciones
	var liElement = document.createElement('li');
	var div1 = document.createElement('div');
	var contenedorElemento = document.createElement('div');
	var elementoNombre = document.createElement('h4');
	var elementoArtista = document.createElement('h5');
	var contenedorBoton = document.createElement('div');
	var botonReproducir = document.createElement('button');
	var contenedorImagen = document.createElement('div');
	var elementoImagen = document.createElement('imag');
	liElement.dataset.cancion = cancion.audioArchivo;
	div1.classList.add("d-flex", "justify-content-between", "contenedor-informacion");
	contenedorElemento.classList.add("cancion");

	elementoNombre.innerHTML = cancion.nombre;
	elementoArtista.innerHTML = cancion.nombreArtista;

	contenedorBoton.classList.add("btn btn-primary");
	contenedorImagen.classList.add("imag");
	contenedorImagen.src = "img/"+ cancion; // crear ruta de archico para imagen

	div1.appendChild(); //agregar los elementos de classlist de acuerdo a las posiciones de HTML

	//playlist.appendChild(liElement);//playlist esta inicializado en a linea 4
	
}
function play(e){
	var cancion = e.target.parentElement.parentElement.parentElement.parentElement.dataset.cancion;
	reproductor.src = "audio/" + cancion + ".mp3";
	seleccion(cancion)
	reproductor.play();
	cambioIconPause();
}

function seleccion(cancion){
	if(cancion != ""){
		var elementoActual = document.querySelector("li[data-cancion='"+ cancion + "']");
		elementoActual.classList.add("seleccionada");
		console.log(elementoActual);
	}
		var elementoAnterior = document.getElementsByClassName("seleccionada");
		for(i=0; i<elementoAnterior.length; i++){
			if(elementoActual!=elementoAnterior[i]){
				elementoAnterior[i].classList.remove("seleccionada");
			}
		}
	cambiarInfo(elementoActual);
}

function cambiarInfo(elemento){
	var contenedor = elemento.getElementsByClassName("contenedor-informacion")[0];
	var elementoNCancion = contenedor.children[0].children[0]; //children para elementos hijos y recorrer 
	var elementoNArtista = contenedor.children[0].children[1];
	var elementoImagen = contenedor.children[1].children[0];
	var nombreCancion = elementoNCancion.innerHTML;//variables para recuperar valores
	var elementoArtista = elementoNArtista.innerHTML;
	var rutaImagen = elementoImagen.src;
	document.getElementById("tituloCancion").innerHTML = nombreCancion;
	document.getElementById("tituloArtista").innerHTML = elementoArtista;

	elementoImagen = document.createElement("img");
	elementoImagen.classList.add("imagen-actual")
	elementoImagen.src= rutaImagen;

	var contenedorImagen = document.getElementById("contenedorImagen"); //falta agregar contendedorimagen al div
	if(contenedorImagen.children.length > 0){
		contenedorImagen.children[0].remove();
	}
	contenedorImagen.appendChild(elementoImagen);
}

function flujoReproduccion(){
	if(!reproductor.paused){
		reproductor.pause();
		cambioIconPlay();
	}
	else{
		cambioIconPause();
		reproductor.play();
	}
}

function cambioIconPause(){
	var elemntIcon = botonProncipal.children[0];
	elemntIcon.classList.remove('fa-play');
	elemntIcon.classList.add('fa-pause');
}

function cambioIconPlay(){
	var elemntIcon = botonProncipal.children[0];
	elemntIcon.classList.remove('fa-pause');
	elemntIcon.classList.add('fa-play');
}