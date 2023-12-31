const { Router } = require("express");

const genreRouter = Router();

const { addGenre, getGenreAndBooks } = require("./controllers");

genreRouter.post("/genre/addGenre", addGenre);
genreRouter.get("/genre/getGenreAndBooks", getGenreAndBooks);

module.exports = genreRouter;
