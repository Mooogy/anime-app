const Landing = () => {
  return (
    <div className="w-full h-[80%] flex justify-center  text-white select-none">
      <div className="w-7/12 flex justify-center px-[0.5vw] ">
        <div className="bg-blue-dark w-full h-4/5 mt-[4.5%] rounded-[1vw] drop-shadow-xl flex justify-start items-center flex-col py-[6vh]">
          <span className="font-bold text-[2vw] mb-[1vw]">
            A brand new anime experience
          </span>
          <span className="text-[1vw] text-[#D3D3D3]">
            Binge-worthy series at your fingertips with AniNext,
          </span>
          <span className="text-[1vw] text-[#D3D3D3]">
            explore all your favorites with ease.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Landing;
