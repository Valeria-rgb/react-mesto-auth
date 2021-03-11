function InfoTooltip ({ isOpen, isSuccess, onClose }) {
    const message = isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.';

    return (
        <div className={`popup popup_auth-info ${isOpen ? 'popup_opened' : ''}`}>
            <div className={`popup__container popup__container_auth-info`}>
                <button
                    className={`popup__close-button popup__close-button_auth-info`}
                    type="button"
                    onClick={onClose}
                />
                <div className={`popup__form`}>
                    <img
                      className="popup__icon"
                      src={isSuccess ? "../images/success.svg" : "../images/fail.svg"}
                      alt={'Иконка результата авторизации'}/>
                    <p className="popup__message">{message}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoTooltip;