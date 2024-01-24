function validaChute(chute) {
    const numero = +chute;

    if(Number.isNaN(numero)) {
        elementoChute.innerHTML += `
            <div>Você deve falar um número!</div>
        `;
        return;
    }

    if(numero < menorValor || numero > maiorValor) {
        elementoChute.innerHTML += `
            <div>O número deve ser entre ${menorValor} e ${maiorValor}!</div>
        `;
        return;
    }

    if(numero == numeroSecreto) {
        document.body.innerHTML = `
            <h2>Parabéns, você acertou o número secreto!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `;
    } else if(numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor <i class=”fa-solid fa-down-long”></i></div>
        `;
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior <i class=”fa-solid fa-up-long”></i></div>
        `;
    }
}

document.body.addEventListener('click', (event) => {
    const elemento = event.target;

    if(elemento.id == 'jogar-novamente') {
        window.location.reload();
    }
});
