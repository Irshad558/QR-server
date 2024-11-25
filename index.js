const express = require("express");
const qr = require("qr-image");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://qr-client-omgs.onrender.com/",
  })
);
app.use(express.json());

app.post("/qr-code", (req, res) => {

  const image = qr.imageSync(req.body.url);
  
  res.set('content-type','image/png');
  res.send(image);

});

app.listen(8080);
