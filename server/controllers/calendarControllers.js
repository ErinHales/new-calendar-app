var id = 10;
var calendar = require("../calendar.js");

module.exports = {
    //get all calendar events
    read: (req, res) => {
        res.send(calendar)
    },
    //make a new event
    post: (req, res) => {
        req.body.id = id++;
        calendar.push(req.body);
        res.send(calendar);
    },
    //delete existing event
    delete: (req, res) => {
        for(var i=0; i<calendar.length; i++) {
            if(calendar[i].id === Number(req.params.id)) {
                calendar.splice(i, 1);
            }
        }
        res.send(calendar);
    },
    // edit existing event
    put: (req, res) => {
        let {title,description, date, time} = req.body;
        let {id} = req.params;
        for(var i=0; i<calendar.length; i++) {
            if(calendar[i].id === Number(req.params.id)) {
                calendar[i] = {title, description, date, time, id: +id};
            }
        }
        res.send(calendar);
    }
}