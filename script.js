document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === 'champai') {
        document.getElementById('admin-button').style.display = 'block';
    } else if (password === 'souchampi') {
        document.getElementById('score-button').style.display = 'block';
        document.getElementById('history-button').style.display = 'block';
    }
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('nav-section').style.display = 'block';
});

document.getElementById('mamador1-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('mamador1-form').style.display = 'none';
    document.getElementById('mamador2-form').style.display = 'block';
});

document.getElementById('mamador2-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mamadores adicionados com sucesso!');
    document.getElementById('mamador2-form').reset();
    document.getElementById('mamador1-form').reset();
    document.getElementById('mamador2-form').style.display = 'none';
    document.getElementById('mamador1-form').style.display = 'block';
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

document.getElementById('bonus-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const bonusDescription = document.getElementById('bonus-description').value;
    const bonusValue = document.getElementById('bonus-value').value;
    const bonusItem = document.createElement('li');
    bonusItem.textContent = `${bonusDescription}: ${bonusValue} pontos`;
    document.getElementById('bonus-list').appendChild(bonusItem);
    document.getElementById('bonus-form').reset();
});

function clearBonuses() {
    document.getElementById('bonus-list').innerHTML = '';
}

function clearMamancos() {
    document.getElementById('mamanços-list').innerHTML = '';
}

document.getElementById('clear-bonuses').addEventListener('click', clearBonuses);
document.getElementById('clear-mamancos').addEventListener('click', clearMamancos);
