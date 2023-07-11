// pages/api/mbti.js
const { Configuration, OpenAIApi } = require("openai");

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      nameValue,
      genderValue,
      ageValue,
      nationValue,
      appearanceValue,
      featuresValue,
    } = req.body;

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    try {
      // OpenAI API를 이용하여 STORY 추출
      const prompt = `Name: ${nameValue}, Gender: ${genderValue}, Age: ${ageValue}, Nation: ${nationValue}, Appearance: ${appearanceValue}, Features: ${featuresValue}
      Write a story of a character with given Name, Gender, Age, Nation, Appearance, and Features. Provide a story in 5 sentences without any empty lines, and in JSON format only like: {"story":"in English"}`;

      const completions = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        max_tokens: 800,
      });

      console.log(completions.data);
      const originalText = completions.data.choices[0].text
        .trim()
        .replace(/\n/g, "");
      console.log(originalText);

      const story = JSON.parse(originalText);

      // 결과를 클라이언트로 반환
      res.status(200).json({ ...story });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Story 추출에 실패했습니다." });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
