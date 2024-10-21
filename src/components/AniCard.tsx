import Image from "next/image";
import { Anime } from "@/utils/fetchAniListData";

interface AniCardProps {
  anime: Anime;
}

const AniCard: React.FC<AniCardProps> = ({ anime }) => {
  return (
    <div className="h-full flex-col flex gap-[1vh]">
      <div className="overflow-hidden h-full hover:opacity-90 duration-300 transition-opacity ease-in-out relative drop-shadow-lg rounded-xl hover:cursor-pointer ">
        <Image
          src={anime.coverImage.large}
          alt="Anime"
          fill
          className="object-cover"
        />
      </div>
      <span className="text-gray-dark h-[10%] hover:text-black select-none cursor-pointer">
        {anime.title.romaji}
      </span>
    </div>
  );
};

export default AniCard;
