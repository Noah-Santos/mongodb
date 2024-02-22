// kicks user to the sign in page if they try to access the sample application without signing in
let signedIn = sessionStorage.getItem('signedIn') || false;
if(!signedIn){
    window.location.href = './login.html';
}
let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
console.log(currentUser);
let routineSection = document.querySelector('#routine');
let exerciseSection = document.getElementById('exerciseSection');

// const fetchUsers = async()=>{
//     try {
//         const data = await fetch('/people').then(response=>{
//             return response.json();
//         });
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

// function to create a new routine
async function createRoutine(){
    let routineName = document.getElementById('routineName');
    let newRoutine = {
        name:routineName,
        exercises: [],
    }
    let routines = currentUser.routines;
    routines.push(newRoutine);
    fetch(`/people/${currentUser.userID}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({routines:routines}),
    })
}

// function to display the routines
function showRoutines(){
    routineSection.innerHTML = '';
    console.log(currentUser)
    console.log(JSON.parse(sessionStorage.getItem('currentUser')))
    let routines = currentUser.routines.map((routine, index)=>{
        return `
            <option value=${index}>${routine.name}</option>
        `
    });
    routineSection.innerHTML = routines.join('');

}
showRoutines();

// function to delete a routine
async function deleteRoutine(){
    
}

// function to create a new exercise
async function createExercise(){

}

// function to display the exercises
async function showExercises(){

}