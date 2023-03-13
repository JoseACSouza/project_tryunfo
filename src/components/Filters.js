import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { onInputChange, nameFilter, rareFilter, trunfoFilter } = this.props;
    return (
      <div>
        <input
          name="nameFilter"
          type="text"
          disabled={ trunfoFilter }
          placeholder="Buscar Carta"
          data-testid="name-filter"
          value={ nameFilter }
          onChange={ onInputChange }
        />
        <select
          name="rareFilter"
          data-testid="rare-filter"
          disabled={ trunfoFilter }
          value={ rareFilter }
          onChange={ onInputChange }
        >
          <option value="" selected>todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        <label>
          Super Trunfo
          <input
            name="trunfoFilter"
            type="checkbox"
            data-testid="trunfo-filter"
            className="checkbox"
            checked={ trunfoFilter }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}
Filters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};

export default Filters;
