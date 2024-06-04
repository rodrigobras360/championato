document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', checkPassword);

    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        button.addEventListener('click', () => showSection(button.id.replace('-button', '-section')));
    });
});

function checkPassword(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    switch(password) {
        case 'champai':
            toggleVisibility('admin-section', true);
            toggleVisibility('login-section', false);
            break;
        case 'souchampi':
            toggleVisibility('user-section', true);
            toggleVisibility('login-section', false);
            break;
        default:
            alert('Senha incorreta!');
    }
}

function toggleVisibility(sectionId, show) {
    const section = document.getElementById(sectionId);
    section.style.display = show ? 'block' : 'none';
}

function showSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.remove('hidden');
}

