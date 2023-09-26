import { Profile } from '/Profile/Profile';
import { Statistics } from '/Statistics/Statistics';
import { FriendList } from '/FriendList/FriendList';
import { TransactionHistory } from '/TransactionHistory/TransactionHistory';
import transactions from '/TransactionHistory/transactions.json';
import friends from '/FriendList/friends.json';
import data from '/Statistics/data.json';
import user from '/Profile/user.json';

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
