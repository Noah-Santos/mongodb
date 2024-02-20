// let {people} = require('../data');
const User = require('../models/person');

// get function for all people
const getUser = async(req,res)=>{
    // res.json({success:true, data:people});
    try {
        let people = await User.find({});
        // console.log(answer);
        res.json(people);
    } catch (error) {
        console.log(error)
    }
}

const findUser = async(req,res)=>{
    try {
        let {userID} = req.params;
        let person = await User.findOne({userID});
        res.json(person);
    }catch(error){
        console.log(error);
    }
}

// post function for creating people
const createUser = async(req,res)=>{
    try {
        let allUser = await User.find({});
        let {username, email, password, weight, height, age, routines} = req.body;

        let newPerson = await User.create({username:username, email:email, password:password, weight:weight, height:height, age:age, routines:routines, userID:allUser.length+1});
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
        let {routines, height, weight} = req.body;
        let changePerson = User.findById(userID)

        if(!routines){
            routines = changePerson.routines;
        }
        if(!height){
            height = changePerson.height;
        }
        if(!weight){
            weight = changePerson.weight;
        }

        let people = await User.findOneAndUpdate({userID:userID}, {routines:routines, height:height, weight:weight});
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

module.exports = {getUser, createUser, updateUser, deleteUser, findUser};