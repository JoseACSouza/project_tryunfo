import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { onInputChange, nameFilter, rareFilter } = this.props;
    return (
      <div>
        <input
          name="nameFilter"
          type="text"
          placeholder="Buscar Carta"
          data-testid="name-filter"
          value={ nameFilter }
          onChange={ onInputChange }
        />
        <select
          name="rareFilter"
          data-testid="rare-filter"
          value={ rareFilter }
          onChange={ onInputChange }
        >
          <option value="" selected>todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
      </div>
    );
  }
}
Filters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
};

export default Filters;
