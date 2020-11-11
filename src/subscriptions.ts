import { gql } from "@apollo/client";

export const SUBSCRIBE_TO_PURCHASE_UPDATES = gql`
  subscription updatedPurchases($userId: ID!) {
    updatedPurchase(userId: $userId) {
      purchase {
        id
      }
    }
  }
`;
