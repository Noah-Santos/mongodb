// let {people} = require('../data');
const User = require('../models/person');

// get function for all people
const readUser = async(req,res)=>{
    // res.json({success:true, data:people});
    try {
        let people = await User.find({});
        // console.log(answer);
        res.json(people);
    } catch (error) {
        console.log(error)
    }
}

// post function for creating people
const createUser = async(req,res)=>{
    try {
        let allUser = await User.find({});
        let {name, age, task} = req.body;

        if(task == ''){
            task = 'none';
        }

        let newPerson = await User.create({name:name, age:age, userID:allUser.length+1, task:task});
        allUser = await User.find({});
        res.json(allUser);

    } catch (error) {
        console.log(error);
    }
}

// put function for update people
const updateUser = async(req,res)=>{
    try {
        let {userID} = req.params;
        let {name, age, task} = req.body;
        let changePerson = User.findById(userID)

        if(!name){
            name = changePerson.name;
        }
        if(!task){
            task = changePerson.task;
        }
        if(!age){
            age = changePerson.age;
        }

        let people = await User.findOneAndUpdate({userID:userID}, {name:name, task:task, age:age});
        res.json(people);
    } catch (error) {
        console.log(error);
    }
}

// delete function for delete people
const deleteUser = async(req,res)=>{
    try {
        const {userID} = req.params;
        let person = await User.findOneAndDelete({userID:userID});
        res.json(person);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {readUser, createUser, updateUser, deleteUser};