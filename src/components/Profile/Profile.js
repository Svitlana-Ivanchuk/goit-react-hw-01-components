import { Description } from './Description';
import { Topic } from './Profile.styled';
import { UserStats } from './UserStats';
//import PropTypes from 'prop-types';

export const Profile = ({ user }) => {
  return (
    <section>
      <Topic>Profile</Topic>

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

//Profile.propTypes = {
//  user: PropTypes.arrayOf(
//    PropTypes.exact({
//      username: PropTypes.string.isRequired,
//      tag: PropTypes.string.isRequired,
//      location: PropTypes.string.isRequired,
//      avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
//      stats: {
//        followers: PropTypes.number.isRequired,
//        views: PropTypes.number.isRequired,
//        likes: PropTypes.number.isRequired,
//      },
//    })
//  ),
//};
