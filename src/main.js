const express = require("express");

const bookRouter = require("./app/book/book.route.js");
const connectDB = require("./common/db/mongoose.js");
const authorRouter = require("./app/author/author.route.js");
const logRouter = require("./app/log/log.route.js");

const app = express();
connectDB();

app.use(express.json());

// routes
app.use("/collection/books", bookRouter);
app.use("/collection/authors", authorRouter);
app.use("/collection/logs", logRouter);

app.use((err, req, res, next) => {
  res.json({
    message: err.message,
    success: false,
    stack: err.stack,
  });
});

app.listen(3000, () => console.log("server is running on port 3000"));
