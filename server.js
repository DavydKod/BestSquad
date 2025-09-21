const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Hello, Military Tests!");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/*
mongoose.connect("mongodb://127.0.0.1:27017/military-tests", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error("MongoDB connection error:", err));
*/
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
