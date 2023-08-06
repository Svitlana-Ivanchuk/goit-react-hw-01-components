import { TableBody } from './TableBody';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table class="transaction-history">
        <thead>
          <tr>
            <th>type</th>
            <th>amount</th>
            <th>currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <TableBody item={item} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
