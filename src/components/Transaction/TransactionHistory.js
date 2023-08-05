import { TableBody } from './TableBody';
import { TableHead } from './TableHead';

export const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table class="transaction-history">
        <thead>
          <TableHead
            type={items.type}
            amount={items.amount}
            currency={items.currency}
          />
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
