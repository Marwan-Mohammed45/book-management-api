import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  year: { type: Number },
  Images: [{ type: String }],
  description: { type: String },
  price: { type: Number },
  quantity: { type: Number },
  category: { type: String },
  rating: { type: Number }
});

const Book = mongoose.model("Book",bookSchema);
export default Book;
