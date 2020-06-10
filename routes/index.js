const express = require('express');
const router = express.Router();

const indexFunc = () => {
  return {
    "name": "Emre",
    "surname": "Akçadağ"
  };
};

const emreFunc = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Emreeeeeafsdeeee");
    }, 2000);
  });
};

/* GET home page. */
router.get('/', async (req, res, next) => {
  const emre = await emreFunc();
  res.json(emre).status(123);
});

module.exports = router;
module.exports.indexFunc = indexFunc;
