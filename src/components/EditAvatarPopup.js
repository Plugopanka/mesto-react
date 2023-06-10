import { useEffect, useState, useContext, useRef } from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const [userAvatar, setUserAvatar] = useState("");
  const currentUser = useContext(CurrentUserContext);

    const avatarRef = useRef();

  useEffect(() => {
    setUserAvatar(currentUser.avatar);
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar(avatarRef.current.value);
    onClose()
  }

  // function handleInput(e, data) {
  //   setUserAvatar({...userAvatar, [data]: e.target.value})
  // }

  return (
    <PopupWithForm
      name="change"
      title="Обновить аватар"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
      // onChange={e => handleInput(e, "avatar")}
      // value={userAvatar || ""}
      ref={avatarRef}
        type="url"
        name="link"
        className="popup__input"
        id="input-avatar"
        placeholder="Ссылка на картинку"
        required
      />
      <span className=" popup__input-error link-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
