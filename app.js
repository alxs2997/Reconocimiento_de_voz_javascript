const grabar = document.getElementById('grabar');
const notas = document.getElementById('notas');

let recognition;
recognition = new webkitSpeechRecognition();
recognition.lang = "es-ES";

recognition.onresult = function(event) {
    const results = event.results[0][0].transcript;
    const notaDiv = document.createElement('div');
    notaDiv.textContent = results;

    notas.appendChild(notaDiv);
};

grabar.addEventListener('click', function() {
    recognition.start();
});