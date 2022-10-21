/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */

fetch('https://api.agify.io?name=javi')
  .then((data) => data.json()) 
  .then((data) => console.log(data)); 

/* 1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input. */

const baseUrl = "https://api.nationalize.io/?name=";

const input$$ = document.querySelector("input");
const button$$ = document.querySelector("button");

const search = () => {
  fetch(baseUrl + input$$.value)
    .then((name) => name.json())
    .then((name) => console.log(name));
};

/* 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */


/* 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */

button$$.addEventListener('click', () => search2());

const deletes = (delete1, delete2) => {
  delete1.remove();
  delete2.remove();
}

const print = (person) => {
  const p$$ = document.createElement('p');
  const button2$$ = document.createElement('button');

  p$$.textContent = `El nombre ${person.name} tiene un ${person.country[0].probability * 100} porciento de ser de ${person.country[0].country_id} 
  y un ${person.country[1].probability * 100} de ser de ${person.country[1].country_id}`;
  button2$$.textContent = 'X';

  document.body.appendChild(p$$);
  document.body.appendChild(button2$$);

  button2$$.addEventListener('click', () => deletes(p$$, button2$$));
  
} 

const search2 = () => {
  fetch(baseUrl + input$$.value)
    .then((data) => data.json())
    .then((person) => print(person));
}
