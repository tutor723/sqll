const Book = require("../books/model");
const Genre = require("./model");

//add genre
const addGenre = async (req, res) => {
  try {
    const genre = await Genre.create({
      genreName: req.body.genreName,
    });
    res.status(201).json({ message: "success", newGenre: genre });
  } catch (error) {
    console.log(error);
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

//get a book by genre
const getGenreAndBooks = async (req, res) => {
  try {
    const genre = await Genre.findOne({
      where: {
        genreName: req.body.genre,
      },
      include: Book,
    });
    res.status(200).json({ message: "Success", genre: genre });
  } catch {
    console.log(error);
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

module.exports = {
  addGenre,
  getGenreAndBooks,
};
