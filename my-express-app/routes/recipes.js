const express = require("express");
const router = express.Router();
const db = require("../model/helper");

/* GET recipes list. */
router.get("/", function (req, res, next) {
  let sql = "SELECT * FROM cocktails";
  const wheres = [];

  if (req.query.title) {
    wheres.push(`title LIKE '%${req.query.title}%'`);
  }
  if (req.query.method) {
    wheres.push(`method LIKE '%${req.query.method}%'`);
  }
  if (req.query.glass) {
    wheres.push(`glass LIKE '%${req.query.glass}%'`);
  }
  if (req.query.ice) {
    wheres.push(`ice LIKE '%${req.query.ice}%'`);
  }
  if (req.query.garnish) {
    wheres.push(`title LIKE '%${req.query.garnish}%'`);
  }
  if (req.query.ingredients) {
    wheres.push(`ingredients LIKE '%${req.query.ingredients}%'`);
  }
  if (req.query.instructions) {
    wheres.push(`instructions LIKE '%${req.query.instructions}%'`);
  }

  if (wheres.length > 0) {
    sql += ` WHERE ${wheres.join(" OR ")}`;
  }

  db(sql)
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
    // create results if cocktail id matches searched id
    let results = await db(`SELECT * FROM cocktails WHERE ID = ${recipeID}`);
    let cocktails = results.data;
    if (cocktails.length === 0) {
      // cocktail array empty, no cocktail found
      res.status(404).send({ error: "Cocktail not found" });
    } else {
      // return located cocktail as object
      res.send(cocktails[0]);
    }
  } catch (err) {
    // server error
    res.status(500).send(err);
  }
});

// /* Get recipe by ingredient */
// router.get("/search", async function (req, res, next) {
//   // create ingredient for searching

//   let recipeIngredient = req.params.ingredients;
//   try {
//     // create results if cocktail ingredient matches searched ingredient
//     let results = await db(
//       `SELECT * FROM cocktails WHERE ingredients LIKE '%${recipeIngredient}%'`
//     );
//     let cocktails = results.data;
//     if (cocktails.length === 0) {
//       // cocktail array empty, no cocktail found
//       res.status(404).send({ error: "Cocktail not found" });
//     } else {
//       // return located cocktail as object
//       res.send(cocktails);
//     }
//   } catch (err) {
//     // server error
//     res.status(500).send(err);
//   }
// });

// /*Insert new recipe into DB */
// router.post("/", async function (req, res, next) {
//   let { title, method, glass, ice, garnish, ingredients, instructions } =
//     req.body;
//   // sql command line for inserting cocktail (as completed in initial set up)
//   let sql = `INSERT INTO cocktails (title, method, glass, ice, garnish, ingredients, instructions )
//     VALUES ('${title}', '${method}', '${glass}', '${ice}', '${garnish}', '${ingredients}', '${instructions}')`;
//   // adding new cocktail
//   try {
//     await db(sql); // add cocktail when function called
//     let list = await db(`SELECT * FROM cocktails`); // return whole cocktail list
//     let cocktails = list.data; // add managable & comprehensive variable
//     res.status(201).send(cocktails); // send updated array
//     // server error
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

/* Delete a cocktail from the DB */
router.delete("/:id", async function (req, res, next) {
  // get cocktail ID
  let cocktailID = req.params.id;
  try {
    // let result = when cocktail id matches searched for
    let result = await db(`SELECT * FROM cocktails WHERE id = ${cocktailID}`);
    if (result.data.length === 0) {
      // cocktail array is empty - no cocktial found
      res.status(404).send({ error: "Cocktail not found" });
    } else {
      let sql = `
      DELETE FROM cocktails
      WHERE id = ${cocktailID}`;
      await db(sql); // delete item
      let result = await db(`SELECT * FROM cocktails`);
      let cocktails = result.data; // array without deleted cocktail
      res.send(cocktails); // return updated array
    }
  } catch (err) {
    // server error
    res.status(500).send(err.message);
  }
});

module.exports = router;

/* GET recipes list. */
router.get("/", function (req, res, next) {
  db("SELECT * FROM cocktails;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});
