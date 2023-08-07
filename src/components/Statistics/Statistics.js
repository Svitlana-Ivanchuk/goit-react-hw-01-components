import { Container, Item, StatsList } from './Statistics.styled';
import { Stats } from './Stats';
import { TopicStats } from './TopicStats';

export const Statistics = ({ data }, text) => {
  return (
    <Container>
      <TopicStats text="Upload stats">{text && '...'}</TopicStats>
      <StatsList>
        {data.map(item => (
          <Item key={item.id} label={item.label}>
            <Stats item={item} />
          </Item>
        ))}
      </StatsList>
    </Container>
  );
};
