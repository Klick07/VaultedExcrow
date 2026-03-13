const groqProvider = require("../providers/groq.provider");

exports.askAI = async (prompt) => {

  const messages = [
    {
      role: "user",
      content: prompt
    }
  ];

  return await groqProvider.generate(messages);
};