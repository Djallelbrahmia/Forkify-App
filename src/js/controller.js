import * as model from './model';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipe';
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

const renderSpinner = function (parentEl) {
  const markup = ` <div class="spinner">
  <svg>
    <use href="${icons}.svg#icon-loader"></use>
  </svg>
</div> `;
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterBegin', markup);
};
const showRecipe = async function () {
  console.log(icons);

  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    renderSpinner(recipeContainer);
    await model.loadRecipe(id);
    recipeView.render(model.state.recipe); //TODO
  } catch (e) {
    alert(e);
  }
};
['hashchange', 'load'].forEach(e => window.addEventListener(e, showRecipe));

///////////////////////////////////////
