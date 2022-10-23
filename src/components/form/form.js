import { useState } from 'react';
import CTAButton from '../ctaButton/ctaButton';

function Form() {
  const defaultValues = {
    name: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  };
  const [isValidated, setIsValidated] = useState(defaultValues);
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setIsValidated({
      ...isValidated,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    console.log(isValidated);
    setIsValidated(defaultValues);
    setTimeout(() => setSuccess(false), 5000);
  };
  return (
    <>
      <div
        className={
          success ? 'form__success ' : 'form__success--nonactive'
        }
      >
        <div>
          Sukces!
          <br /> Twoja wiadomość zostałą wysłana.
        </div>
      </div>
      <form
        name="contact-form"
        method="post"
        action="/"
        onSubmit={handleSubmit}
        className="form"
      >
        <div className="form__items ">
          <div className="form__field">
            <label htmlFor="phone">Twój numer telefonu</label>
            <input
              type="phone"
              name="phone"
              onChange={handleChange}
              id="phone"
              value={isValidated.phone}
              pattern="[0-9]{9,12}"
              required
            />
          </div>
          <div className="form__field">
            <label htmlFor="name">Twoje imię</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              id="name"
              value={isValidated.name}
              required
            />
          </div>
          <div className="form__field">
            <label htmlFor="lastName">
              Twoje nazwisko / nazwa firmy
            </label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              id="lastName"
              value={isValidated.lastName}
              required
            />
          </div>
          <div className="form__field">
            <label htmlFor="email">Twój adres e-mail</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              id="email"
              value={isValidated.email}
              required
            />
          </div>
          <div className="form__field">
            <label htmlFor="message">Wiadomość (opcjonalnie)</label>
            <textarea
              rows="8"
              name="message"
              onChange={handleChange}
              id="message"
              value={isValidated.message}
            />
          </div>
        </div>
        <CTAButton className="button--yellow" type="submit">
          WYŚLIJ SWÓJ KONTAKT
        </CTAButton>
      </form>
    </>
  );
}

export default Form;
