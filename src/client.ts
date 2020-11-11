import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: createHttpLink({
    uri: "example.com",
    credentials: "same-origin",
  }),
});
