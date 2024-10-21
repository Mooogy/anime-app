async function getTrendingAnime() {
  const trendingAnime = await fetch("https://graphql.anilist.co", {
    next: { revalidate: 10 },
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          Page(page: 1, perPage: 7) {
            media(type: ANIME, sort: TRENDING_DESC) {
              id
              title {
                romaji
              }
              coverImage {
                large
              }
              episodes
            }
          }
        }
      `,
    }),
  });
  const data = await trendingAnime.json();
  const animeList = data.data.Page.media;
  console.log(
    "Response Headers:",
    trendingAnime.headers.get("x-ratelimit-remaining"),
    " Timestamp",
    trendingAnime.headers.get("date")
  );

  return animeList;
}

interface anime {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };
  episodes: number;
}

const page = async () => {
  let animeList = null;
  animeList = await getTrendingAnime();

  if (animeList === null) return <span>INFORMATION NOT LOADED</span>;

  return (
    <div className="flex flex-col">
      {animeList.map((anime: anime) => (
        <span key={anime.id}>{anime.title.romaji}</span>
      ))}
    </div>
  );
};

export default page;
