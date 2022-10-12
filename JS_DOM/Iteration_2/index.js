/* 2.1 Inserta dinamicamente en un html un div vacio con javascript. */

let div$$ = document.createElement("div");
document.body.appendChild(div$$);

/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */

let divP$$ = document.body.appendChild(document.createElement("div").appendChild(document.createElement("p")));
document.body.appendChild(divP$$);

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */

let newDiv$$ = document.createElement("div");
document.body.appendChild(newDiv$$)

for (let i = 0; i < 6; i++){
    let p6 = document.createElement("p")
    newDiv$$.appendChild(p6);
}

/* 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */

let p$$ = document.createElement("p");
p$$.textContent = "Soy dinámico!";
document.body.appendChild(p$$);

/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */

const h2$$ = document.querySelector(".fn-insert-here");
h2$$.textContent = "Wubba Lubba dub dub";

/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. */

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul$$ = document.createElement("ul");

for (let i = 0; i < apps.length; i++){
    let li$$ = document.createElement("li");
    li$$.textContent = apps[i]
    ul$$.appendChild(li$$);
}

document.body.appendChild(ul$$);

/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */

const remove$$ = document.querySelectorAll(".fn-remove-me")

for (const remove of remove$$) {
    remove.remove();
}

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
Recuerda que no solo puedes insertar elementos con .appendChild. */

const newp$$ = document.createElement("p");
newp$$.textContent = "Voy en Medio!";
const divs$$ = document.querySelectorAll("div");

document.body.insertBefore(newp$$, divs$$[1]);

/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here */

let class$$ = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < class$$.length; i++) {
    let insertP$$ = document.createElement("p");
    insertP$$.innerText = "Voy dentro!";

    class$$[i].appendChild(insertP$$)
}
