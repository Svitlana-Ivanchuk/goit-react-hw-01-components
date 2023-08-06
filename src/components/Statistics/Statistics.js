import { Container, Item, StatsList, Topic } from './Statistics.styled';
import { Stats } from './Stats';

export const Statistics = ({ data }) => {
  return (
    <Container>
      <Topic>Upload stats</Topic>

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
