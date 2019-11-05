var db = require("../models");

module.exports = function(app) {
  // Get all customers
  app.get("/api/requestAll", function(req, res) {
    db.Customer.findAll().then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });



  // Get customer by name
  app.get("/api/requestByName", function(req, res) {
    db.Customer.findOne({
      where: {
        userName: req.body.userName
      }
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  // Create a new customer
  app.post("/api/customers", function(req, res) {
    db.Customer.create({
      ticketNum: req.body.ticketNum,
      userName: req.body.userName,
      modelName: req.body.modelName,
      returnTime: req.body.returnTime
    }).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });

  // Delete an example by ticket number
  app.delete("/api/customers", function(req, res) {
    db.Customer.destroy({ where: { ticketNum: req.body.ticketNum } }).then(
      function(dbCustomer) {
        res.json(dbCustomer);
      }
    );
  });

  // PUT route for updating return time
  app.put("/api/customers", function(req, res) {
    console.log(req.body);
    db.Customer.update(
      { returnTime: req.body.returnTime },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbCustomer) {
      res.json(dbCustomer);
    });
  });
};
