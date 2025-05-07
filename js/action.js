document.addEventListener('DOMContentLoaded', function () {

    const button = document.getElementById('carregar');

    button.addEventListener('click', function () {

        const xhr = new XMLHttpRequest();
        xhr.open('GET', './php/exemplophp.php', true); //Depois ver a difrença entre chamar o método GET e POST na requisição assíncrona 
        xhr.onload = function () {
            if (xhr.status === 200) {
                alert('Dados recebidos: ' + xhr.responseText);
            } else {
                alert('Erro na requisição: ' + xhr.status);
            }
        };
        xhr.onerror = function () {
            alert('Ocorreu um erro na requisição');
        };

        xhr.send();
    });

});
