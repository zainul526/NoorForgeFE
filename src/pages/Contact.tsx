import { FormEvent, useState } from "react";
import { apiRequest } from "../services/api";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSending(true);
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      await apiRequest("/contact", {
        method: "POST",

        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      setMessage("Message sent successfully.");

      form.reset();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Could not send message."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="section page-top form-section">
      <p className="page-kicker">
        NOORFORGE / CONTACT
      </p>

      <p className="eyebrow">
        Get in touch
      </p>

      <h1>Contact</h1>

      <p className="lead">
        Send a message to the NoorForge team.
      </p>

      <form
        className="form"
        onSubmit={handleSubmit}
      >
        <label>
          Name

          <input
            name="name"
            type="text"
            required
            minLength={2}
          />
        </label>

        <label>
          Email

          <input
            name="email"
            type="email"
            required
          />
        </label>

        <label>
          Message

          <textarea
            name="message"
            rows={6}
            required
            minLength={5}
          />
        </label>

        <button
          className="button"
          type="submit"
          disabled={sending}
        >
          {sending
            ? "Sending..."
            : "Send message"}
        </button>
      </form>

      {message && (
        <p className="form-message">
          {message}
        </p>
      )}
    </section>
  );
}
