import user from '../data/user.json';
import dataItems from '../data/data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics data={dataItems} />
    </>
  );
};
