document= addEventListener("DOMContentLoaded", function(){
    const  contactFrom = document.getElementById ("contact-form"); 
    const nameInput = document.getElementById ("name");
    const emailInput = document.getElementById ("email");
    const messageInput = document.getElementById ("message");
    const nameError = document.getElementById ("name-error");
    const emailError = document.getElementById ("email-error");
    const messageError = document.getElementById ("message-error");
    debugger

    contactFrom.addEventListener("submit", function(event) {
        let isValid = true;
        nameError.textContent = "";
        emailError.textContent = "";
        messageError.textContent = "";

        if (nameInput.value === "") {
            nameError.textContent = "Por favor, insira o seu nome.";
            isValid =  false
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!emailPattern.test(emailInput.value)) {
            emailError.textContent = "Por favor, insira um e-mail válido.";
            isValid = false
        }
        if (messageInput.value === "") {
            messageError.textContent = "Por favor, insira uma mensagem.";
            isValid =  false 

        }
        if(isValid) {
            event.preventDefault(); //impede o envio do formulario se houver erros
        }

    });

});