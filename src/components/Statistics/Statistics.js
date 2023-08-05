import { Stats } from './Stats';

export const Statistics = ({ data }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {data.map(item => (
          <li key={item.id} class="item">
            <Stats item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};
