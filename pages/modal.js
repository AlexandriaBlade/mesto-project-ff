function openPopup(popup) {
    popup.classList.add('popup_opened'); // Объединенный класс для анимации и отображения
    document.addEventListener("keyup", handleEscUp);
};

function closePopup(popup) {
    popup.classList.remove("popup_opened");
    document.removeEventListener("keyup", handleEscUp);
};

const handleEscUp = (evt) => {
    if (evt.key === "Escape") {
        const activePopup = document.querySelector(".popup_opened");
        if (activePopup) {
            closePopup(activePopup);
        }
    }
};

function setClosePopupEventListeners() {
    document.addEventListener("click", (evt) => {
        if (evt.target.classList.contains("popup__close") || evt.target.classList.contains("popup")) {
            const popup = evt.target.closest('.popup');
            closePopup(popup);
        }
    });
}

export { openPopup, closePopup, setClosePopupEventListeners };
