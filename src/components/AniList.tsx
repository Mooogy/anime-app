import AniCard from "./AniCard";

const AniList = () => {
  return (
    <div className=" w-full h-[35%] flex flex-col gap-[0.5vh]">
      <div className="w-full h-[10%] flex justify-between">
        <span>TRENDING NOW</span>
        <span>View All</span>
      </div>
      <div className="w-full h-[90%] gap-[1vw] flex justify-between">
        <AniCard></AniCard>
        <AniCard></AniCard>
        <AniCard></AniCard>
        <AniCard></AniCard>
        <AniCard></AniCard>
        <AniCard></AniCard>
      </div>
    </div>
  );
};

export default AniList;
