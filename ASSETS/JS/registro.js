document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    document.getElementById('message').innerText = `Usuario registrado: ${name} (${email})`;
    


    document.getElementById('registrationForm').reset();
});
