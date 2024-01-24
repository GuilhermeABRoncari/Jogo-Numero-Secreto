const elementoChute = document.getElementById('chute');
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeack);

function onSpeack(event) {
    chute = event.results[0][0].transcript;
    exibeChuteNaTela(chute);
    validaChute(chute);
}

function exibeChuteNaTela(chute) {
    elementoChute.innerHTML = `
    <div>Você disse</div>
    <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start());

