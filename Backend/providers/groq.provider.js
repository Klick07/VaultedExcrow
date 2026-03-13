const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});

exports.generate = async (messages) => {

  const completion = await client.chat.completions.create({
    model: "llama3-8b-8192",
    messages: messages
  });

  return completion.choices[0].message.content;
};