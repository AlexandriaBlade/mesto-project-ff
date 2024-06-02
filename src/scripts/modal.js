function openPopup(popup) {
    popup.classList.add('popup_is-opened'); // Объединенный класс для анимации и отображения
    document.addEventListener("keyup", handleEscUp);
};

function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keyup", handleEscUp);
};

const handleEscUp = (evt) => {
    if (evt.key === "Escape") {
        closePopup(document.querySelector(".popup_is-opened"));
    }
};

function setClosePopupEventListeners() {
    document.addEventListener("click", closePopupEvent);
}

function closePopupEvent(evt) {
    if (evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup")) {
        const popup = evt.target.closest('.popup');
        closePopup(popup);
    }
}


export { openPopup, closePopup, setClosePopupEventListeners };
