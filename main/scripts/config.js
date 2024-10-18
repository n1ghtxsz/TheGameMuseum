
// Função para salvar as alterações do perfil
function saveProfile() {
    const name = document.getElementById('nameInput').value;

    if (name) {
        alert(`Alterações salvas com sucesso!\nNovo nome: ${name}`);
    } else {
        alert('Por favor, preencha o nome.');
    }
}
