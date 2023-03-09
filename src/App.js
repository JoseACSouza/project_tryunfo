import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: '',
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.handleButtonDisabled);
  };

  handleButtonDisabled = () => {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
    const attr1 = parseFloat(cardAttr1, 2);
    const attr2 = parseFloat(cardAttr2, 2);
    const attr3 = parseFloat(cardAttr3, 2);
    const verifyCompletition = [cardName, cardDescription, cardImage, cardRare]
      .every((item) => item !== ''); // verifica se todos estão preenchidos
    const maxSum = 210;
    const maxSingle = 90;
    const condition1 = [attr1, attr2, attr3]
      .reduce((summ, attr) => summ + attr) <= maxSum;
    const condition2 = (
      (attr1 <= maxSingle) && (attr2 <= maxSingle) && (attr3 <= maxSingle));
    const condition3 = (attr1 >= 0) && (attr2 >= 0) && (attr3 >= 0);

    if (condition1 && condition2 && condition3 && verifyCompletition) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  };

  render() {
    const {
      cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <h2>Adicione uma carta</h2>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
