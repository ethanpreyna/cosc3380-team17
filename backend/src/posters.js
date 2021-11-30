import client from './database.js';
import { isAlphanumerical } from 'is-alphanumerical';


const createNewFlight = (flight_id, airplane, takeoff_time, landing_time, gate) =>{ //Receives axios post request from index.js, connects to db and creates new timeline
	if (isAlphanumerical(flight_id) && isAlphanumerical(airplane) && isAlphanumerical(takeoff_time) && isAlphanumerical(landing_time) && isAlphanumerical(gate)) {
		//Inputs id, guild_id, premium version state into a query to insert to the timeline table
		var promise1 = new Promise(function(resolve, reject) {
			pool.query(` 
				INSERT INTO flight(flight_id,airplane,takeoff_time,landing_time,gate) 
                VALUES('${flight_id}','${airplane}', ${takeoff_time}, ${landing_time}, ${gate});`
			, (error) => {
					if (error) {
						reject(error);
					} else {
						resolve('Added timeline');
					}
				});
		});
	}
}

export default{
    createNewFlight
}