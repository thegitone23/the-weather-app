const express = require("express");
const cors = require("cors");
const apiV1Router = require("./routes/api-v1");

const app = express();
const port = process.env.PORT || 4420;

app.use(cors());
app.use("/api/v1", apiV1Router);

app.get("/", (_req, res) => {
  res.json({
    type: "success",
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
