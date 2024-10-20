const NavBar = () => {
  return (
    <div className="bg-blue-dark w-full h-[7.5%] sticky flex justify-center text-white select-none">
      <div className="w-7/12 h-full flex justify-between px-[2vw]">
        <div className="flex items-center">
          <span className="font-braah tracking-tighter text-[2vw] cursor-pointer">
            AN
          </span>
        </div>
        <div className="flex w-1/3 justify-center gap-[3vw] items-center text-[#D3D3D3]">
          <span className="cursor-pointer hover:text-white transition-colors ease-in-out duration-150">
            Search
          </span>
          <span className="cursor-pointer hover:text-white transition-colors ease-in-out duration-150">
            Anime
          </span>
          <span className="cursor-pointer hover:text-white transition-colors ease-in-out duration-150">
            Manga
          </span>
        </div>
        <div className="flex items-center gap-[2vw] text-[#D3D3D3] text-[0.8vw]">
          <span className="cursor-pointer hover:text-white transition-colors ease-in-out duration-150">
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
