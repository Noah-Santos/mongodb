// function to log the user out
function logout(){
    sessionStorage.setItem('signedIn', false);
    sessionStorage.setItem('currentUser', []);
    window.location.href = './login.html';
}