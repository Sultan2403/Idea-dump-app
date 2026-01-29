const express = require("express");
const router = express.Router();

const {
  getAllIdeas,
  addNewIdea,
  addNewIdeas,
  updateIdea,
  deleteAnIdea,
} = require("../Controllers/ideasControllers");

router.get("/", getAllIdeas);
router.post("/", addNewIdea);
router.post("/bulk", addNewIdeas);
router.put("/:id", updateIdea);
router.delete("/:id", deleteAnIdea)

module.exports = router;
