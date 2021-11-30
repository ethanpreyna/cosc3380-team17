import axios from "axios";

const backendURL='http://localhost:8121'
//const getBtn = document.getElementById('get-btn');

const fetchFlights2 = () => {
    axios.get(`${backendURL}/get?flight_id=30625&table=flight`)
        .then(response => {
            console.log("found");
            const rows = response.data;
            console.log(rows);
        })
        .catch(error => console.error(error));
}



//fetchFlights(30625,'flight');
fetchFlights2();
