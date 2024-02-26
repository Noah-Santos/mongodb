// denies users access into the sample application if they do not sign in
let signedIn = sessionStorage.getItem('signedIn') || false;
if(signedIn == 'true'){
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

// login function
async function login(){
    // gets the email and password from the user
    let users = await fetchUsers();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // checks to see if the user credentials match a user in the database and signs them in if they do
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
    // gets the information from the user
    let users = await fetchUsers();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // makes sure that the email is not already in use
    let available = true;
    users.map(user=>{
        if(user.email == email){
            available = false;
        }
    })
    // adds the new user to the database if the email is available and sends the user to the login page
    if(available){
        fetch('/people',{
            method: 'POST',
            body: JSON.stringify({username: name, email, password}),
            headers: {'Content-Type': 'application/json'},
        })
        window.location.href = './login.html';
    }else{
        // empties the input fields if the email is already in use
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
}