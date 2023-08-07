import { Title } from './TopicStats.styled';
import PropTypes from 'prop-types';

export const TopicStats = ({ text }) => {
  return <Title>{text}</Title>;
};

TopicStats.propTypes = {
  text: PropTypes.string.isRequired,
};
