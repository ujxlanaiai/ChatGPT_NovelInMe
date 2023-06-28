import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

export default function StoryResultPage() {
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
          alt="Story Text"
          width={240}
          height={37}
          priority
        />
        <div className="flex justify-center items-center space-x-20">
          <div className="space-y-10 text-center">
            <div className="border rounded-lg px-96 py-40">story</div>
            <div className="grid grid-cols-3">
              <Image
                className="col-start-2 justify-self-center"
                src="/assets/img/astronaut-dab.png"
                alt="Dabbing Astronaut"
                width={120}
                height={37}
                priority
              />
              <a
                className="my-auto grid place-self-end"
                onClick={() => push("/story/ending")}
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
      </div>
    </>
  );
}
