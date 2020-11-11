import { useLazyQuery, useSubscription } from "@apollo/client";
import React from "react";
import { GET_USER } from "./queries";
import { SUBSCRIBE_TO_PURCHASE_UPDATES } from "./subscriptions";

type Purchase = { id: string; price: number };
type User = { id: string; purchases: Purchase[] };
type TheComponentProps = { user: User };

export const TheComponent = ({ user }: TheComponentProps) => {
  const userId = user.id;
  const [getUser, { data: latestUserData }] = useLazyQuery<{ user: User }>(
    GET_USER,
    {
      variables: { userId },
      fetchPolicy: "network-only",
    }
  );

  const latestPurchases = latestUserData?.user.purchases || user.purchases;

  const total = React.useMemo(() => {
    return latestPurchases
      .map((p) => p.price)
      .reduce((runningTotal, price) => runningTotal + price, 0);
  }, [latestPurchases]);

  useSubscription(SUBSCRIBE_TO_PURCHASE_UPDATES, {
    variables: { userId },
    onSubscriptionData: () => {
      getUser();
    },
  });
  console.log("render");
  console.log(latestPurchases);
  return <pre>total: ${total}</pre>;
};
