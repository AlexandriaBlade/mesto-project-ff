function deleteCard(card) {
    card.remove();
}

function likeCard(cardLikeButton) {
    cardLikeButton.classList.toggle('card__like-button_is-active');
}

function createCard(cardData, callback, like, view) {
    const card = document.querySelector('#card-template').content.querySelector('.places__item').cloneNode(true);
    card.querySelector('img').src = cardData['link'];
    card.querySelector('img').alt = cardData['name'];
    card.querySelector('h2').textContent = cardData['name'];
    card.querySelector('.card__delete-button').addEventListener('click', function () {
        callback(card);
    });
    card.querySelector('.card__like-button').addEventListener('click', function () {
        like(card.querySelector('.card__like-button'));
    });
    card.querySelector('.card__image').addEventListener('click', function () {
        view(cardData['name'], cardData['link']);
    });
    return card;
}

export { deleteCard, likeCard, createCard };

// @todo: Функция создания карточки
function createCard(cardData, deleteCard) {
    const cardElement = cardTemplate
      .querySelector(".places__item")
      .cloneNode(true);
    const deleteButton = cardElement.querySelector(".card__delete-button");
    cardElement.querySelector(".card__image").src = cardData.link;
    cardElement.querySelector(".card__image").alt = cardData.name;
    cardElement.querySelector(".card__title").textContent = cardData.name;
  
    deleteButton.addEventListener("click", () => {
      deleteCard(cardElement);
    });
    return cardElement;
  }