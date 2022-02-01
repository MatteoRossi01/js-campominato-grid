
/* Funzione che gestisce il grado di difficoltà*/
function setDifficult(level) {
    let caselle = 0;
    let numeroCaselle = '';

    if (level == "easy") {
        caselle = 100;
        numeroCaselle = "dieci";
    } else if (level == "normal") {
        caselle = 81;
        numeroCaselle = "nove";
    } else if (level == "hard") {
        caselle = 49;
        numeroCaselle = "sette";
    } else {
        alert("Impostare una difficoltà per iniziare il gioco!")
    }   

    return [caselle, numeroCaselle];
}

const container = document.getElementById('container');

/* Funzione usata per la creazione della grid */
function createGrid(container, caselle, numeroCaselle) {
    
    for (let i=1; i<=caselle; i++) {

        /* Creo gli elementi della griglia */
        const node = document.createElement('div');
        node.classList.add("box")
        node.classList.add(numeroCaselle)

        container.appendChild(node)

        let numero = document.createTextNode(i);
        node.appendChild(numero);

        node.addEventListener('click', function() {
            console.log(this);
            this.classList.add('clicked');
        });

    }
    
}

const start = document.getElementById('start');
start.addEventListener("click", function(){

    document.getElementById("container").innerHTML = "";

    let level = document.getElementById("difficolta").value;

    setDifficult(level);

    createGrid(container, setDifficult(level)[0], setDifficult(level)[1]);

});