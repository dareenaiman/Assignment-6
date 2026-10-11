const { Router } = require("express");
const authorController = require("./author.controller.js");
const authorRouter = Router();

authorRouter.post("/", authorController.createAuthor);

module.exports = authorRouter;
