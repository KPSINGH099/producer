const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Producer = require("./producer");
//instaciate new object of that class 

const producer = new Producer();

//hum apne post req me json body le rhe h 
app.use(bodyParser.json("application/json"));

//// note humara publishmessage async function h isliye humne apne post endpoint k callback me async use kiya h kyki is function ko await krk call krenge 
app.post("/sendLog", async (req, res, next) => {
////note hum routing key as logtype le rhe h aur mesaasge as message
//1st parameter was routing key , 2nd message
  await producer.publishMessage(req.body.logType, req.body.message);
  res.send();
});

app.listen(3000, () => {
  console.log("Server started...");
});