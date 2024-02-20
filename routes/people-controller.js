const express = require('express');
const router = express.Router();

const{createUser, getUser, updateUser, deleteUser, findUser} = require("../controllers/people");

router.get('/', getUser);
router.get('/:userID', getUser);
router.post('/', createUser);
router.put('/:userID', updateUser);
router.delete('/:userID', deleteUser);

module.exports = router;