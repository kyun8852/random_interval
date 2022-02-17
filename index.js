var express = require("express");
const app = express();

app.listen(process.env.PORT || 5020);

console.log("5020번 에서 작동중");

app.get("/", (req, res) => {
  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  var words = ["위험", "경고", "주의", "정상"];
  var word = words[Math.floor(Math.random() * words.length)];
  var eng = ["Very high", "High", "Medium", "Low", "Very Low"];
  var engDanger = eng[Math.floor(Math.random() * eng.length)];
  res.send([
    {
      "1부터100": randomNumber(1, 100).toFixed(1),
      "1부터10": randomNumber(1, 10).toFixed(1),
      "1부터20": randomNumber(1, 20).toFixed(1),
      "1부터40": randomNumber(1, 40).toFixed(1),
      "1부터20": randomNumber(1, 20).toFixed(1),
      "1부터30": randomNumber(1, 30).toFixed(1),
    },
    {
      "km/hr": randomNumber(1, 100).toFixed(1),
      dbm: randomNumber(1, 20).toFixed(1),
      Knot: randomNumber(1, 40).toFixed(1),
      cm: randomNumber(1, 20).toFixed(1),
      warning: word,
      warning_2: engDanger,
    },
  ]);
});
