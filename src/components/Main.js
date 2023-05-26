import React from "react";
import api from "../utils/Api.js";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserData()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(`Ошибка загрузки ${err}`);
      });
  }, []);

  React.useEffect(() => {
    api
      .getCards()
      .then((cardData) => {
        console.log(cardData)
        setCards(
          cardData.map((data) => ({
            likes: data.likes,
            name: data.name,
            link: data.link,
            cardId: data._id,
          }))
        );
      })
      .catch((err) => {
        console.log(`Ошибка загрузки ${err}`);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <button
            className="profile__avatar-button"
            type="button"
            aria-label="Редактировать аватар."
            onClick={() => {
              onEditAvatar(true);
            }}
          >
            <img
              alt="Аватар владельца аккаунта."
              className="profile__avatar"
              style={{ backgroundImage: `url(${userAvatar})` }}
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Редактировать профиль."
              onClick={() => {
                onEditProfile(true);
              }}
            ></button>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Добавить публикацию."
          onClick={() => {
            onAddPlace(true);
          }}
        ></button>
      </section>

      <section className="cards">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card.cardId}
              likes={card.likes}
              name={card.name}
              link={card.link}
              onCardClick={onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
