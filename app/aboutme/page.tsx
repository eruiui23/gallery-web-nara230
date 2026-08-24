import Image from "next/image";
import Link from "next/link";

export default function AboutMe() {
  return (
    <div className=" flex flex-col justify-center h-screen items-center">
      <div className="w-125 px-10">
        <Image
          src="https://media.discordapp.net/attachments/754934235051196516/1541331006395777024/image0.jpg?ex=6a8d33dc&is=6a8be25c&hm=3a9dd61ca0a413038a9eebe19f12147ebbd804af709a0dc2571b69252aa7d80e&=&format=webp&width=816&height=1024"
          alt="image of me"
          width={816}
          height={1024}
          sizes="33vw"
        />
        <h1 className="text-3xl text-center mt-15 font-bold text-nowrap">
          about me nya belom jadi ...
        </h1>
        <p className="text-center mt-5">
          btw kalo mau takedown foto dm ig @reynr aja y :D
        </p>
        <div className="flex justify-center mt-5">
          <Link
            href="https://github.com/eruiui23"
            className="inline text-lg text-center mx-auto p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi inline bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
            <span className="ml-3 underline">Github</span>
          </Link>

        </div>
      </div>
    </div>
  );
}
