import PopupWithForm from "./PopupWithForm";
import React from "react";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
    const avatarRef = React.useRef();
    const [isLoading, setIsLoading] = React.useState(false);

    function handleChangeAvatar(e) {
        avatarRef.current.value = e.target.value;
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name="new-avatar"
            title="Обновить аватар"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            button={isLoading ? "Сохранение..." : "Сохранить"}>
                <input
                    className="popup__input popup__input_avatar"
                    placeholder="Ссылка на картинку"
                    type="url"
                    name="avatar"
                    ref={avatarRef}
                    onChange={handleChangeAvatar}
                    id="link-of-image" required
                />
                <span className="popup__error" id="link-of-image-error"/>
        </PopupWithForm>
    );
}

export default EditAvatarPopup