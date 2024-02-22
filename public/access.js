let signedIn = sessionStorage.getItem('signedIn') || false;
console.log(signedIn);
if(signedIn){
    window.location.href = './sample.html';
}

const fetchUsers = async()=>{
    try {
        const data = await fetch('/people').then(response=>{
            return response.json();
        });
        return data;
    } catch (error) {
        console.log(error);
    }
}

async function login(){
    let users = await fetchUsers();
    console.log(users);
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    users.map(user=>{
        if(user.email == email || user.password == password){
            sessionStorage.setItem('signedIn', true);
            sessionStorage.setItem('user', user);
            window.location.href = './sample.html';
        }
    })
}