import {useEffect, useState} from 'react';
import api from "../utils/Api.js";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
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

    api
      .getCards()
      .then((cardData) => {
        console.log(cardData);
        setCards(cardData);
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
              src={userAvatar}
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
              key={card._id}
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