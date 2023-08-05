import { Description } from './Description';
import { UserStats } from './UserStats';

export const Profile = ({ user }) => {
  return (
    <section class="profile">
      <h2 class="title">Profile</h2>
      <Description
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
      />
      <UserStats stats={user.stats} />
    </section>
  );
};
