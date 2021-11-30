import client from './database.js';
import { isAlphanumerical } from 'is-alphanumerical';

// Getters

const getFlightViaFlightId = (flight_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(flight_id)) {
            client.query(`
            SELECT *
            FROM flight
            WHERE flight_id='${flight_id}';
            `, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results.rows);
                }
            });
        } else{
            reject(`flight_id is not alphanumerical:\n\r${flight_id}`);
        }
    });
}

const getCrewViaFlightId = (flight_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(flight_id)) {
            client.query(`
            SELECT *
            FROM crew
            WHERE flight_id='${flight_id}';
            `, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results.rows);
                }
            });
        } else{
            reject(`flight_id is not alphanumerical:\n\r${flight_id}`);
        }
    });
}

const getPassengersViaFlightId = (flight_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(flight_id)) {
            client.query(`
            SELECT *
            FROM passengers
            WHERE flight_id='${flight_id}';
            `, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results.rows);
                }
            });
        } else{
            reject(`flight_id is not alphanumerical:\n\r${flight_id}`);
        }
    });
}

const getMaintenanceViaFlightId = (flight_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(flight_id)) {
            client.query(`
            SELECT *
            FROM maintenance
            WHERE flight_id='${flight_id}';
            `, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results.rows);
                }
            });
        } else{
            reject(`flight_id is not alphanumerical:\n\r${flight_id}`);
        }
    });
}

const getServicesViaFlightId = (flight_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(flight_id)) {
            client.query(`
            SELECT *
            FROM services
            WHERE flight_id='${flight_id}';
            `, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results.rows);
                }
            });
        } else{
            reject(`flight_id is not alphanumerical:\n\r${flight_id}`);
        }
    });
}


const getCrewBaggageViaCrewId = (crew_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(crew_id)) {
            client.query(`
            SELECT *
            FROM crew_baggage
            WHERE crew_id='${crew_id}';
            `, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results.rows);
                }
            });
        } else{
            reject(`crew_id is not alphanumerical:\n\r${crew_id}`);
        }
    });
}

const getPassengerBaggageViaPassengerId = (passenger_id) =>{
    return new Promise(function (resolve, reject) {
		if (isAlphanumerical(passenger_id)) {
            client.query(`
            SELECT *
            FROM passenger_baggage
            WHERE passenger_id='${passenger_id}';
            `, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results.rows);
                }
            });
        } else{
            reject(`passenger_id is not alphanumerical:\n\r${passenger_id}`);
        }
    });
}

export default {
	getFlightViaFlightId,
    getCrewViaFlightId,
    getPassengersViaFlightId,
    getMaintenanceViaFlightId,
    getServicesViaFlightId,
    getCrewBaggageViaCrewId,
    getPassengerBaggageViaPassengerId
}
