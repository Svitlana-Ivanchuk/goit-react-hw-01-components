import { Avatar, ProfileCard, Text, UserName } from './Description.styled';

export const Description = ({ username, tag, location, avatar }) => {
  return (
    <ProfileCard>
      <Avatar src={avatar} alt="User avatar" />

      <UserName>{username}</UserName>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </ProfileCard>
  );
};
