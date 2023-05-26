import React from "react";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./components/Main.js";
import PopupWithForm from "./components/PopupWithForm.js";
import ImagePopup from "./components/ImagePopup.js";

function App() {
  const [isEditPopupOpen, setIsEditPopupOpen] = React.useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = React.useState(false);
  const [isChangePopupOpen, setIsChangePopupOpen] = React.useState(false);
  const [isSubmitPopupOpen, setIsSubmitPopupOpen] = React.useState(false);
  const [targetCard, setTargetCard] = React.useState({});

  function closeAllPopups() {
    setIsEditPopupOpen(false);
    setIsAddPopupOpen(false);
    setIsChangePopupOpen(false);
    setIsSubmitPopupOpen(false);
    setTargetCard({});
  }


  return (
    <div className="root">
      <div className="page">
        <Header />

        <Main
          onEditProfile={setIsEditPopupOpen}
          onAddPlace={setIsAddPopupOpen}
          onEditAvatar={setIsChangePopupOpen}
          onCardClick={setTargetCard}
        />

        <PopupWithForm
          name="edit"
          title="Редактировать профиль"
          buttonText="Сохранить"
          isOpen={isEditPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            className="popup__input"
            id="input-name"
            placeholder="Имя"
            required
            minLength="2"
            maxLength="40"
          />
          <span className=" popup__input-error name-error"></span>
          <input
            type="text"
            name="about"
            className="popup__input"
            id="input-description"
            placeholder="О себе"
            required
            minLength="2"
            maxLength="200"
          />
          <span className=" popup__input-error about-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="change"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isChangePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            name="link"
            className="popup__input"
            id="input-avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className=" popup__input-error link-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="add"
          title="Новое место"
          buttonText="Создать"
          isOpen={isAddPopupOpen}
          onClose={closeAllPopups}
        >
          <input
              type="text"
              name="name"
              className="popup__input"
              id="input-place"
              placeholder="Название"
              required
              minLength="2"
              maxLength="30"
            />
            <span className=" popup__input-error name-error"></span>
          <input
            type="url"
            name="link"
            className="popup__input"
            id="input-avatar"
            placeholder="Ссылка на картинку"
            required
          />
          <span className=" popup__input-error link-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name="submit"
          title="Вы уверены?"
          buttonText="Да"
          isOpen={isSubmitPopupOpen}
          onClose={closeAllPopups}
        />

        <ImagePopup
        card={targetCard}
        onClose={closeAllPopups}
        />

        <Footer />
      </div>
    </div>
  );
}

export default App;
