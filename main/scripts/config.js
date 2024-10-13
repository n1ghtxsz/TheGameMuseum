// Função para trocar a imagem de perfil ao fazer upload
document.getElementById('imageUpload').addEventListener('change', function() {
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById('profileImage').setAttribute('src', e.target.result);
        }

        reader.readAsDataURL(file);
    }
});

// Função para salvar as alterações do perfil
function saveProfile() {
    const name = document.getElementById('nameInput').value;

    if (name) {
        alert(`Alterações salvas com sucesso!\nNovo nome: ${name}`);
    } else {
        alert('Por favor, preencha o nome.');
    }
}
