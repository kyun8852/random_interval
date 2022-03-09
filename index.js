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

  const ID1_Load_Vol = randomNumber(400, 450).toFixed(0);
  const ID2_Load_Vol = randomNumber(550, 600).toFixed(0);
  const ID3_Load_Vol = randomNumber(500, 520).toFixed(0);

  const ID1_MCU_Temp = randomNumber(22, 23).toFixed(1);
  const ID2_MCU_Temp = randomNumber(24, 25).toFixed(1);
  const ID3_MCU_Temp = randomNumber(23, 25).toFixed(1);

  const ID1_RSSI = randomNumber(45, 50).toFixed(0);
  const ID2_RSSI = randomNumber(50, 60).toFixed(0);
  const ID3_RSSI = randomNumber(45, 60).toFixed(0);

  const AVG_Load_VOL =
    (parseInt(ID1_Load_Vol) + parseInt(ID2_Load_Vol) + parseInt(ID3_Load_Vol)) /
    3;
  const AVG_MCU_Temp =
    (parseInt(ID1_MCU_Temp) + parseInt(ID2_MCU_Temp) + parseInt(ID3_MCU_Temp)) /
    3;
  const AVG_RSSI =
    (parseInt(ID1_RSSI) + parseInt(ID2_RSSI) + parseInt(ID3_RSSI)) / 3;

  const firstORD = {
    Date: year + "-" + month + "-" + date,
    Time: hours + 9 + ":" + minutes + ":" + seconds,
    ID1_Load_VOL: ID1_Load_Vol,
    ID1_MCU_Temp: ID1_MCU_Temp,
    ID1_RSSI: ID1_RSSI,

    ID2_Load_VOL: ID2_Load_Vol,
    ID2_MCU_Temp: ID2_MCU_Temp,
    ID2_RSSI: ID2_RSSI,

    ID3_Load_VOL: ID3_Load_Vol,
    ID3_MCU_Temp: ID3_MCU_Temp,
    ID3_RSSI: ID3_RSSI,

    weather_hazard: randomNumber(1, 2).toFixed(0),
    Risk_of_collision: randomNumber(8, 10).toFixed(0),

    AVG_Load_VOL: AVG_Load_VOL.toFixed(0),
    AVG_MCU_Temp: AVG_MCU_Temp.toFixed(0),
    AVG_RSSI: AVG_RSSI.toFixed(0),
  };

  res.send([firstORD]);
});
