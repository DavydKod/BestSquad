const Test = require("../models/testModel");

// створити тест
exports.createTest = async (req, res) => {
  try {
    const { title, section, questions } = req.body;

    if (
      !title ||
      !questions ||
      !Array.isArray(questions) ||
      questions.length === 0
    ) {
      return res
        .status(400)
        .json({ error: "Title and questions are required" });
    }

    const newTest = new Test({ title, section, questions });
    await newTest.save();

    res.status(201).json({ message: "Test created", test: newTest });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// отримати всі тести (без правильних відповідей якщо хочеш)
exports.getAllTests = async (req, res) => {
  try {
    // Якщо ти хочеш не віддавати correctAnswer клієнту при отриманні тесту для проходження:
    // використовуй projection, або видаляй поля на лету.
    const tests = await Test.find().select("-questions.correctAnswer"); // приклад: сховати correctAnswer
    res.json(tests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// отримати тест по id (наприклад, для проходження)
exports.getTestById = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) return res.status(404).json({ error: "Test not found" });

    // Якщо повертаєш для проходження — не віддавай correctAnswer
    const testForUser = test.toObject();
    testForUser.questions = testForUser.questions.map((q) => {
      const { correctAnswer, ...rest } = q;
      return rest;
    });

    res.json(testForUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
