import { getTrendingAnime, getSeasonalAnime } from "@/utils/fetchAniListData";
import AniList from "./AniList";

const AnimeSearch = async () => {
  const trendingAnime = await getTrendingAnime();
  const seasonalAnime = await getSeasonalAnime();

  return (
    <div className="bg-foreground  h-screen flex justify-center items-center">
      <div className=" h-full w-2/3 flex flex-col gap-[1vh]">
        <div className=" w-full h-[15%]"></div>
        <div className="w-full h-[85%] flex flex-col gap-[3vh]">
          <AniList animeList={trendingAnime} title="TRENDING NOW"></AniList>
          <AniList animeList={seasonalAnime} title="SEASONAL ANIME"></AniList>
        </div>
      </div>
    </div>
  );
};

export default AnimeSearch;
