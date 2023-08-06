import { Label, Percentage } from './Stats.styled';

export const Stats = ({ item: { label, percentage } }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percentage> {percentage}% </Percentage>
    </>
  );
};
