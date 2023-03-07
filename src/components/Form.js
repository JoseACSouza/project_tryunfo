import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>
            Nome da Carta
            <input type="text" data-testid="name-input" />
          </label>
          <label>
            Descrição
            <textarea data-testid="description-input" />
          </label>
          <label>
            Força
            <input type="number" data-testid="attr1-input" />
          </label>
          <label>
            Agilidade
            <input type="number" data-testid="attr2-input" />
          </label>
          <label>
            Inteligência
            <input type="number" data-testid="attr3-input" />
          </label>
          <label>
            Url da imagem
            <input type="text" data-testid="name-input" />
          </label>
          <label>
            <select name="rare" data-testid="rare-input">
              <option value="normal" selected>normal</option>
              <option value="raro">raro</option>
              <option value="muito-raro">muito raro</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
