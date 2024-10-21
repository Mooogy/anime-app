import React from "react";
import AniCard from "./AniCard";
import { Anime } from "@/utils/fetchAniListData";

interface AniListProps {
  animeList: Anime[];
  title: string;
}

const AniList: React.FC<AniListProps> = ({ animeList, title }) => {
  return (
    <div className=" w-full h-[40%] flex flex-col gap-[0.5vh]">
      <div className="w-full h-[10%] flex justify-between">
        <span className="select-none cursor-pointer text-gray-dark hover:text-black">
          {title}
        </span>
        <span className="select-none cursor-pointer text-gray-dark hover:text-black">
          View All
        </span>
      </div>
      <div className="w-full h-[90%] grid grid-cols-6 gap-[2vw]">
        {animeList.map((anime) => (
          <AniCard anime={anime} key={anime.id}></AniCard>
        ))}
      </div>
    </div>
  );
};

export default AniList;
