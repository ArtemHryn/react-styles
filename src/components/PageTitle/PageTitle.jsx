import PropTypes from 'prop-types'; // ES6
// import css from './PageTitle.module.css';
import { Title } from './PageTitle.styled';

export const PageTitle = ({ text }) => {
  return <Title>{text}</Title>;
};


PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
}