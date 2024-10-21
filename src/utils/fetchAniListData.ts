export interface Anime {
  id: number;
  title: {
    romaji: string;
  };
  coverImage: {
    large: string;
  };
  episodes: number;
}

interface TrendingAnimeResponse {
  Page: {
    media: Anime[];
  };
}

const fetchAniListData = async (
  query: string
): Promise<TrendingAnimeResponse> => {
  const res = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 },
  });

  console.log(
    "Response Headers: Requests remaining:",
    res.headers.get("x-ratelimit-remaining"),
    " Timestamp",
    res.headers.get("date")
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data from AniList API");
  }

  const data = await res.json();
  return data.data;
};

export const getTrendingAnime = async (): Promise<Anime[]> => {
  const trendingQuery = `
    query {
      Page(page: 1, perPage: 6) {
        media(sort: TRENDING_DESC, type: ANIME) {
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
  `;

  const result = await fetchAniListData(trendingQuery);
  return result.Page.media;
};

export const getSeasonalAnime = async (): Promise<Anime[]> => {
  const trendingQuery = `
    query {
      Page(page: 1, perPage: 6) {
        media(sort: TRENDING_DESC, type: ANIME, season: FALL, seasonYear: 2024) {
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
  `;

  const result = await fetchAniListData(trendingQuery);
  return result.Page.media;
};
