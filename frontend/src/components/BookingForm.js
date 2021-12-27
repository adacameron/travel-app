import React, { useState } from "react";
import "../styles/bookingform.css";

const BookingForm = () => {
  const [value, setValues] = useState({
    firstName: "",
    surname: "",
    email: "",
    passportNumber: "",
    cardNumber: "",
    cvc: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleFormFirstName = (e) => {
    setValues({ ...value, firstName: e.target.value });
  };
  const handleFormSurname = (e) => {
    setValues({ ...value, surname: e.target.value });
  };
  const handleFormEmail = (e) => {
    setValues({ ...value, email: e.target.value });
  };
  const handleFormPassportNumber = (e) => {
    setValues({ ...value, passportNumber: e.target.value });
  };
  const handleFormCardNumber = (e) => {
    setValues({ ...value, cardNumber: e.target.value });
  };
  const handleFormCvc = (e) => {
    setValues({ ...value, cvc: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      value.firstName &&
      value.surname &&
      value.passportNumber &&
      value.cardNumber &&
      value.cvc &&
      value.email
    ) {
      setValid(true);
    }
    setSubmitted(true);
  };
  return (
    <div className="form-container">
      <form action="" className="register-form" onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className="success-message">Success Flight has been Booked!</div>
        ) : null}
        <input
          type="text"
          name="FirstName"
          placeholder="First Name"
          value={value.firstName}
          className="form-field"
          onChange={handleFormFirstName}
        />
        {submitted && !value.firstName ? (
          <span>Please Enter Correct Information</span>
        ) : null}
        <input
          type="text"
          name="surname"
          placeholder="Surname"
          value={value.surname}
          className="form-field"
          onChange={handleFormSurname}
        />
        {submitted && !value.surname ? (
          <span>Please Enter Correct Information</span>
        ) : null}
        <input
          type="email"
          placeholder="Email"
          value={value.email}
          className="form-field"
          onChange={handleFormEmail}
        />
        {submitted && !value.email ? (
          <span>Please Enter Correct Information</span>
        ) : null}
        <input
          name="passport number"
          placeholder="Passport number"
          value={value.passportNumber}
          className="form-field"
          onChange={handleFormPassportNumber}
        />
        {submitted && !value.passportNumber ? (
          <span>Please Enter Correct Information</span>
        ) : null}
        <input
          name="Card Number"
          placeholder="Card Number"
          value={value.cardNumber}
          className="form-field"
          onChange={handleFormCardNumber}
        />
        {submitted && !value.cardNumber ? (
          <span>Please Enter Correct Information</span>
        ) : null}
        <input
          type="password"
          name="Cvc"
          placeholder="CVC"
          value={value.cvc}
          className="form-field"
          onChange={handleFormCvc}
        />
        {submitted && !value.cvc ? (
          <span>Please Enter Correct Information</span>
        ) : null}
        <button className="form-field" type="submit">
          Book Flight
        </button>
      </form>
    </div>
  );
};
export default BookingForm;
