import icons from 'url:../../img/icons.svg';

export default class View {
  _parentElement;
  _data;
  _errorMessage = 'We could not find that recipe ,please try another one';
  _successMessage = `Start by searching for a recipe or an ingredient. Have fun!`;
  render(data) {
    console.log(data);
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderSpinner() {
    const markup = ` <div class="spinner">
      <svg>
        <use href="${icons}.svg#icon-loader"></use>
      </svg>
    </div> `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterBegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `   <div class="error">
    <div>
      <svg>
        <use href="${icons}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${message}</p>
  </div> `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterBegin', markup);
  }
  renderSuccess(message) {
    const markup = `   <div class="message">
    <div>
      <svg>
        <use href="#${icons}#icon-smile"></use>
      </svg>
    </div>
    <p>${this._successMessage}</p>
  </div> `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterBegin', markup);
  }
}
