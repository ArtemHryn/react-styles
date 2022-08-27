import PropTypes from 'prop-types'; // ES6
import css from './PageTitle.module.css';

export const PageTitle = ({ text }) => {
  return <h2 className={css.title}>{text}</h2>;
};


PageTitle.propTypes = {
    text: PropTypes.string.isRequired,
}