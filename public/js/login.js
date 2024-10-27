document.addEventListener("DOMContentLoaded", function () {
   const tabLogin = document.getElementById("tab-login");
   const tabRegister = document.getElementById("tab-register");
   const pillsLogin = document.getElementById("pills-login");
   const pillsRegister = document.getElementById("pills-register");

   const popups = document.querySelectorAll("#popup"); // Seleciona todos os elementos com id "popup"

   popups.forEach((popup) => {
      popup.style.display = "block";
      popup.style.background = "#CD5C5C";

      setTimeout(() => {
         popup.style.opacity = "0";
         setTimeout(() => {
         popup.style.display = "none";
         popup.style.opacity = "1";
         }, 500);
      }, 3000); // Tempo que o popup ficará visível
   });

   // Função para mostrar a aba de Login
   tabLogin.addEventListener("click", function (event) {
      event.preventDefault();
      // Alterar classes para tornar a aba de login ativa
      tabLogin.classList.add("active");
      tabRegister.classList.remove("active");

      // Mostrar o conteúdo de Login e esconder o de Register
      pillsLogin.classList.add("show", "active");
      pillsRegister.classList.remove("show", "active");
   });

   // Função para mostrar a aba de Register
   tabRegister.addEventListener("click", function (event) {
      event.preventDefault();
      // Alterar classes para tornar a aba de registro ativa
      tabRegister.classList.add("active");
      tabLogin.classList.remove("active");

      // Mostrar o conteúdo de Register e esconder o de Login
      pillsRegister.classList.add("show", "active");
      pillsLogin.classList.remove("show", "active");
   });
});
