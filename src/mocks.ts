import { GET_USER } from "./queries";
import { SUBSCRIBE_TO_PURCHASE_UPDATES } from "./subscriptions";
export const mockUserId = "abc-123";
export const subscribetoUserMock = {
  success: {
    mock: {
      request: {
        query: SUBSCRIBE_TO_PURCHASE_UPDATES,
        variables: {
          userId: mockUserId,
        },
      },
      result: {
        data: {
          purchase: {
            id: "pur-1",
          },
        },
      },
    },
  },
};

export const getUserMock = {
  success: {
    mock: {
      request: {
        query: GET_USER,
        variables: {
          userId: mockUserId,
        },
      },
      result: {
        data: {
          user: {
            userId: mockUserId,
            purchases: [
              {
                id: "pur-1",
                price: 1,
              },
            ],
          },
        },
      },
    },
  },
};
