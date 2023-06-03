import React from "react";

export default function Card(card) {
  function handleCardClick() {
    card.onCardClick(card);
  }
  return (
    <li className="card">
      <button
        className="card__view"
        type="button"
        aria-label="Увеличить фото."
        onClick={handleCardClick}
      >
        <img className="card__image" src={card.link} alt={card.name} />
      </button>
      <button
        className="card__delete"
        type="button"
        aria-label="Удалить пост."
      ></button>
      <div className="card__container">
        <h2 className="card__place">{card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like"
            id="like"
            type="button"
            aria-label="Мне нравится."
          ></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default function Card(card) {
  function handleCardClick() {
    card.onCardClick(card);
  }
  return (
    <li className="card">
      <button
        className="card__view"
        type="button"
        aria-label="Увеличить фото."
        onClick={handleCardClick}
      >
        <img className="card__image" src={card.link} alt={card.name} />
      </button>
      <button
        className="card__delete"
        type="button"
        aria-label="Удалить пост."
      ></button>
      <div className="card__container">
        <h2 className="card__place">{card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__like"
            id="like"
            type="button"
            aria-label="Мне нравится."
          ></button>
          <p className="card__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}