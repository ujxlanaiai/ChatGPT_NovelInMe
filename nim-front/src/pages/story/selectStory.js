import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

export default function SelectStory() {
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
      <div className="flex-col items-center space-y-10">
        <Image
          className="mx-auto"
          src="/assets/svg/text-story.svg"
          alt="Character Text"
          width={240}
          height={37}
          priority
        />
        <div className="flex justify-center items-center space-x-20">
          <form
            className="flex py-10"
            // action="/character"
            // method="get"
            onSubmit={handleSubmit}
          >
            <div className="border-r flex-col items-center text-center px-40 space-y-36">
              <Image
                className="relative mx-auto justify-center"
                src="/assets/img/storyAchar.png"
                alt="char1"
                width={60}
                height={47}
              />
              <div className="font-bold">story A</div>
              <input
                onClick={() => push("/story/result")}
                className="bg-violet-50 rounded-lg font-bold text-violet-700 py-2 px-5"
                type="submit"
                value="CHOOSE A"
              />
            </div>
            <div className="px-40 flex-col items-center text-center space-y-36">
              <Image
                className="relative mx-auto justify-center"
                src="/assets/img/storyBchar.png"
                alt="char2"
                width={42}
                height={37}
              />
              <div className="font-bold">story B</div>
              <input
                onClick={() => push("/story/result")}
                className="bg-violet-50 rounded-lg font-bold text-violet-700 py-2 px-5"
                type="submit"
                value="CHOOSE B"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
