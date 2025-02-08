// Primero obtenemos el valor de la key de bloqueo del localstorage, es decir si
// existe la fecha en que se bloqueo el juego
const block = localStorage.getItem('block');

// Luego obtenemos el valor de las vidas que tiene el jugador debe ser null o no
// tener vidas.
const lives = localStorage.getItem('lives');

const handleInitGame = () => {
    if (block) {
        const dayBlock = new Date(block),
              today = new Date();

        if (dayBlock.getDate() + 1 <= today.getDate()) {
            if (!lives || parseInt(lives) === "0") localStorage.setItem("lives", "3");

            document.querySelector('.boton-next')
                .addEventListener("click", () => window.location.href = "./index647.html");
        }
    } else {
        if (!lives) {
            localStorage.setItem("lives", "3");
        }

        document.querySelector(".boton-next")
            .addEventListener("click", () => window.location.href = "./index647.html");
    }
}

document.addEventListener('DOMContentLoaded', handleInitGame);