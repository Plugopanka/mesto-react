import React from "react";

function PopupWithForm({ name, title, buttonText, isOpen, onClose, children }) {
  return (
    <section
      className={`popup ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <form className="popup__border" name={`${name}-form`} noValidate>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button
            type="submit"
            className="popup__save-button"
            aria-label="Сохранить изменения."
          >
            {buttonText || 'Сохранить'}
          </button>
        </form>
        <button
          className="popup__exit-button"
          type="button"
          aria-label="Выйти без изменений."
          onClick={onClose}
        ></button>
      </div>
    </section>
  );
}

export default PopupWithForm;

export default PopupWithForm;