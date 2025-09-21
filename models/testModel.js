const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
  title: { type: String, required: true }, // назва тесту
  section: { type: String, default: "" }, // розділ/категорія
  questions: [
    {
      text: { type: String, trim: true }, // текст запитання (optional)
      imageUrl: { type: String, trim: true }, // посилання на картинку (optional)
      options: {
        type: [{ type: String, required: true }], // масив варіантів, хоча б 2
        validate: {
          validator: (v) => Array.isArray(v) && v.length >= 2,
          message: "Question must have at least 2 options",
        },
      },
      correctAnswer: {
        type: Number,
        required: true,
        validate: {
          validator: function (idx) {
            // this.options доступні в контексті документа
            return (
              Array.isArray(this.options) &&
              idx >= 0 &&
              idx < this.options.length
            );
          },
          message: "correctAnswer must be a valid index of options",
        },
      },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

// Кастомна валідація: кожне питання має або text або imageUrl
testSchema.pre("validate", function (next) {
  if (!Array.isArray(this.questions) || this.questions.length === 0) {
    return next(new Error("Test must contain at least one question"));
  }
  for (const q of this.questions) {
    if (
      (!q.text || q.text.trim() === "") &&
      (!q.imageUrl || q.imageUrl.trim() === "")
    ) {
      return next(new Error("Each question must have either text or imageUrl"));
    }
  }
  next();
});

module.exports = mongoose.model("Test", testSchema);
