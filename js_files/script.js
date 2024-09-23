
document.getElementById('showPassword').addEventListener('change', function() {
    const passwordField = document.getElementById('password');
    passwordField.type = this.checked ? 'text' : 'password';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if username and password are correct
    if (username === 'admin' && password === 'admin') {
        // Redirect to the main menu page
        window.location.href = 'html_files/main-menu.html';
        
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

//MODIFY MENU  ACTION BTN RETURN FUNCTUION
function goBack() {
    window.history.back();
}



 


