const express = require('express');
const router = express.Router();
const request = require("request");
const DialogBox = require("../../../base/model/DialogBox");
const ButtonModel = require("../../../base/model/ButtonModel");

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

/*const dialogBox = {
  dialogBox: {
    title: "Dialog Title",
    isCancelable: false,
    description: "Dialog Description",
    buttonList: ["Button1", "Button2"]
  }
};*/

const dialogBox = new DialogBox(
  "Dialog Title",
  "Dialog Description",
  false,
  [
    new ButtonModel("OK", "Theme1", "request"),
    new ButtonModel("Navigate", "Theme2", "navigate")
  ]
).getNamedJsonObject();

/* GET home page.
router.get('/', async (req, res, next) => {
  const emre = await emreFunc();
  res.json(emre).status(123);
}); */

router.post("/main", async (req, res, next) => {
  request(
    "https://api.nasa.gov/planetary/apod?api_key=SzVivPLHN7PCYZKtD3PupYZWeKPGTVS0Tx9F2VNh",
    {json: true},
    (nasaErr, nasaRes, nasaBody) => {
      if (nasaErr) {
        res.send(nasaErr);
      } else {
        dialogBox.dialogBox.title = nasaBody.title;
        dialogBox.dialogBox.description = nasaBody.explanation;
        dialogBox.dialogBox.isCancelable = req.body.isCancelable;
        const result = req.body.showDialog ? Object.assign(nasaBody, dialogBox) : nasaBody;
        console.log(result);
        res.send(result);
      }
    });
});

router.post("/main2", async (req, res, next) => {
  request(
    "https://api.nasa.gov/planetary/apod?api_key=SzVivPLHN7PCYZKtD3PupYZWeKPGTVS0Tx9F2VNh",
    {json: true},
    (nasaErr, nasaRes, nasaBody) => {
      if (nasaErr) {
        res.send(nasaErr);
      } else {
        dialogBox.dialogBox.title = "Bir hata oluştu";
        dialogBox.dialogBox.description = "Hata description, showDialog flag'ine göre response body içinde hata mesajı gönderilir.";
        dialogBox.dialogBox.isCancelable = req.body.isCancelable;
        const result = req.body.showDialog ? Object.assign(nasaBody, dialogBox) : nasaBody;
        console.log(result);
        res.send(result);
      }
    });
});

router.post("/main3", async (req, res, next) => {
  res.json({
    "emre": "sadsad"
  })
});

module.exports = router;
// module.exports.indexFunc = indexFunc;
