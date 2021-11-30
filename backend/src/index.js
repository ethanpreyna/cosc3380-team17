import express, { Router } from 'express';
import client from './database.js';
import http from 'http';
import fs from 'fs';
import cors from 'cors';

const app = express();
const port = 5432 | 3001;

import getters from './getters.js';
import posters from './posters.js';
import path from 'path';
import dirname from 'path';


const __dirname = path.resolve();

app.use(express.json())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Contconnecrol-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
  //res.writeHead(200, {'Content-Type': 'text/html'});
  //var myReadSteam = fs.createReadStream(__dirname + '/index.html', 'utf8');
  //myReadSteam.pipe(res);

});

app.use(express.static('public'));
app.use(cors());
app.use(express.json());      //req.body
/*app.use((req, res, next) => {
    res.status(404).json({ message: "Route not found" });
  })*/

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
    //res.sendFile(path.join(__dirname, './pages/script.js'));
});


client.connect();

app.get('/get', (req, res) =>{
    if(req.query.flight_id != undefined &&
        req.query.table == "flight"){
        getters.getFlightViaFlightId(req.query.flight_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } else if(req.query.flight_id != undefined &&
        req.query.table == "crew"){
        getters.getCrewViaFlightId(req.query.flight_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } else if(req.query.flight_id != undefined &&
        req.query.table == "passengers"){
        getters.getPassengersViaFlightId(req.query.flight_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } else if(req.query.flight_id != undefined &&
        req.query.table == "maintenance"){
        getters.getMaintenanceViaFlightId(req.query.flight_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } else if(req.query.flight_id != undefined &&
        req.query.table == "services"){
        getters.getServicesViaFlightId(req.query.flight_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } else if(req.query.crew_id != undefined){
        getters.getCrewBaggageViaCrewId(req.query.crew_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } else if(req.query.passenger_id != undefined){
        getters.getPassengerBaggageViaPassengerId(req.query.passenger_id)
            .then(response => {
                res.status(200).send(response);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    }
})


app.post('/post',(req,res) =>{ // receives axios post requests to input account data into the db
	if(req.body.discord_id != undefined &&
		req.body.github_username != undefined &&
		req.body.discord_username != undefined &&
		req.body.discord_email != undefined){
			accounts.createNewAccount(req.body.discord_id, req.body.github_username, req.body.discord_username, req.body.discord_email);
		}
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })