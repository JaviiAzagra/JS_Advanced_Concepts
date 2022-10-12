/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme */

const button$$ = document.querySelector(".showme");
console.log(button$$);

/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */

const h1pillado$$ = document.querySelector("#pillado");
console.log(h1pillado$$);

/* 1.3 Usa querySelector para mostrar por consola todos los p */

const AllP$$ = document.querySelectorAll("p");
console.log(AllP$$);

/* 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon */

const AllPokemon$$ = document.querySelectorAll(".pokemon");
console.log(AllPokemon$$);

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe". */

const AlltestMe$$ = document.querySelectorAll('[data-function = "testMe"]');
console.log(AlltestMe$$);

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */

const ThirdtestMe$$ = document.querySelectorAll('[data-function = "testMe"]');
console.log(ThirdtestMe$$[2]);

