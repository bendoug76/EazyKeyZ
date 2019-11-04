var db = require("../models");

var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Ticket.findAll({}).then(function(dbTicket) {
      res.json(dbTicket);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Ticket.create(req.body).then(function(dbTicket) {
      res.json(dbTicket);
    });
  });
//time returning
  // app.post("/api/examples", function(req, res) {

  //   req.body = {
  //     ticketNum: req.body.ticketNum,
  //     userName: req.body.userName,
  //     modelName: req.body.modelName,
  //     returnTime: req.body.returnTime,}

  //   // newDbEntry = {
  //   //   ticketnumber: 'idhtiushjdt',
  //   //   name: 'dsniufnsdf'
  //   // }

  //   var pickuptime = moment().add(req.body.timetilreturn, 'm')
  //   moment()



  //   db.Example.create(newDbEntry).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

app.post("/valet", function(req, res){

    

})
  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Ticket.destroy({ where: { id: req.params.id } }).then(function(dbTicket) {
      res.json(dbTicket);
    });
  });

  // PUT route for updating posts
  app.put("/api/posts", function(req, res) {
    db.Ticket.update(req.body,
      {
        where: {
          ticketNum: req.body.ticketNum
        }
      })
      .then(function(dbTicket) {
        res.json(dbTicket);
      });
  });
};
