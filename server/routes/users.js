const express = require('express');
const router = express.Router();

module.exports = (knex) => {
  router.get('/', (req, res) => {
    knex.select('*')
      .from('users')
      .then( (results) => {
        console.log("get user tset:", results);
        res.send(results);
      });
  });

  return router;
}