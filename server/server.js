const express = require('express');
const bodyParser = require('body-parser');

let calendar = require('./calendar.js');
let calendarControllers = require('./controllers/calendarControllers.js')

const app = express();
const port = 3005;

app.use(bodyParser.json());

app.get('/api/calendar', calendarControllers.read);

app.post('/api/calendar', calendarControllers.post);

app.delete('/api/calendar/:id', calendarControllers.delete);

app.put('/api/calendar/:id', calendarControllers.put);

app.listen(port, () => {
    console.log("listening on port: " + port);
});
