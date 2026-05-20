const Article = require("../models/Article");

const getArticles = async (req, res) => {
  try {
    const articles = await Article.find().sort({ createdAt: -1 });
    res.json({ articles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getArticleByName = async (req, res) => {
  try {
    const article = await Article.findOne({
      name: req.params.name.toLowerCase(),
    });

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json({ article });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const generateArticleId = async () => {
  const lastArticle = await Article.findOne({
    articleId: { $regex: /^ART-\d+$/ },
  }).sort({ createdAt: -1 });

  let nextNumber = 1;

  if (lastArticle?.articleId) {
    const lastNumber = Number(lastArticle.articleId.replace("ART-", ""));

    if (!Number.isNaN(lastNumber)) {
      nextNumber = lastNumber + 1;
    }
  }

  let articleId = `ART-${String(nextNumber).padStart(4, "0")}`;

  let existingArticle = await Article.findOne({ articleId });

  while (existingArticle) {
    nextNumber += 1;
    articleId = `ART-${String(nextNumber).padStart(4, "0")}`;
    existingArticle = await Article.findOne({ articleId });
  }

  return articleId;
};

const createArticle = async (req, res) => {
  try {
    const articleId = await generateArticleId();

    const article = await Article.create({
      ...req.body,
      articleId,
    });

    res.status(201).json({ article });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json({ article });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);

    if (!article) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json({ message: "Article deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getArticles, getArticleByName, createArticle, updateArticle, deleteArticle, };
