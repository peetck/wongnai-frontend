const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

const tripsRoutes = require("./routes/trips");

app.use(helmet());

app.use(express.json());

// enable all cors requests
app.use(cors());

app.use("/api", tripsRoutes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
