import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const { onSaveButtonClick, nameFilter, rareFilter } = this.props;
    const { deleteButton } = this.props;
    return (
      <div>
        {
          onSaveButtonClick
            .filter((card) => card.cardName.includes(nameFilter))
            .filter((card) => card.cardRare === rareFilter || rareFilter === '')
            .map((card) => {
              const { cardName, cardDescription, cardAttr1,
                cardAttr2, cardAttr3, cardImage, cardRare,
                cardTrunfo } = card;
              return (
                <Card
                  key={ cardName }
                  cardName={ cardName }
                  cardDescription={ cardDescription }
                  cardAttr1={ cardAttr1 }
                  cardAttr2={ cardAttr2 }
                  cardAttr3={ cardAttr3 }
                  cardImage={ cardImage }
                  cardRare={ cardRare }
                  cardTrunfo={ cardTrunfo }
                  isPreview={ false }
                  deleteButton={ deleteButton }
                />
              );
            })
        }
      </div>
    );
  }
}
CardList.propTypes = {
  onSaveButtonClick: PropTypes.string.isRequired,
  deleteButton: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
};

export default CardList;
