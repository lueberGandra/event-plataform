import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-us-west-2.graphcms.com/v2/cl4ofnhri04jx01w75lve5m88/master',
  cache: new InMemoryCache()
})