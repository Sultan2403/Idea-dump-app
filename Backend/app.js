
require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors")
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // To allow frontend to make requests and shii
  }),
);
app.use(express.json());

app.get("/health", (req, res) => {
  res.send("Server says heyyy :)");
});

app.post("/translate", async (req, res) => {
  try {
    const parsedAudio =  null;

    // const wisprFlowRes = await axios.post(
    //   "https://platform-api.wisprflow.ai/api/v1/dash/api",
    //   req.body,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${process.env.WISPR_FLOW_API_KEY}`,
    //       "Content-Type": "application/json",
    //     },
    //   },
    // );
    res.send(wisprFlowRes);
  } catch (error) {
    console.error(error);

    res.send("An error occured: ", error);
  }
});

module.exports = app;
