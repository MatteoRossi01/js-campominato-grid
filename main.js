
const start = document.getElementById('start');

let difficolta = document.getElementById('difficolta').value;

start.addEventListener('click', 

    function selectDifficult() {

        if (difficolta == "easy") {

            const container = document.getElementById('container');

            for (let i=1; i<=100; i++) {

                /* Creo gli elementi della griglia */
                const node = document.createElement('div');
                node.classList.add('box')
                node.innerHTML += "<span class=number>"+i+"</span>";

                /* Aggiungo l'evento per il click */
                node.addEventListener('click', function() {
                    console.log(this);
                    this.classList.add('clicked');
                });

                container.appendChild(node);

            }

        } else if (difficolta == 'normal') {

            const container = document.getElementById('container');

            for (let i=1; i<=81; i++) {

                /* Creo gli elementi della griglia */
                const node = document.createElement('div');
                node.classList.add('box')
                node.innerHTML += "<span class=number>"+i+"</span>";

                /* Aggiungo l'evento per il click */
                node.addEventListener('click', function() {
                    console.log(this);
                    this.classList.add('clicked');
                });

                container.appendChild(node);

            }

        } else if (difficolta == 'hard') {

            const container = document.getElementById('container');

            for (let i=1; i<=49; i++) {

                /* Creo gli elementi della griglia */
                const node = document.createElement('div');
                node.classList.add('box')
                node.innerHTML += "<span class=number>"+i+"</span>";

                /* Aggiungo l'evento per il click */
                node.addEventListener('click', function() {
                    console.log(this);
                    this.classList.add('clicked');
                });

                container.appendChild(node);

            }

        }

    }

)