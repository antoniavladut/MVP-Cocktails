const express = require("express");
const router = express.Router();
const db = require("../model/helper");

/* GET recipes list. */
router.get("/", function (req, res, next) {
  db("SELECT * FROM cocktails;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

/* Get recipe by ID */
router.get("/:id", async function (req, res, next) {
  // create id for searching
  let recipeID = req.params.id;
  try {
    // create results if student id matches searched id
    let results = await db(`SELECT * FROM cocktails WHERE ID = ${recipeID}`);
    let cocktails = results.data;
    if (cocktails.length === 0) {
      // cocktail array empty, no cocktail found
      res.status(404).send({ error: "Cocktail not found" });
    } else {
      // return located student as object
      res.send(cocktails[0]);
    }
  } catch (err) {
    // server error
    res.status(500).send(err);
  }
});

module.exports = router;
