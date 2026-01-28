const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/health", (req, res) => {
  res.send("Server says heyyy :)");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
