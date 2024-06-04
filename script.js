function checkPassword() {
    const password = document.getElementById('password').value;
    const adminSection = document.getElementById('admin');
    const userSection = document.getElementById('user');
    const contentSection = document.getElementById('content');
    if (password === 'champai') {
        adminSection.classList.remove('hidden');
        userSection.classList.add('hidden');
        contentSection.classList.remove('hidden');
    } else if (password === 'souchampi') {
        userSection.classList.remove('hidden');
        adminSection.classList.add('hidden');
        contentSection.classList.remove('hidden');
    } else {
        alert('Senha incorreta!');
    }
}
