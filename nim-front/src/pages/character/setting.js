import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

export default function CharacterSet() {
  const { push } = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a POST request to the backend endpoint
      const response = await axios.post("/selectChar");
      // Handle the response or perform any necessary actions
      console.log(response.data);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
  };

  return (
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
          <div>
            <div
              className="border-l px-20 flex flex-col items-center space-y-10"
              action="/character/result1"
              method="post"
            >
              <label className="flex-col font-bold" for="name">
                <p>NAME</p>
                <input
                  className="py-1 px-2"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </label>

              <label className="flex-col font-bold" for="sex">
                <p>SEX</p>
                <input
                  className="py-1 px-2"
                  type="text"
                  id="sex"
                  name="sex"
                  required
                />
              </label>

              <label className="flex-col font-bold" for="age">
                <p>AGE</p>
                <input
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
                  className="py-1 px-2"
                  type="text"
                  id="features"
                  name="features"
                  required
                />
              </label>
            </div>

            {/* <input type="submit" value="Submit" /> */}
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
          </div>
        </div>
      </div>
    </>
  );
}
