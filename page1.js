document.addEventListener('DOMContentLoaded', function () {
    const bouton = document.getElementById('bouton');
    const formulaire = document.getElementById('formulaire');
    const prenomInput = document.getElementById('prenom');
    const validerButton = document.getElementById('valider');
    const messageDiv = document.getElementById('message');
    const messageText = document.getElementById('messageText');

    bouton.addEventListener('click', function () {
        bouton.style.display = 'none';
        formulaire.style.display = 'block';
    });

    validerButton.addEventListener('click', function () {
        const prenom = prenomInput.value;
        if (prenom.trim() !== '') {
            messageText.textContent = 'Bienvenue, ' + prenom + ' !';
            formulaire.style.display = 'none';
            messageDiv.style.display = 'block';
        } else {
            alert('Veuillez entrer un prénom valide.');
        }
    });
});
