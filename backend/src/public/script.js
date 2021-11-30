const backendURL='http://localhost:8121'
const getBtn = document.getElementById('get-btn');

const fetchValues = async () => {
    try{
        const input_id = document.getElementById('input_id').value;
        const table = document.getElementById('table').value;
        var keys = [];
        var rows = [];
        var finalUrl = `${backendURL}`;
        if(table == "crew_baggage"){
            finalUrl += `/get?crew_id=${input_id}`;
        }
        else if(table == "passenger_baggage"){
            finalUrl += `/get?passenger_id=${input_id}`;
        }
        else{
            finalUrl += `/get?flight_id=${input_id}&table=${table}`;
        }
        
        const response = await axios.get(`${finalUrl}`);
        
        rows = response.data;
        if(rows.length > 0){
            keys = Object.keys(rows[0]);

            //Adding table headers based on get request

            const getterTable = document.querySelector('#table-head');
            var headerHtml = "<tr>\n";

            for(var i = 0; i < keys.length; i++){
                headerHtml+=`    <th>${keys[i]}</th>\n`;
            }
            headerHtml += "</tr>";
            getterTable.innerHTML = headerHtml;

            //Adding table getters based on get request

            const tableBody = document.querySelector('#table-body');
            tableBody.innerHTML = '';

            for(var i = 0; i < rows.length; i++){
                var bodyHtml = "<tr>\n";
                for(var j = 0; j < keys.length; j++){
                    bodyHtml += `<td>${rows[i][keys[j]]}</td>\n`;
                }
                bodyHtml += "</tr>";
                tableBody.innerHTML += bodyHtml;
            }


        }

    } catch(errors){
        console.error(errors);
    }


};



//fetchFlights(30625,'flight');
getBtn.addEventListener('click', fetchValues);

