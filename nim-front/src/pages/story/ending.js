import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

export default function EndingPage() {
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
      <div className="pt-10 pb-5 flex-col items-center space-y-10">
        <Image
          className="mx-auto"
          src="/assets/svg/text-ending.svg"
          alt="Ending Text"
          width={240}
          height={37}
          priority
        />
        <div className="flex justify-center items-center px-80 py-56 border rounded-lg ">
          <div className="space-y-2 mx-20 text-center">Ending</div>
          <div>{/* <input type="submit" value="Submit" /> */}</div>
        </div>
      </div>
    </>
  );
}
