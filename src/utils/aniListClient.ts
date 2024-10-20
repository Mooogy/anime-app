import { GraphQLClient } from "graphql-request";

const endpoint = "https://graphql.anilist.co";

export const anilistClient = new GraphQLClient(endpoint, {
  headers: {
    "Content-Type": "application/json",
  },
});
