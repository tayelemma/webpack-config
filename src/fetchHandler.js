import axios from "axios";

const fetchHandler = () => {

    axios.get('https://icanhazdadjoke.com', {
        headers: {
            Accept: 'application/json'
        }
    }).then((res)=> {
       let divId = document.getElementById('joke');
       divId.innerHTML = res.data.joke;
    })
}

export default fetchHandler;