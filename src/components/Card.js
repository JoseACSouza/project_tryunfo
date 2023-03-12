import React from 'react';
import PropTypes from 'prop-types';
import './card.css';

class Card extends React.Component {
  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isPreview, deleteButton } = this.props;
    return (
      <div className="card">
        <h2 data-testid="name-card" className="name-card">
          { cardName }
        </h2>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
        />
        <p data-testid="description-card" className="description-card">
          { cardDescription }
        </p>
        <div className="stats">
          <div className="stats">
            <p className="str">FOR:</p>
            <p data-testid="attr1-card" className="attr1-card">
              { cardAttr1 }
            </p>
          </div>
          <div className="stats">
            <p className="dex">AGI:</p>
            <p data-testid="attr2-card" className="attr2-card">
              { cardAttr2 }
            </p>
          </div>
          <div className="stats">
            <p className="int">INT:</p>
            <p data-testid="attr3-card" className="attr3-card">
              { cardAttr3 }
            </p>
          </div>
        </div>
        <p data-testid="rare-card" className={ cardRare.split(' ')[0] }>
          { cardRare }
        </p>
        <p data-testid={ cardTrunfo ? 'trunfo-card' : '' } className="trunfo">
          { cardTrunfo ? 'Super Trunfo' : '' }
        </p>
        {
          isPreview ? '' : (
            <button
              aria-label="Excluir"
              type="button"
              data-testid="delete-button"
              name={ cardName }
              onClick={ deleteButton }
            >
              Excluir
            </button>)
        }
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isPreview: PropTypes.bool.isRequired,
  deleteButton: PropTypes.func.isRequired,
};

export default Card;
