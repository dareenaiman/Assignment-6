const { Schema, model } = require("mongoose");

const bookSchema = new Schema({
  title: {
    type: String,
    required: [true, "title is required"],
    trim: true,
    minLength: [1, "title cant be empty"],
  },
  author:String,year:Number,genres:[String]
},

  {timestamps: true,
});

const Book = model("Book", bookSchema);

module.exports = Book;
