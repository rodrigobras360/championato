document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const passwordInput = document.getElementById('password');
    const navigation = document.getElementById('navigation');
    const scoreButton = document.getElementById('score-button');
    const historyButton = document.getElementById('history-button');
    const adminButton = document.getElementById('admin-button');
    const scoreSection = document.getElementById('score-section');
    const historySection = document.getElementById('history-section');
    const adminSection = document.getElementById('admin-section');
    const bonusForm = document.getElementById('bonus-form');
    const mamadorForm1 = document.getElementById('mamador-form-1');
    const mamadorForm2 = document.getElementById('mamador-form-2');
    const deleteBonusButton = document.getElementById('delete-bonus-button');
    const deleteMamançosButton = document.getElementById('delete-mamanços-button');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const password = passwordInput.value;
        if (password === 'champai') {
            adminButton.style.display = 'inline';
        } else if (password === 'souchampi') {
            scoreButton.style.display = 'inline';
            historyButton.style.display = 'inline';
        }
        loginForm.style.display = 'none';
        navigation.style.display = 'block';
    });

    scoreButton.addEventListener('click', function () {
        showSection(scoreSection);
    });

    historyButton.addEventListener('click', function () {
        showSection(historySection);
    });

    adminButton.addEventListener('click', function () {
        showSection(adminSection);
    });

    mamadorForm1.addEventListener('submit', function (event) {
        event.preventDefault();
        mamadorForm1.style.display = 'none';
        mamadorForm2.style.display = 'block';
    });

    mamadorForm2.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Mamanço adicionado com sucesso!');
        mamadorForm1.reset();
        mamadorForm2.reset();
        mamadorForm1.style.display = 'block';
        mamadorForm2.style.display = 'none';
    });

    bonusForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const description = document.getElementById('bonus-description').value;
        const value = document.getElementById('bonus-value').value;
        const bonusList = document.createElement('li');
        bonusList.textContent = `${description}: ${value} pontos`;
        document.getElementById('bonus-list').appendChild(bonusList);
        bonusForm.reset();
    });

    deleteBonusButton.addEventListener('click', function () {
        document.getElementById('bonus-list').innerHTML = '';
    });

    deleteMamançosButton.addEventListener('click', function () {
        document.getElementById('mamanços-list').innerHTML = '';
    });

    function showSection(section) {
        const sections = document.querySelectorAll('section');
        sections.forEach(sec => sec.style.display = 'none');
        section.style.display = 'block';
    }
});
