const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const events = require('./events');

const connection = mysql.createConnection({
    host: '148.72.232.183',
    user: 'ph20963532081',
    password: 'vz49@7Hz',
    database: 'db_evcard'

});

connection.connect();
console.log("Database Connected 1")

const port = process.env.PORT || 8080;
console.log("Database Connected Port = ", port)

const app = express()
    .use(cors())
    .use(bodyParser.json())
    .use(events(connection));
console.log("Database Connected App = ", app)
app.listen(port, () => {
    console.log("Database Connected")
    console.log(`Express server listening on port ${port}`);
});