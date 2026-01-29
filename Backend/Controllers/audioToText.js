const convertAudioToText = async (req, res) => {
  try {
    const { audioStream } = req.body;
    const parsedAudio = null; // This is supposd to be the data coming from the third party that parses audio into a format that wispr flow can use. Check out https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Recording_API or https://github.com/keithwhor/wavtools

    const wisprFlowRes = await axios.post(
      "https://platform-api.wisprflow.ai/api/v1/dash/api",
      req.body,
      {
        headers: {
          Authorization: `Bearer ${process.env.WISPR_FLOW_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );
    res.json({ res: wisprFlowRes });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "An error occured", error: error.message });
  }
};

module.exports = convertAudioToText;
