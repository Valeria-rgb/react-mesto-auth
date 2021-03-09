import PopupWithForm from "./PopupWithForm";
import React from "react";

function ConfirmDeletePopup({ isOpen, onClose, onDeleteCard }) {
    const [isLoading, setIsLoading] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        onDeleteCard();
    }

    return (
        <PopupWithForm
            name="delete-photo"
            title="Вы уверены?"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            button={isLoading ? "Удаление..." : "Да"}
        />
    );
}

export default ConfirmDeletePopup