var db = require("../models");

module.exports = function(app) {
    // Get all ecustomers
    app.get("/api/home", function(req, res) {
        db.Eazykeyz.findAll({}).then(function(dbEazykeyz) {
            res.json(dbEazykeyz);
        });
    });

    // Create a new customer
    app.post("/api/home", function(req, res) {
        db.Eazykeyz.create(req.body).then(function(dbEazykeyz) {
            res.json(dbEazykeyz);
        });
    });

    // Delete an customer by id
    app.delete("/api//:id", function(req, res) {
        db.Eazykeyz.destroy({ where: { id: req.params.id } }).then(function(dbEazykeyz) {
            res.json(dbEazykeyz);
        });
    });
};