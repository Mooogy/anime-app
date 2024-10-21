import AniList from "./AniList";

const AnimeSearch = () => {
  return (
    <div className="bg-foreground border-t-2 border-black h-screen flex justify-center items-center">
      <div className=" h-full w-2/3 flex flex-col gap-[1vh]">
        <div className=" w-full h-[15%]"></div>
        <div className="w-full h-[85%] flex flex-col gap-[3vh]">
          <AniList></AniList>
          <AniList></AniList>
        </div>
      </div>
    </div>
  );
};

export default AnimeSearch;
