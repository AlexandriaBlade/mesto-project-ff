// cards.js
const cardTemplate = document.querySelector('#card-template');

// Функция для создания карточки
function createCard(item, userId, name, link, handleImageClick, handleDeleteButtonClick, handleLikeButton) {
  const listItemCopy = cardTemplate.content.cloneNode(true);
  const cardImage = listItemCopy.querySelector('.card__image');
  const cardTitle = listItemCopy.querySelector('.card__title');
  const deleteButton = listItemCopy.querySelector('.card__delete-button');
  const likeButton = listItemCopy.querySelector('.card__like-button');

  cardTitle.textContent = name;
  cardImage.src = link;
  cardImage.alt = `Изображение ${name}`;

  if(!(item.owner._id === userId)) {
    deleteButton.style.display = 'none';
  }

  likeButton.dataset.after = `Лайки: ${item.likes.length}`;
  likeButton.classList.toggle('card__like-button_is-active', isLiked(item, userId));

  cardImage.addEventListener('click', handleImageClick);
  deleteButton.addEventListener('click', (evt) => handleDeleteButtonClick(item, evt));
  likeButton.addEventListener('click', (evt) => handleLikeButton(item._id, evt, likeButton));

  return listItemCopy;
}

// Функция для проверки, поставил ли пользователь лайк
function isLiked(item, userId) {
  return item.likes.some((likeUser) => likeUser._id === userId);
}

// Функция для переключения лайка
function like(event) {
  const likeButton = event.target;
  likeButton.classList.toggle('card__like-button_is-active');
}

// Экспорт функций
export { createCard, isLiked, like };

