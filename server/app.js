const express = require("express");
const dbConnection = require("./dbConnection");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/AuthenticationUser");
const itemRoutes = require("./routes/itemRoutes");
const PORT = 4000;
const app = express();
dbConnection();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/user", userRoute);
app.use("/items", itemRoutes);
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running in ${PORT}`);
  } else console.log(err);
});