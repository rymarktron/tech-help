//from: https://harishgarg.com/writing/build-a-serverless-gpt-3-react-app/
//API End point

const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);

export default async (req, res) => {
  let prompt = `Artist: ${req.body.name}\n\nLyrics:\n`;
  const gptResponse = await openai.complete({
    engine: 'davinci',
    prompt: prompt,
    maxTokens: 50,
    temperature: 0.7,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0.5,
    bestOf: 1,
    n: 1
});
  
  res.status(200).json({text: `${gptResponse.data.choices[0].text}`})
}