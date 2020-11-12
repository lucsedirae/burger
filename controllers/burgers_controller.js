//*Dependencies
const express = require("express");

//*Establishes the express router method
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        //*hbsObj stands for Handlebars Object
        let hbsObj = {
            burgers: data
        };
        console.log(hbsObj);
        res.render("index", hbsObj);
    })
});

router.post("api/burgers", function(req, res) {
    burger.create(["name", "devoured"], [req.body.name, req.body.devoured], function(res) {
        res.json({id: res.insertId})
    })
})



module.exports = router;