import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUserById($userId: ID!) {
    user {
      id
      purchases {
        id
        price
      }
    }
  }
`;
