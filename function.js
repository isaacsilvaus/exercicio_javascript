const form = document.getElementById('form');
let campoA = document.getElementById('A');
let campoB = document.getElementById('B');

function validarCampos(A, B) {

    if (A > B) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    let valorCampoA = parseFloat(campoA.value);
    let valorCampoB = parseFloat(campoB.value);

    if (!isNaN(valorCampoA) && !isNaN(valorCampoB)) {

        let camposValidos = validarCampos(valorCampoA, valorCampoB);

        if (camposValidos) {
            alert('Formulário enviado com sucesso!');
        } else {
            alert('O campo A deve ser maior que o campo B.');
        }
    } else {
        alert('Por favor, insira números válidos nos campos A e B.');
    }
})


