function popupballon(bool){
   const popup = document.getElementById('popup');
   
   if(bool){
     popup.innerHTML = "Sucesso";
   }else{
     popup.innerHTML = "Algo ocorreu";
   }
   popup.style.display = 'block'; // Mostra o popup

   // Esconde o popup após 3 segundos
   setTimeout(() => {
       popup.style.opacity = '0'; // Anima a opacidade
       setTimeout(() => {
           popup.style.display = 'none'; // Remove do DOM após a animação
           popup.style.opacity = '1'; // Reseta a opacidade para a próxima vez
       }, 500); // Espera o tempo da animação
   }, 5000);
};

atualizar();

document.getElementById ('criarEstoque').addEventListener('submit', async function(event) {
   event.preventDefault();

  const formData = new FormData(event.target);
  const titulo = formData.get('titulo');
  const descricao = formData.get('descricao');


  const response = await fetch("/api/addEstoque", {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      titulo,
      descricao,
    }),
  });
   if(!response){
     popupballon(false);
     return;
   }
   popupballon(true);
   const data = await response.json();

   // Cria o elemento a ser animado
   const card = document.createElement('div');
   card.classList.add('col-md-3', 'mb-4', 'produto'); // Adiciona classe para coluna e margem
   card.innerHTML = `
     <div class="card animar-criacao">
       <div class="card-body text-center">  
         <h4 class="card-title"> ${titulo} </h4>
         <p class="card-text">${descricao}</p>
         <p style="display: none;" id="id">${data}<p>
         <button class="btn btn-success tabela">Entrar</button>
         <button class="btn btn-danger remover">Remover</button>
       </div>
     </div>
   `;
   
   // Adiciona o card ao container
   document.getElementById('objetoContainer').appendChild(card);
   
   // Atualizar os eventListener de deletar
   atualizar();
 });

function atualizar(){
 const botoesNext = document.querySelectorAll('.tabela');
 const botoesRemove = document.querySelectorAll('.remover');

 botoesNext.forEach(function(botao) {
     botao.addEventListener('click', function() {
       // Subir na hierarquia até encontrar o div pai
       const cardbody = botao.closest('.card-body');
       const id = cardbody.querySelector('#id').textContent.trim();

       window.location.href = `dashboard?id=${id}`;
     });
 });
 botoesRemove.forEach(function(botao) {
     botao.addEventListener('click', function() {
       const cardbody = botao.closest('.card-body');
       const id = cardbody.querySelector('#id').textContent.trim();
       fetch(`/api/removeEstoque?id=${id}`,{
         method: 'Post',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ })
       });
       
       const card = botao.closest('.produto');
       card.remove();
     });
 });
}
