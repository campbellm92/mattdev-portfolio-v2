import { useState } from "react";
import styles from "./contact.module.css";
import { Button } from "mallee-ui";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [messageError, setMessageError] = useState(null);
  const [success, setSuccess] = useState(false);

  const validateName = () => {
    if (!name || name.trim().length === 0) {
      setNameError("Il nome è obbligatorio.");
      setSuccess("");
    } else {
      setNameError(null);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = () => {
    if (!email) {
      setEmailError("L'email è obbligatoria.");
      setSuccess("");
    } else if (!emailRegex.test(email)) {
      setEmailError("L'email non è valida.");
    } else setEmailError(null);
  };

  const validateMessage = () => {
    if (!message || message.trim().length === 0) {
      setMessageError("Non hai scritto qualcosa.");
      setSuccess("");
    } else setMessageError(null);
  };

  const resetFields = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    validateName();
    validateEmail();
    validateMessage();

    const EMAIL_KEY = import.meta.env.VITE_EMAIL_KEY;

    if (!nameError && !emailError && !messageError) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ access_key: EMAIL_KEY, name, email, message }),
        });
        if (response.ok) {
          resetFields();
          setSuccess(true);
        } else {
          console.error("Error sending email.");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      setSuccess(false);
    }
  };

  return (
    <div className={styles.contactFormCol}>
      <form className={styles.contactFormContainer} onSubmit={handleSubmit}>
        <h2 className={styles.contactHeader}>Inviami un messaggio</h2>
        <div className={styles.labelInputContainer}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
            placeholder="Inserisci il tuo nome"
            className={`${nameError ? "input-error" : ""}`}
          />
          {nameError && <p className="text-error">{nameError}</p>}
        </div>

        <div className={styles.labelInputContainer}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            placeholder="Inserisci il tuo email"
            className={`${emailError ? "input-error" : ""}`}
          />
          {emailError && <p className="text-error">{emailError}</p>}
        </div>

        <div className={styles.labelInputContainer}>
          <label htmlFor="message">Messagio</label>
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={validateMessage}
            placeholder="Scrivi un messaggio"
            className={`${messageError ? "input-error" : ""}`}
          ></textarea>
          {messageError && <p className="text-error">{messageError}</p>}
        </div>

        <div className={styles.btnContainer}>
          <Button size="large" type="submit" className={styles.buttonCustom}>
            INVIARE
          </Button>
        </div>
        <div className={styles.successMsgContainer}>
          {success && (
            <p className="text-success">Messaggio inviato con successo!</p>
          )}
        </div>
      </form>
    </div>
  );
}

{
  /* <TextInput
          name="name"
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validateName}
          hasError={!!nameError}
          errorMessage={nameError || undefined}
          placeholder="Inserisci il tuo nome"
        /> */
}
