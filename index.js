var express = require("express");
const cors = require("cors");
const app = express();
var moment = require("moment");

require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

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
    Date: moment().format("YYYY-MM-DD"),
    Time: moment().format("HH:mm:ss"),
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
