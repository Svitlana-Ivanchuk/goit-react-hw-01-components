import { Label, Stats, StatsItem } from './UserStats.styled';

export const UserStats = ({ stats: { followers, views, likes } }) => {
  return (
    <Stats>
      <StatsItem>
        <Label>Followers</Label>
        <Label>{followers} </Label>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Label>{views}</Label>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Label>{likes}</Label>
      </StatsItem>
    </Stats>
  );
};
