function validateUsername (){
    let username = document.getElementById('Username').value;
    let errorMessage = document.getElementById('error-message');
   
    if (!username) { //si no hay nada en el campo, entonces se va activa lo siguiente 
        errorMessage.textContent = 'Error: El nombre de usuario no puede estar vacío';
        errorMessage.style.display = 'block'; 

    } else if (!(username.length > 5)) {   //validar la longitud de la cadena y pregunta si no es mayor a 5 entonces ejecuta este bloque
        errorMessage.textContent = 'Error: El nombre de usuario debe tener un minimo de 5 caracteres';
        errorMessage.style.display = 'block'; 
    } else{
        errorMessage.style.display = 'none'; 


    }

}
function validatePassword (){
    let password = document.getElementById('Password').value;
    let errorMessage = document.getElementById('Password-error');

    if (!password){
        errorMessage.textContent = 'Error: la contraseña no debe estar vacío';
        errorMessage.style.display = 'block'; 

    } else if (!(password.length > 5)) {   //validar la longitud de la cadena y pregunta si no es mayor a 5 entonces ejecuta este bloque
        errorMessage.textContent = 'Error: la longitud minima es de 5 caracteres';
        errorMessage.style.display = 'block'; 
    } else{
        errorMessage.style.display = 'none'; 
   

    }

}