import Image from "next/image";

export default function AboutMe() {
  return (
    <div className=" flex flex-col justify-center h-screen items-center">
      <div className="w-100 px-10">
        <Image
          src="https://media.discordapp.net/attachments/754934235051196516/1541331006395777024/image0.jpg?ex=6a8d33dc&is=6a8be25c&hm=3a9dd61ca0a413038a9eebe19f12147ebbd804af709a0dc2571b69252aa7d80e&=&format=webp&width=816&height=1024"
          alt="image of me"
          width={816}
          height={1024}
          sizes="33vw"
        />
        <h1 className="text-3xl text-center mt-15 font-bold">about me nya belom jadi ...</h1>
      </div>
    </div>
  );
}
