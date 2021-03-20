const express = require("express");
const helmet = require("helmet");

const app = express();

const tripsRoutes = require("./routes/trips");

app.use(helmet());

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", tripsRoutes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
