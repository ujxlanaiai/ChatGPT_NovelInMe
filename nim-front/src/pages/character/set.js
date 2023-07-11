// pages/character/mbti.js
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

export default function CharacterSet() {
  const { push } = useRouter();
  const router = useRouter();
  const { option } = router.query;

  const [nameValue, setNameValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [nationValue, setNationValue] = useState("");
  const [appearanceValue, setAppearanceValue] = useState("");
  const [featuresValue, setFeaturesValue] = useState("");

  const [result, setResult] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/setChar", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: nameValue,
          gender: genderValue,
          age: ageValue,
          nation: nationValue,
          appearance: appearanceValue,
          features: featuresValue,
        }),
      });
      const data = await response.json();
      console.log(data);
      setResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  return option === "makeOwn" ? (
    <>
      <div className="pt-10 pb-5 border rounded-lg flex-col items-center space-y-10">
        <Image
          className="mx-auto"
          src="/assets/svg/text-character.svg"
          alt="Character Text"
          width={240}
          height={37}
          priority
        />
        <div className="flex justify-center items-center ">
          <div className="space-y-2 mx-20 text-center">
            <Image
              src="/assets/svg/picture-rect.svg"
              alt="Character Text"
              width={240}
              height={37}
              priority
            />
            <p>change picture</p>
          </div>
          <div className="px-20 border-l flex flex-col justify-center items-start">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center space-y-4"
            >
              <label className="flex-col font-bold" for="name">
                <p>NAME</p>
                <input
                  value={nameValue}
                  onChange={(e) => setNameValue(e.target.value)}
                  placeholder="인물의 이름"
                  className="py-1 px-2"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </label>

              <label className="flex-col font-bold" for="gender">
                <p className="font-bold">GENDER</p>
                <div className="flex space-x-4">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={genderValue === "female"}
                    onChange={(e) => setGenderValue(e.target.value)}
                  />
                  <label htmlFor="female">Female</label>
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={genderValue === "male"}
                    onChange={(e) => setGenderValue(e.target.value)}
                  />
                  <label htmlFor="male">Male</label>
                </div>
              </label>

              <label className="flex-col font-bold" for="age">
                <p>AGE</p>
                <input
                  value={ageValue}
                  onChange={(e) => setAgeValue(e.target.value)}
                  className="py-1 px-2"
                  type="number"
                  id="age"
                  name="age"
                  required
                />
              </label>

              <label className="flex-col font-bold" for="nation">
                <p>NATION</p>
                <input
                  value={nationValue}
                  onChange={(e) => setNationValue(e.target.value)}
                  className="py-1 px-2"
                  type="text"
                  id="nation"
                  name="nation"
                  required
                />
              </label>

              <label className="flex-col font-bold" for="appearance">
                <p>APPEARANCE</p>
                <input
                  value={appearanceValue}
                  onChange={(e) => setAppearanceValue(e.target.value)}
                  className="py-1 px-2"
                  type="text"
                  id="appearance"
                  name="appearance"
                  required
                />
              </label>

              <label className="flex-col font-bold" for="features">
                <p>FEATURES</p>
                <input
                  value={featuresValue}
                  onChange={(e) => setFeaturesValue(e.target.value)}
                  className="py-1 px-2"
                  type="text"
                  id="features"
                  name="features"
                  required
                />
              </label>

              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-primary text-black font-medium shadow-md hover:bg-violet-700 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                결과 보기
              </button>
              <a
                className="flex justify-end mt-4"
                onClick={() => push("/story")}
                target="_blank"
                rel="noopener noreferrer"
                style={{ cursor: "pointer" }}
              >
                <Image
                  className="hover:scale-105"
                  src="/assets/img/button-next.png"
                  alt="Next Button"
                  width={120}
                  height={37}
                  priority
                />
              </a>
            </form>

            {result && (
              <div className="flex flex-col items-center mt-8">
                <p className="text-xl">{result.story}</p>
                {/* <div className="flex space-x-2 mt-2">
            <span role="img" aria-label="heart" className="text-2xl">
              {result.emoji}
            </span>
          </div>
          <p className="text-lg font-medium mt-4">
            오늘의 운세: {result.fortune}
          </p> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <p>기존 캐릭터 선택</p>
    </>
  );
}
