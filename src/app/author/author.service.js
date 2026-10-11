const { ObjectId } = require("mongodb");
const authorRepository = require("./author.repository.js");

async function createAuthor(authorData) {
  authorData.name = authorData.name.trim();
  authorData.nationality = authorData.nationality.trim();
  authorData.createdAt = new Date();
  authorData.updatedAt = new Date();
  authorData.authorId = new ObjectId(authorData.authorId);

  const insertedId = await authorRepository.createAuthor(authorData);
  if (!insertedId) throw new Error("fail to create author");
  return insertedId;
}

module.exports = { createAuthor };
