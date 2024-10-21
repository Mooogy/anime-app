import Image from "next/image";

const AniCard = () => {
  return (
    <div className="h-full w-[12%] flex-col flex gap-[1vh]">
      <div className="overflow-hidden h-[90%] relative drop-shadow-lg rounded-xl hover:cursor-pointer ">
        <Image
          src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx15125-2ngZyS4KrMqA.png"
          alt="Anime"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <span className="text-gray-dark">Title goes here</span>
    </div>
  );
};

export default AniCard;
