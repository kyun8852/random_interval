var express = require("express");
const cors = require("cors");
const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));
app.listen(process.env.PORT || 5020);

app.get("/", (req, res) => {
  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }
  let date_ob = new Date();

  let date = ("0" + date_ob.getDate()).slice(-2);

  let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

  let year = date_ob.getFullYear();

  let hours = date_ob.getHours();

  let minutes = date_ob.getMinutes();

  let seconds = date_ob.getSeconds();

  res.send([
    {
      Date: year + "-" + month + "-" + date,
      Time: hours + ":" + minutes + ":" + seconds,
      ID1_Load_VOL: randomNumber(400, 450).toFixed(0),
      ID1_MCU_Temp: randomNumber(22, 23).toFixed(1),
      ID1_RSSI: randomNumber(45, 50).toFixed(0),
      ID2_Load_VOL: randomNumber(550, 600).toFixed(0),
      ID2_MCU_Temp: randomNumber(24, 25).toFixed(1),
      ID3_Load_VOL: randomNumber(500, 520).toFixed(0),
      ID3_MCU_Temp: randomNumber(23, 25).toFixed(1),
      weather_hazard: randomNumber(1, 2).toFixed(0),
      Risk_of_collision: randomNumber(8, 10).toFixed(0),
    },
  ]);
});
