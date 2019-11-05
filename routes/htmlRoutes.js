var db = require("../models");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {

        db.Customer.findAll({}).then(function(dbeazykeyz) {
            console.log(dbeazykeyz)
            res.render("index", {
                // msg: "Welcome!",
                customer: dbeazykeyz

            });
        });
    });

    app.get("/Valet", function(req, res) {

        
            res.render("input", {layout: 'valet.handlebars'});
      
    });



    // Load  page and pass in an customer by id
    app.get("/home/:id", function(req, res) {
        db.Customer.findOne({ where: { id: req.params.id } }).then(function(dbeazykeyz) {
            console.log(dbeazykeyz)
            res.render("customer", {
                customer: dbeazykeyz

            });
        });
    });
    app.get("/api/requestByTicket", function(req, res) {
        db.Customer.findOne({
          where: {
            ticketNum: req.body.ticketNum
          }
        }).then(function(dbCustomer) {
          res.json(dbCustomer);
          
          res.render("customer", {
            customer: dbCustomer
    
        });
        });
    
        
    
      });
    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};