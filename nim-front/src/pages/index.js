import Image from "next/image";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
// import WelcomeSVG from '/public/assets/svg/welcome.svg';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { push } = useRouter();

  return (
    <main>
      {/* <WelcomeSVG /> */}
      <div className="space-y-10 flex-col font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 items-end bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="relative flex place-items-center">
            <Image
              className="relative"
              src="/assets/svg/welcome.svg"
              alt="Welcome Text"
              width={400}
              height={37}
              priority
            />
          </div>
        </div>
        <div className="relative flex place-items-center">
          <Image
            className="relative"
            src="/assets/svg/home-inform-button.svg"
            alt="Informing Text"
            width={360}
            height={37}
            priority
          />
        </div>

        <a
          onClick={() => push("/character")}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
        >
          <Image
            className="relative rounded-xl border border-transparent transition-colors hover:scale-105"
            src="/assets/svg/button-start.svg"
            alt="Start Button"
            width={200}
            height={37}
            priority
          />
        </a>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors "
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            UNIS mini project&nbsp;by NIM
          </p>
        </a>
      </div>
    </main>
  );
}
