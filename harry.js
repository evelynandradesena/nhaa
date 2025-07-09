function calcularResultado() {
    let casas = {
        grifinoria: 0,
        sonserina: 0,
        corvinal: 0,
        lufalufa: 0
    };

    let respostas = document.querySelectorAll('input[type=radio]:checked');

    respostas.forEach(resposta => {
        casas[resposta.value] += 1;
    });

    let casaFinal = '';
    let maiorPontuacao = 0;

    for (let casa in casas) {
        if (casas[casa] > maiorPontuacao) {
            maiorPontuacao = casas[casa];
            casaFinal = casa;
        }
    }

    document.querySelectorAll(".carta").forEach(carta => {
        carta.style.display = "none";
    });

    document.getElementById("cartas").style.display = "block";

    document.getElementById("carta-" + casaFinal).style.display = "block";

    document.getElementById("resultado").innerText = "Sua casa é: " + 
        casaFinal.charAt(0).toUpperCase() + casaFinal.slice(1);
}