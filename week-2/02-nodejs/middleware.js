const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());
app.post("/health-checkup", function (req, res) {
  const kidneys = req.body.kidneys;
  const response = schema.safeParse(kidneys);
  // const length = kidneys.length;
  // res.send("you have" + kidneys + " kidneys");
  res.send(response);
});

// app.get("/health-checkup", function (req, res) {
//   const username = req.headers.username;
//   const password = req.headers.password;
//   const kidneyId = req.query.kidneyId;

//   if (username != "harkirat" || password != "pass") {
//     res.status(400).json({ msg: "Somethings up with your ionputs" });
//     return;
//   }

//   if (kidneyId != 1 && kidneyId != 2) {
//     res.status(400).json({ msg: "Somethings up with your ionputs" });
//     return;
//   }
//   // do something with kidney here
//   res.json({
//     msg: "Your kidney is fine!",
//   });
// });

app.listen(3000, () => {
  console.log("server started");
});
