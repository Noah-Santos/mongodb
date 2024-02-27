// let {people} = require('../data');
const User = require('../models/person');

// get function for all people
const getUser = async(req,res)=>{
    try {
        // finds all the data from the User variable and returns the data in the reponse object
        // can put specifics in the curly braces to search for specific data such as people with the name "Smith"
        let people = await User.find({});
        res.json(people);
    } catch (error) {
        console.log(error)
    }
}

const findUser = async(req,res)=>{
    try {
        // gets the list of parameters based on the URL that is fetched from the JS code
        let {userID} = req.params;
        // searches the User variable for a piece of data that matches whatever is specified in the curly braces
        // findOne() returns the first piece of data that matches its search
        let person = await User.findOne({userID: userID});
        // returns whatever it finds
        res.json(person);
    }catch(error){
        console.log(error);
    }
}

// post function for creating people
const createUser = async(req,res)=>{
    try {
        // gets all the data from the User variable
        let allUser = await User.find({});
        // gets information from the JS file
        let {username, email, password, routines} = req.body;

        // creating a simple object
        routines = {
            name: 'arm day',
            exercises: [],
        }

        // creates a new user object in the MongoDB using the information received in the body
        let newPerson = await User.create({username:username, email:email, password:password, routines:routines, userID:allUser.length});
        // gets all the users now, including the one just created, and returns it
        allUser = await User.find({});
        res.json(allUser);

    } catch (error) {
        console.log(error);
    }
}

// put function for update people
const updateUser = async(req,res)=>{
    try {
        // gets the parameter from the fetched URL
        let {userID} = req.params;
        // gets the updated info from the body of the fetch request
        let {routines} = req.body;
        // gets the user based on the parameter
        let changePerson = User.findOne({userID});
        // auto assigns the routine variable if there is no data in it
        if(!routines){
            routines = changePerson.routines;
        }

        // findOneAndUpdate() will take two sets of data
        // the first piece of data will determine what to search for, and the second piece of data will determine what to update in the found data
        let people = await User.findOneAndUpdate({userID:userID}, {routines:routines});
        res.json(people);
    } catch (error) {
        console.log(error);
    }
}

// delete function for delete people
const deleteUser = async(req,res)=>{
    try {
        // gets the parameter from the URL
        const {userID} = req.params;
        // finds the peice of data that matches the parameter and deletes it from the database
        let person = await User.findOneAndDelete({userID:userID});
        res.json(person);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getUser, createUser, updateUser, deleteUser, findUser};