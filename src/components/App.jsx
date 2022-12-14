import { Profile } from "./Profile/Profile";
import user from "./Profile/user.json";

import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data.json";

import { FriendList } from "./FriendsList/FriendList";
import friends from "./FriendsList/friends.json";

import { TransactionHistory } from "./TransactionHistory/TransactionsHistory";
import transactions from "./TransactionHistory/transactions.json";

export const App = () => {
  return (
  <div className = "App">
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics
      title="Upload stats" 
      stats={data} 
    />

    <FriendList 
      friends={friends} 
    />

    <TransactionHistory 
    items={transactions} 
    />

  </div>
  );
}; 



