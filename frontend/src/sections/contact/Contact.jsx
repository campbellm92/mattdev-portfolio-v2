import { useState } from "react";
import styles from "./contact.module.css";
import { TextInput, TextArea, Button } from "mallee-ui";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateName = () => {
    if (!name || name.trim().length === 0) {
      setNameError("Il nome è obbligatorio.");
    } else {
      setNameError(false);
    }
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateEmail = () => {
    if (!email) {
      setEmailError("L'email è obbligatoria.");
    } else if (!emailRegex.test(email)) {
      setEmailError("L'email non è valida.");
    } else setEmailError(false);
  };

  const validateMessage = () => {
    if (!message || message.trim().length === 0) {
      setMessageError("Non hai scritto qualcosa.");
    } else setMessageError(false);
  };

  const resetFields = () => {
    setName("");
    setEmail("");
    setMessage("");
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
    }
  };

  return (
    <form className={styles.contactFormContainer} onSubmit={handleSubmit}>
      <h2 className={styles.contactHeader}>Inviami un messaggio</h2>
      <TextInput
        name="name"
        label="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={validateName}
        hasError={nameError}
        errorMessage={nameError || undefined}
        placeholder="Inserisci il tuo nome"
      />
      <TextInput
        name="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={validateEmail}
        hasError={emailError}
        errorMessage={emailError || undefined}
        placeholder="Inserisci il tuo email"
      />
      <TextArea
        name="message"
        label="Messaggio"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onBlur={validateMessage}
        hasError={messageError}
        errorMessage={messageError || undefined}
        placeholder="Scrivi un messaggio"
      />
      <Button size="large" type="submit">
        Inviare
      </Button>
      {success && (
        <span className={styles.successSpan}>
          Messaggio inviato con successo!
        </span>
      )}
    </form>
  );
}
