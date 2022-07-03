const express = require('express')
const db = require('../../database');
const router = express.Router();

router.get("/", async (req, res) => {
    console.log("Test!")
    const results = await db.promise().query(`SELECT * FROM lunch_wishes`);
    console.log(results[0])
    res.status(200).send(results[0]);
})

router.post('/', (req, res) => {
    console.log("Correct route")
    console.log(req.body);
    const { name, lunch_item } = req.body;

    if (name && lunch_item) {
        try {
            db.promise().query(`INSERT INTO lunch_wishes VALUES(NULL,'${name}','${lunch_item}')`);
            res.status(201).send({msg: 'Created User'});
        }
        catch (err) {
            console.log(err);
        }
        
    }
    else {
        res.status(500).send("The request for storing lunch wishes is missing a require element.");
    }
})


module.exports = router
