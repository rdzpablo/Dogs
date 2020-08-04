
const filtro=document.querySelector(".filtros ul").children;

for(let i=0;i<filtro.length;i++){
	filtro[i].addEventListener("click",function(){
		for(let j=0;j<filtro.length;j++){
			filtro[j].classList.remove("active");
		}
		this.classList.add("active");
		const dataTarget = this.getAttribute("data-target");




		const galeria = document.querySelector(".gracioso").children;
		
		for(let k=0; k<galeria.length;k++){
		galeria[k].style.display="none";
		if(galeria[k].getAttribute("data-id")==dataTarget){
			galeria[k].style.display="block";
		}
		else if(dataTarget=="todo"){
			galeria[k].style.display="block";
		}
	}
	})
}

const galerias = document.querySelector(".gracioso");
const galeria = galerias.querySelectorAll(".imagen");
const galeria2= galerias.querySelectorAll(".imagen2");

const cerrar = document.querySelector(".cerrar");
const full= document.querySelector(".full-imagen");
const imagen= full.querySelector("img");

cerrar.addEventListener("click",function(){
	full.classList.remove("mostrar");
	full.classList.add("cerrar");
})

galeria.forEach(function(element){
	element.querySelector(".plus i").addEventListener("click",function(){
		full.classList.remove("cerrar");
		full.classList.add("mostrar");
		imagen.src=element.querySelector("img").getAttribute("src");
	})
})
galeria2.forEach(function(element){
	element.querySelector(".plus i").addEventListener("click",function(){
		full.classList.remove("cerrar");
		full.classList.add("mostrar");
		imagen.src=element.querySelector("img").getAttribute("src");
	})
})

const menu =document.querySelector(".menu");
const nav = document.querySelector(".nav");
console.log(nav);
console.log(menu);

menu.addEventListener("click", function(){
	nav.classList.toggle("mostrar-Nav");
})




	
