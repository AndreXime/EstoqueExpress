document.getElementById('cardCreator').addEventListener('submit', () => {
   const popup = document.getElementById('popup');
   popup.style.display = 'block'; // Mostra o popup

   // Esconde o popup após 3 segundos
   setTimeout(() => {
       popup.style.opacity = '0';
       setTimeout(() => {
           popup.style.display = 'none';
           popup.style.opacity = '1';
       }, 500);
   }, 3000); // Tempo que o popup ficará visível
});

atualizar();

document.getElementById ('cardCreator').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const titulo = formData.get('nameProduct');
  const quantidade = formData.get('qtdProduct');
  const validade = formData.get('dateProduct');
  const preco = formData.get('priceProduct');
  const categoria = formData.get('categoryProduct');
  const fornecedor = formData.get('fornecedorProduct');
  const criadoEm = new Date().toLocaleDateString();
  const id = document.getElementById('id').innerText.trim(); 

  const response = fetch(`/api/addProduto?id=${id}`,{
    method: 'Post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      titulo, quantidade, validade,
      preco,categoria,fornecedor,criadoEm
    })
  });

  // Cria o elemento a ser animado
  const produto = document.createElement('tr');
  produto.classList.add("animar-criacao");
  produto.innerHTML = `
    <td>${titulo}</td>
    <td>R$:${preco}</td>
    <td>${quantidade}</td>
    <td>${validade}</td>
    <td>${categoria}</td>
    <td>${fornecedor}</td>
    <td>
      <p style="display:none" id="idProduto">${response}</p>
      <button class="btn btn-danger deletar">Apagar</button>
    </td>
  `;
  
  // Adiciona o card ao container
  document.getElementById('objetoContainer').appendChild(produto);
  
  // Atualizar os eventListener de deletar
  atualizar();
 });

function validateNumber(input) {
 // Remove todos os caracteres que não sejam números
 input.value = input.value.replace(/\D/g, '');
}

function atualizar(){
 const botoes = document.querySelectorAll('.deletar');
 botoes.forEach(function(botao) {
     botao.addEventListener('click', function() {
       const id = document.getElementById('id').innerText.trim();
       const closest = botao.closest('td');
       const idproduto = closest.querySelector('#idProduto').textContent.trim();

       const response = fetch(`/api/removeProduto?id=${id}&idproduto=${idproduto}`,{
         method: 'Post',
         headers: { 'Content-Type': 'application/json' },
       });

       const produto = botao.closest('tr');
       produto.remove();
     });
 });
}
