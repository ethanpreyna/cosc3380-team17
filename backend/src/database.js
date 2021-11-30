import pg from 'pg';

var conString = "postgres://uwkyucpp:1tgWeOPuTXwv9Od0OtHUAl7c-mMRSQKT@kashin.db.elephantsql.com/uwkyucpp"

const client = new pg.Client({
	/*user: process.env.DB_USER,
	host: process.env.DB_HOST,
	database: process.env.DB_NAME,
	password: process.env.DB_PASS,
	port: process.env.DB_PORT*/
    user: 'uwkyucpp',
    host: 'kashin.db.elephantsql.com',
    database: 'uwkyucpp',
    password: '1tgWeOPuTXwv9Od0OtHUAl7c-mMRSQKT',
    port: 5432,
    ssl: true,
    dialect: 'postgres',
    dialectOptions: {
    "ssl": {"require":true }
    }
    //conString
});


export default client;

/*client.connect();

client.query(`SELECT * FROM flight`, (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else{
        console.log(err.message);
    }
    client.end;
});*/