// kicks user to the sign in page if they try to access the sample application without signing in
let signedIn = sessionStorage.getItem('signedIn');
console.log(signedIn)
if(signedIn == 'false'){
    console.log('return')
    window.location.href = './login.html';
}
let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
let routineSection = document.querySelector('#routine');
let exerciseSection = document.getElementById('exerciseSection');

// gest the list of users and finds the current user to make sure that the user info is up to date
const fetchUsers = async()=>{
    try {
        const data = await fetch('/people').then(response=>{
            return response.json();
        });
        let updatedUser;
        data.map(user=>{
            if(user.email == currentUser.email){
                updatedUser = user;
            }
        })
        return updatedUser;
    } catch (error) {
        console.log(error);
    }
}

// function to show create routine section
function addRoutine(){
    let routineInput = document.querySelector('.newRoutine');
    routineInput.classList.remove("hide");
}

// cancels the create section
function cancelCreateRoutine(){
    let routineInput = document.querySelector('.newRoutine');
    routineInput.classList.add("hide");
}

// function to create a new routine
async function createRoutine(){
    let routineInput = document.querySelector('.newRoutine');
    let routineName = document.getElementById('routineName').value;
    let newRoutine = {
        name:routineName,
        exercises: [],
    }
    let currentUser = await fetchUsers();
    let routines = currentUser.routines;
    routines.push(newRoutine);
    await fetch(`/people/${currentUser.userID}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({routines:routines}),
    })
    routineInput.classList.add("hide");
    showRoutines();
}

// function to display the routines
async function showRoutines(){
    let currentUser = await fetchUsers();
    routineSection.innerHTML = '';
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
    let routineId = document.querySelector('#routine').value;
    let routine = currentUser.routines;
    routine.splice(routineId, 1);
    await fetch(`/people/${currentUser.userID}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({routines:routine}),
    })
    showRoutines();
}

// function to show exercise create form
function addExercise(){
    let exerciseInput = document.querySelector('.newExercise');
    exerciseInput.classList.remove("hide");
}

// cancels the create section
function cancelCreateExercise(){
    let exerciseInput = document.querySelector('.newExercise');
    exerciseInput.classList.add("hide");
}

// function to create a new exercise
async function createExercise(){
    let exerciseInput = document.querySelector('.exerciseSection');
    let exerciseName = document.getElementById('exerciseName').value;
    let exerciseSets = document.getElementById('exerciseSets').value;
    let exerciseReps = document.getElementById('exerciseReps').value;
    let exerciseWeight = document.getElementById('exerciseWeight').value;
    let routineNum = document.getElementById('routine').value;
    let currentUser = await fetchUsers();
    let routine = currentUser.routines;

    let newExercise = {
        name: exerciseName,
        sets: exerciseSets,
        reps: exerciseReps,
        weight: exerciseWeight,
    };

    let exerc = routine[routineNum].exercises;
    exerc.push(newExercise);    
    routine[routineNum].exercises = exerc;

    await fetch(`/people/${currentUser.userID}`, {
        method: "PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({routines:routine}),
    })
}

// function to display the exercises
async function showExercises(){

}