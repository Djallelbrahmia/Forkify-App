import View from './view';
import PreviewView from './preview';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class BookMarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet . find a nice recipe and bookmark it ;';
  _successMessage = `Start by searching for a recipe or an ingredient. Have fun!`;
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    return this._data
      .map(bookmark => PreviewView.render(bookmark, false))
      .join('');
  }
}
export default new BookMarksView();
