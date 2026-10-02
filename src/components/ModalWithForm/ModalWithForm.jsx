import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText = "Add garment",
  isOpen,
  onClose,
  name,
  onSubmit,
  isFormValid,
}) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button
          onClick={onClose}
          className="modal__close"
          type="button"
        ></button>
        <form onSubmit={onSubmit} className="modal__form" name={name}>
          {children}
          <button
            type="submit"
            className="modal__submit"
            disabled={!isFormValid}
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
