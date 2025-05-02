document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Aquí puedes agregar la lógica para verificar el usuario y la contraseña
    if (username === 'admin' && password === '1234') {
        message.style.color = 'green';
        message.textContent = '¡Inicio de sesión exitoso!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Usuario o contraseña incorrectos.';
    }
});