import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";

const AddItemModal = ({ isOpen, onAddItem, onCloseModal, isLoading }) => {
  const defaultValues = { name: "", imageUrl: "", weather: "" };
  const { values, handleChange, setValues } = useForm(defaultValues);

  useEffect(() => {
    if (isOpen) {
      setValues(defaultValues);
    }
  }, [isOpen, setValues]);

  const isFormValid =
    values.name !== "" && values.imageUrl !== "" && values.weather !== "";

  const handleReset = () => {
    setValues(defaultValues);
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddItem(values, handleReset);
  }

  return (
    <ModalWithForm
      title="New garment"
      name="new-card"
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      isOpen={isOpen}
      isFormValid={isFormValid}
      buttonText={isLoading ? "Saving..." : "Add garment"}
    >
      <label htmlFor="name" className="modal__label">
        Name{" "}
        <input
          name="name"
          type="text"
          className="modal__input"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="imageURL" className="modal__label">
        Image{" "}
        <input
          name="imageUrl"
          type="url"
          className="modal__input"
          id="imageURL"
          placeholder="Image URL"
          value={values.imageUrl}
          onChange={handleChange}
        />
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type:</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            id="hot"
            type="radio"
            name="weather"
            value="hot"
            checked={values.weather === "hot"}
            onChange={handleChange}
            className="modal__radio-input"
          />{" "}
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            id="warm"
            type="radio"
            name="weather"
            value="warm"
            checked={values.weather === "warm"}
            onChange={handleChange}
            className="modal__radio-input"
          />{" "}
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            id="cold"
            type="radio"
            name="weather"
            value="cold"
            checked={values.weather === "cold"}
            onChange={handleChange}
            className="modal__radio-input"
          />{" "}
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
