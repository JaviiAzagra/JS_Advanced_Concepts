/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */

const countries2 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let list$$ = document.createElement("ul");

for (const country of countries2) {
	let li$$ = document.createElement("li");
	li$$.textContent = country;
	list$$.appendChild(li$$);
  }
  document.body.appendChild(list$$);
  
  console.log(countries2);

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

let delete$$ = document.querySelector(".fn-remove-me");
delete$$.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div$$ = document.querySelector('[data-function="printHere"]');

let carlist$$ = document.createElement("ul");

for (const car of cars) {
  let carli$$ = document.createElement("li");
  carli$$.textContent = car;
  carlist$$.appendChild(carli$$);
}

div$$.appendChild(carlist$$);

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */

const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const button$$ = document.createElement("button");

function eliminar () {
	const divs$$ = document.querySelectorAll("div");
	divs$$[divs$$.length -1].remove();
}

button$$.addEventListener("click", eliminar);

button$$.textContent = "Eliminar";


for (const country of countries) {

	const country$$ = document.createElement("div");

	const title$$ = document.createElement("h4")
	const image$$ = document.createElement("img")

	title$$.textContent = country.title;
	image$$.src = country.imgUrl;

	country$$.appendChild(title$$);
	country$$.appendChild(image$$);

	document.body.appendChild(country$$);
}

document.body.appendChild(button$$)

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */

/* 
const button$$ = document.createElement("button");

function eliminar () {
	const divs$$ = document.querySelectorAll("div");
	divs$$[divs$$.length -1].remove();
}

button$$.addEventListener("click", eliminar);

button$$.textContent = "Eliminar";
 */

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */

