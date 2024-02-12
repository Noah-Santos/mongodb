const express = require('express');
const router = express.Router();

const{createUser, readUser, updateUser, deleteUser} = require("../controllers/people");

router.get('/', readUser);
router.post('/', createUser);
router.put('/:userID', updateUser);
router.delete('/:userID', deleteUser);

module.exports = router;