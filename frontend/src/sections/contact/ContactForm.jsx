import { useState } from "react";
import styles from "./contact.module.css";
import { TextInput, TextArea, Button } from "mallee-ui";

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
    } else {
      setNameError(null);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = () => {
    if (!email) {
      setEmailError("L'email è obbligatoria.");
    } else if (!emailRegex.test(email)) {
      setEmailError("L'email non è valida.");
    } else setEmailError(null);
  };

  const validateMessage = () => {
    if (!message || message.trim().length === 0) {
      setMessageError("Non hai scritto qualcosa.");
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

    if (!nameError && !emailError && !messageError) {
      try {
        const response = await fetch("http://localhost:3000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
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
        <TextInput
          name="name"
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validateName}
          hasError={!!nameError}
          errorMessage={nameError || undefined}
          placeholder="Inserisci il tuo nome"
        />
        <TextInput
          name="email"
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={validateEmail}
          hasError={!!emailError}
          errorMessage={emailError || undefined}
          placeholder="Inserisci il tuo email"
        />
        <TextArea
          name="message"
          label="Messaggio"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={validateMessage}
          hasError={!!messageError}
          errorMessage={messageError || undefined}
          placeholder="Scrivi un messaggio"
        />
        <div className={styles.btnContainer}>
          <Button size="large" type="submit">
            Inviare
          </Button>
        </div>

        {success && (
          <p className={styles.successMsg}>Messaggio inviato con successo!</p>
        )}
      </form>
    </div>
  );
}
