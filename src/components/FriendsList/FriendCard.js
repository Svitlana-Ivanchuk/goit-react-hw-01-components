import { AvatarImg, NameFriend, Status } from './FriendCard.styled';

export const FriendCard = ({ friend: { avatar, name, isOnline }, status }) => {
  return (
    <>
      <Status status={isOnline}>{isOnline}</Status>
      <AvatarImg src={avatar} alt="User avatar" width="48" />
      <NameFriend>{name}</NameFriend>
    </>
  );
};
