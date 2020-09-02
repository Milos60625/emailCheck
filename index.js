const express = require("express");
const app = express();
const emails = require("./emails");

app.get("/", (req, res) => {
  res.send("Home route");
});
app.use("/emails", emails);
const PORT = 3000;
app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
