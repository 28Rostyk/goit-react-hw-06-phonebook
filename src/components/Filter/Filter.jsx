import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ handleChange, value }) => (
  <label>
    Find contacts by name
    <input
      value={value}
      className={css.Filter}
      type="text"
      onChange={handleChange}
    />
  </label>
);

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
