import './index.css';

import { renderShowsToDOM } from './modules/renderToDOM.js';
import { createPopup } from './modules/popup.js';

const showsContainer = document.querySelector('.maze__grid');

showsContainer.addEventListener('click', async (e) => {
  const commentBtn = e.target.closest('.comment__btn');

  if (commentBtn) {
    const { id } = commentBtn.closest('.maze__card');
    createPopup(id);
  }
});

renderShowsToDOM();
