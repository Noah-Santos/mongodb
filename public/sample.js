let signedIn = sessionStorage.getItem('signedIn') || false;
console.log(signedIn)
if(!signedIn){
    window.location.href = './login.html';
}