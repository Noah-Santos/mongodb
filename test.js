// npm install axios
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {
    q: 'The Pacific'
  },
  headers: {
    'X-RapidAPI-Key': '380492f9b7msh20d59cdef807ed1p1e8de2jsn02e4e09b5a66',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};
async function main(){
    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
main();