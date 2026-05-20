const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    articleId: { type: String, unique: true, trim: true },
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    title: { type: String, required: true, trim: true },
    content: {
      type: [String],
      required: true,
      validate: {
        validator: (paragraphs) =>
          Array.isArray(paragraphs) && paragraphs.length > 0,
        message: "Article content must include at least one paragraph",
      },
    },
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

module.exports =
  mongoose.models.Article || mongoose.model("Article", articleSchema);
