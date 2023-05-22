import logo from './logo.svg';
// import './index.css';

function App() {
  return (
    <>
    <main className="content">
        <section className="profile">
          <div className="profile__container">
            <button className="profile__avatar-button">
            <img
              alt="Аватар владельца аккаунта."
              className="profile__avatar"
            />
          </button>
            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Редактировать профиль."
              ></button>
              <p className="profile__description"></p>
            </div>
          </div>
          <button
            className="profile__add-button"
            type="button"
            aria-label="Добавить публикацию."
          ></button>
        </section>

        <section className="cards">
          <ul className="cards__list">
            <template className="card-template">
              <li className="card">
                <button
                  className="card__view"
                  type="button"
                  aria-label="Увеличить фото.">
                <img
                  className="card__image"
                />
                </button>
                <button
                  className="card__delete"
                  type="button"
                  aria-label="Удалить пост."
                ></button>
                <div className="card__container">
                  <h2 className="card__place"></h2>
                  <div className="card__like-container">
                  <button
                    className="card__like"
                    id="like"
                    type="button"
                    aria-label="Мне нравится."
                  ></button>
                  <p className="card__like-counter"></p>
                </div>
                </div>
              </li>
            </template>
          </ul>
        </section>
      </main>

      <section className="popup popup_function_edit">
        <div className="popup__container">
          <form className="popup__border" name="edit-form" noValidate>
            <h2 className="popup__title">Редактировать профиль</h2>
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
            <button
              type="submit"
              className="popup__save-button"
              aria-label="Сохранить изменения."
            >
            </button>
          </form>
          <button
            className="popup__exit-button"
            type="button"
            aria-label="Выйти без изменений."
          ></button>
        </div>
      </section>

      <section className="popup popup_function_change">
        <div className="popup__container">
          <form className="popup__border" name="change-form" noValidate>
            <h2 className="popup__title">Обновить аватар</h2>
            <input
              type="url"
              name="link"
              className="popup__input"
              id="input-avatar"
              placeholder="Ссылка на картинку"
              required
            />
            <span className=" popup__input-error link-error"></span>
            <button
              type="submit"
              className="popup__save-button"
              aria-label="Сохранить изменения."
            >
            </button>
          </form>
          <button
            className="popup__exit-button"
            type="button"
            aria-label="Выйти без изменений."
          ></button>
        </div>
      </section>

      <section className="popup popup_function_add">
        <div className="popup__container">
          <form className="popup__border" name="add-form" noValidate>
            <h2 className="popup__title">Новое место</h2>
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
              id="input-link"
              placeholder="Ссылка на картинку"
              required
            />
            <span className=" popup__input-error link-error"></span>
            <button
              type="submit"
              className="popup__save-button"
              aria-label="Сохранить изменения."
            >
            </button>
          </form>
          <button
            className="popup__exit-button"
            type="button"
            aria-label="Выйти без изменений."
          ></button>
        </div>
      </section>

      <section className="popup popup_function_submit">
        <div className="popup__container">
          <form className="popup__border" name="delete-form" noValidate>
            <h2 className="popup__title">Вы уверены?</h2>
            <button
              type="submit"
              className="popup__save-button"
              aria-label="Сохранить изменения."
            >
            </button>
          </form>
          <button
            className="popup__exit-button"
            type="button"
            aria-label="Выйти без изменений."
          ></button>
        </div>
      </section>

      <section className="popup popup_function_view">
        <div className="popup__container popup__container_background_transparent">
          <img className="popup__image"/>
            <p className="popup__subtitle"></p>
          <button
            className="popup__exit-button"
            type="button"
            aria-label="Выйти."
          ></button>
        </div>
      </section>

      <footer className="footer">
        <p className="footer__text">© 2020 Mesto Russia</p>
      </footer>
    </>
  );
}

export default App;
