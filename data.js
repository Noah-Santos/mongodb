let TASK = require('./models/tasks');
let PERSON = require('./models/person');
const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const connectDB = require('./db/connect');

const task = [
  {
        "name": "Essay",
        "description": "Write essay",
        "taskID": 1,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Project",
        "description": "Finish task manager project",
        "taskID": 2,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Planning",
        "description": "Plan website",
        "taskID": 3,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Caretaking",
        "description": "Care for plants",
        "taskID": 4,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Feeding",
        "description": "Feed cat",
        "taskID": 5,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Eat",
        "description": "Eat dinner",
        "taskID": 6,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Study",
        "description": "Study coding content",
        "taskID": 7,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Read",
        "description": "Read book",
        "taskID": 8,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Charging",
        "description": "Charge devices",
        "taskID": 9,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Logging",
        "description": "Log work hours",
        "taskID": 10,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Trash",
        "description": "Take out trash",
        "taskID": 11,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Shop",
        "description": "Get grocery supplies",
        "taskID": 12,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Gift",
        "description": "Find birthday gift",
        "taskID": 13,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Cook",
        "description": "Cook food for the week",
        "taskID": 14,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Organize",
        "description": "Organize cables",
        "taskID": 15,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Laundry",
        "description": "Fold laundry",
        "taskID": 16,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Socialize",
        "description": "Talk to peers",
        "taskID": 17,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Training",
        "description": "Finish internship training",
        "taskID": 18,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Sleep",
        "description": "Get 8 hours of rest",
        "taskID": 19,
        "completed": false,
        "assigned": "unassigned"
    },
    {
        "name": "Gaming",
        "description": "Finish next level in game",
        "taskID": 20,
        "completed": false,
        "assigned": "unassigned"
    }
  ];

const people =[
    {
        name: 'Noah Santos',
        age: 17,
        task: 'none',
        userID: 1
    },
    {
        name: 'Sherman Cruz',
        age: 20,
        task: 'none',
        userID: 2
    },
    {
        name: 'Bjorn Kruger',
        age: 21,
        task: 'none',
        userID: 3
    },
    {
        name: 'William Philips',
        age: 15,
        task: 'none',
        userID: 4
    },
    {
        name: 'George Patton',
        age: 28,
        task: 'none',
        userID: 5
    }
]

async function pushData(){
    await connectDB(process.env.MONGO_URI);
    for(let i = 0; i < task.length; i++){
        const data = new TASK(
            task[i]
        )
        await data.validate();
        await data.save();
    }

    for(let i = 0; i < people.length; i++){
        const data = new PERSON(
            people[i]
        )
        await data.validate();
        await data.save();
    }
}

pushData();
