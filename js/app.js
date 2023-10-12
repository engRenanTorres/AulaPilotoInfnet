const inputs = document.querySelectorAll('input');

// Adicionar um ouvinte de evento para o campo de data de nascimento
inputs.forEach(input => {
input.addEventListener('blur',(evento)=>{
    if(input.validity.valid) {
      input.parentElement.classList.remove('input-container--invalido')
    } else {
      input.parentElement.classList.add('input-container--invalido');
    }
  })
});
const inputNascimento = document.getElementById("nascimento");
inputNascimento.addEventListener("blur", validarIdade);
// Função para validar a idade do usuário
function validarIdade() {
    const inputNascimento = document.getElementById("nascimento");
    const dataNascimento = new Date(inputNascimento.value);
    const dataAtual = new Date();
    const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();

    if (idade < 18) {
        inputNascimento.setCustomValidity("Você deve ser maior que 18 anos.");
        inputNascimento.parentElement.classList.add('input-container--invalido');
        
    } else {
        inputNascimento.setCustomValidity("");
        inputNascimento.parentElement.classList.remove('input-container--invalido');     
    }
}

/*
  Exercícios:
  1-Colocar mensagens customizadas nos demais campos.
  2-Adicionar novos campos.
  3-novas validações regex.
*/ 

