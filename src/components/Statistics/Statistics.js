import { Stats } from './Stats';

export const Statistics = ({ dataItems }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        {dataItems.map(data => (
          <li key={data.id} class="item">
            <Stats data={data} />
          </li>
        ))}
      </ul>
    </section>
  );
};
