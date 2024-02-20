const fetchUsers = async()=>{
    try {
        const data = await axios.get('/api/task');
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

function login(){
    fetchUsers();
}