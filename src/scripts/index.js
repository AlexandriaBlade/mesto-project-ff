// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;


const container = document.querySelector('.content');
const cardsContainer = container.querySelector('.places__list');
const cardData = initialCards;

// @todo: Функция создания карточки
function createCard(cardData, deleteCard) { 
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  cardElement.querySelector('.card__image').src = cardData.link;
  cardElement.querySelector('.card__image').alt = cardData.name;
  cardElement.querySelector('.card__title').textContent = cardData.name;

  deleteButton.addEventListener('click', () => {
    deleteCard(cardElement);
  });
  return cardElement;
}

// @todo: Функция удаления карточки
function deleteCard(cardElement) {
  cardElement.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((cardData) => {
  const cardElement = createCard(cardData, deleteCard);
  cardsContainer.appendChild(cardElement);
});

// Импорт стилей и функций
import "./pages/index.css";
import { initialCards, viewCard } from "./components/cards.js"; // Добавлен импорт viewCard
import { deleteCard, likeCard, createCard } from "./components/card.js";
import { closePopup, openPopup, setClosePopupEventListeners } from "./components/modal.js";

// DOM узлы
const profileEditButton = document.querySelector('.profile__edit-button');
const newCardButton = document.querySelector('.profile__add-button');
const placesList = document.querySelector('.places__list');
const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');

// Вывод карточек на страницу
initialCards.forEach((element) => {
  placesList.append(createCard(element, deleteCard, likeCard, viewCard));
});

// Обработчики событий для кнопок редактирования профиля и добавления новой карточки
// Находим элементы один раз и сохраняем ссылки на них
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const nameInput = popupEdit.querySelector('input[name="name"]');
const descriptionInput = popupEdit.querySelector('input[name="description"]');

// Обработчики событий для кнопок редактирования профиля и добавления новой карточки
profileEditButton.addEventListener("click", () => {
  openPopup(popupEdit);
  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
});

newCardButton.addEventListener("click", () => {
  openPopup(popupNewCard);
});

// Обработчики событий для форм
popupEdit.addEventListener('submit', handleFormSubmitEdit);
popupNewCard.addEventListener('submit', handleFormSubmitAddNewCard);

// Функции для обработки событий форм
function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  // ... код для обработки формы редактирования профиля ...
}

function handleFormSubmitAddNewCard(evt) {
  evt.preventDefault();
  // ... код для обработки формы добавления новой карточки ...
}

// Функция для просмотра карточки
function viewCard(name, link) {
  // ... код для отображения попапа с изображением ...
}

// Установка обработчиков событий для закрытия попапов
document.querySelectorAll('.popup').forEach((popup) => {
  setClosePopupEventListeners(popup);
});
