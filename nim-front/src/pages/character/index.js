import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";

export default function Character() {
  const { push } = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make a GET request to the API route
      const response = await axios.get("/api/selectChar");
      // Handle the response or perform any necessary actions
      console.log(response.data);
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error(error);
    }
  };

  return (
    <>
      <title>Character</title>
      <div className="flex min-h-screen flex-col items-center space-y-20">
        <Image
          className="relative"
          src="/assets/svg/text-character.svg"
          alt="Character Text"
          width={240}
          height={37}
          priority
        />

        <div className="border rounded-lg">
          {/*  <Image
            className="relative"
            src="/assets/svg/default-box.svg"
            alt="Box"
            width={1000}
            height={37}
          /> */}

          <form
            className="flex py-10"
            // action="/character"
            // method="get"
            onSubmit={handleSubmit}
          >
            <div className="border-r flex-col items-center px-40 space-y-1.5">
              <Image
                className="relative"
                src="/assets/img/character1.png"
                alt="char1"
                width={160}
                height={50}
              />
              <input
                onClick={() => push("/character/set?option=makeOwn")}
                className="bg-violet-100 rounded-lg font-bold text-violet-700 px-5"
                type="submit"
                value={`MAKE OWN\nCHARACTER`}
              />
            </div>
            <div className="px-40 flex-col items-center space-y-1.5">
              <Image
                className="relative mx-auto justify-center"
                src="/assets/img/character2.png"
                alt="char2"
                width={160}
                height={50}
              />
              <input
                onClick={() => push("/character/set?option=useOriginal")}
                className="bg-violet-100 rounded-lg font-bold text-violet-700 px-5"
                type="submit"
                value={`USE ORIGINAL\nCHARACTER`}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
