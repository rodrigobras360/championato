document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    if (password === 'champai') {
        document.getElementById('score-button').style.display = 'block';
        document.getElementById('history-button').style.display = 'block';
        document.getElementById('admin-button').style.display = 'block';
    } else if (password === 'souchampi') {
        document.getElementById('score-button').style.display = 'block';
        document.getElementById('history-button').style.display = 'block';
    } else {
        alert('Senha incorreta');
    }
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}

document.getElementById('reset-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const adminKey = document.getElementById('admin-key').value;
    fetch('/reset', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adminKey }),
    })
    .then(response => {
        if (response.status === 200) {
            alert('Histórico limpo com sucesso.');
        } else {
            alert('Chave de admin inválida.');
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});

function clearBonuses() {
    // Implementar a lógica para limpar todos os bônus
}

function clearAllData() {
    // Implementar a lógica para limpar todos os dados
}

function updateHierarchyOptions(mamador) {
    const gender = document.getElementById(`${mamador}-gender`).value;
    const hierarchySelect = document.getElementById(`${mamador}-hierarchy`);
    let options = [];

    if (gender === 'homem') {
        options = ['Futrica', 'Caloiro', 'Excelentíssimo Pastrano', 'Excelentíssimo Doutor', 'Excelentíssimo Veterano', 'Excelentíssimo Dux'];
    } else if (gender === 'mulher') {
        options = ['Futrica', 'Caloira', 'Excelentíssima Pastrana', 'Excelentíssima Doutora', 'Excelentíssima Veterana', 'Excelentíssima Dux'];
    }

    hierarchySelect.innerHTML = '';
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        hierarchySelect.appendChild(opt);
    });
}
