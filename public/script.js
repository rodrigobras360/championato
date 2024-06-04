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
});

document.getElementById('mamador1-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('mamador1-section').style.display = 'none';
    document.getElementById('mamador2-form').style.display = 'block';
});

document.getElementById('mamador2-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('mamador2-form').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'block';
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function clearBonuses() {
    // Código para limpar os bônus
}

function clearMamancos() {
    // Código para limpar os mamanços
}
