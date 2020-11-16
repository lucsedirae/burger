//*Dependencies
const express = require("express");

//*Establishes the express router method
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.all(function (data) {
    //*hbsObj stands for Handlebars Object
    let hbsObj = {
      burgers: data,
    };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function (result) {
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", function (req, res) {
  let condition = "id = " + req.params.id;
  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    function (result) {
      if (res.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});

router.delete("/api/burgers/:id", function(req, res){
    let condition = "id = " + req.params.id;

    burger.delete(condition, function(res) {
        if(res.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});





module.exports = router;