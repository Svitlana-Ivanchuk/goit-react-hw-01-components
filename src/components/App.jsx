import user from '../data/user.json';
import dataItems from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendList';
import { TransactionHistory } from './Transaction/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={dataItems} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
