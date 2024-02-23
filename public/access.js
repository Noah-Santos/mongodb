// denies users access into the sample application if they do not sign in
let signedIn = sessionStorage.getItem('signedIn') || false;
console.log(signedIn);
if(signedIn){
    window.location.href = './sample.html';
}

// gets the users from the MongoDB database
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

// checks to see if the user credentials match a user in the database
async function login(){
    let users = await fetchUsers();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    users.map(user=>{
        if(user.email == email && user.password == password){
            sessionStorage.setItem('signedIn', true);
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = './sample.html';
        }
    })
}

// function to create an account
async function register(){
    let users = await fetchUsers();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let available = true;
    users.map(user=>{
        if(user.email == email){
            available = false;
        }
    })

    if(available){
        fetch('/people',{
            method: 'POST',
            body: JSON.stringify({username: name, email, password}),
            headers: {'Content-Type': 'application/json'},
        })
        window.location.href = './login.html';
    }else{
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
}