// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

const container = document.querySelector(".content");
const cardsContainer = container.querySelector(".places__list");
const cardData = initialCards;


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
import "../pages/index.css";
import { initialCards } from "./cards.js";
import { likeCard } from "./card.js";
// Импорт функций модальных окон
import {  closePopup,  openPopup} from "./modal.js";

// DOM узлы
const profileEditButton = document.querySelector(".profile__edit-button");
const newCardButton = document.querySelector(".profile__add-button");
const placesList = document.querySelector(".places__list");

// Вывод карточек на страницу
initialCards.forEach((element) => {
  placesList.append(createCard(element, deleteCard, likeCard));
});

// Обработчики событий для кнопок редактирования профиля и добавления новой карточки
// Находим элементы один раз и сохраняем ссылки на них
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

// Обработчики событий для кнопок редактирования профиля и добавления новой карточки
profileEditButton.addEventListener("click", () => {
  openPopup(popupEdit);
  const nameInput = popupEdit.querySelector('input[name="name"]');
  const descriptionInput = popupEdit.querySelector('input[name="description"]');

  nameInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
});

newCardButton.addEventListener("click", () => {
  openPopup(popupNewCard);
});

// Установка обработчиков событий для закрытия попапов
document.querySelectorAll(".popup").forEach((popup) => {
  closePopup(popup);
});







