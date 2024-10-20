import AnimeSearch from "@/components/AnimeSearch";
import Landing from "@/components/Landing";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="snap-y snap-proximity h-screen w-screen overflow-x-hidden font-overpass bg-foreground">
      <NavBar></NavBar>
      <Landing></Landing>
      <div className="snap-start">
        <AnimeSearch></AnimeSearch>
      </div>
    </div>
  );
}
