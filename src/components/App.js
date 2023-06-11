import { useEffect, useState } from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";
import DeletePlacePopup from "./DeletePlacePopup.js";
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import ImagePopup from "./ImagePopup.js";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
  const [isChangePopupOpen, setIsChangePopupOpen] = useState(false);
  const [isSubmitPopupOpen, setIsSubmitPopupOpen] = useState(false);
  const [targetCard, setTargetCard] = useState({});
  const [deletedCard, setDeletedCard] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function closeAllPopups() {
    setIsEditPopupOpen(false);
    setIsAddPopupOpen(false);
    setIsChangePopupOpen(false);
    setIsSubmitPopupOpen(false);
    setTargetCard({});
    setDeletedCard({});
  }

  useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(`Ошибка загрузки ${err}`);
      });

    api
      .getCards()
      .then((cardData) => {
        setCards(cardData);
        console.log(cardData);
      })
      .catch((err) => {
        console.log(`Ошибка загрузки ${err}`);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => {
      return i._id === currentUser._id;
    });

    (isLiked ? api.deleteLike(card._id) : api.putLike(card._id))
      .then((newCard) => {
        const newCards = cards.map((card) =>
          card._id === newCard._id ? newCard : card
        );
        setCards(newCards);
      })
      .catch((err) => {
        console.log(`Ошибка загрузки ${err}`);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteNewCard(card._id)
      .then(() => {
        const newCards = cards.filter((element) => {
          return element._id !== card._id;
        });
        setCards(newCards);
      })
      .then(closeAllPopups())
      .catch((err) => {
        console.log(`Ошибка загрузки ${err}`);
      });
  }

  function handleUpdateUser({ name, about }) {
    setIsLoading(true);
    api
      .patchUserInfo(name, about)
      .then((data) => {
        setCurrentUser(data);
      })
      .then(closeAllPopups())
      .catch((err) => {
        console.log(`Ошибка загрузки ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  function handleUpdateAvatar(avatar) {
    setIsLoading(true);
    api
      .patchUserAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
      })
      .then(closeAllPopups())
      .catch((err) => {
        console.log(`Ошибка загрузки ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  function handleAddPlaceSubmit({ name, link }) {
    setIsLoading(true);
    api
      .postNewCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .then(closeAllPopups())
      .catch((err) => {
        console.log(`Ошибка загрузки ${err}`);
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Header />

          <Main
            cards={cards}
            onEditProfile={setIsEditPopupOpen}
            onAddPlace={setIsAddPopupOpen}
            onEditAvatar={setIsChangePopupOpen}
            onCardClick={setTargetCard}
            onCardLike={handleCardLike}
            onCardDelete={setDeletedCard}
            onCardSubmit={setIsSubmitPopupOpen}
          />

          <EditProfilePopup
            isLoading={isLoading}
            isOpen={isEditPopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isLoading={isLoading}
            isOpen={isChangePopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <AddPlacePopup
            isLoading={isLoading}
            isOpen={isAddPopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          <DeletePlacePopup
            isLoading={isLoading}
            card={deletedCard}
            isOpen={isSubmitPopupOpen}
            onClose={closeAllPopups}
            onDeletePlace={handleCardDelete}
            onDeletedCard={setDeletedCard}
          />

          <ImagePopup card={targetCard} onClose={closeAllPopups} />

          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
