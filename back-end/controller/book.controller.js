import Book from "../models/book.model.js";



export const getallbook = async (req, res) => {
  try {
    const books = await Book.find();
    if (!books.length) {
      return res.status(404).json({ message: "No books found" });
    }
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};


export const bookbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
    
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};


export const createbook = async (req, res) => {
  try {
    const {
      title, author, year, Images,description, price, quantity,category, rating} = req.body;

    const book = new Book({
      title, author, year, Images,description, price, quantity,category, rating});

    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

export const deletebook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted" });

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};


export const updatebook = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title, author, year, Images,description, price, quantity,category, rating} = req.body;

    const book = await Book.findByIdAndUpdate(
      id,
      {
        title, author, year, Images,description, price, quantity,category, rating},
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);

  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
