import { FormEvent, useState } from "react";
import { apiRequest } from "../services/api";

export default function Contact() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    try {
      await apiRequest("/contact", {
        method: "POST",
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
        }),
      });

      setMessage("Message sent successfully.");
      event.currentTarget.reset();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Could not send message.");
    }
  }

  return (
    <section className="section page-top form-section">
      <p className="eyebrow">Get in touch</p>
      <h1>Contact NoorForge</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" required />
        </label>

        <label>
          Email
          <input type="email" name="email" required />
        </label>

        <label>
          Message
          <textarea name="message" rows={5} required />
        </label>

        <button className="button" type="submit">Send Message</button>
      </form>

      {message && <p className="form-message">{message}</p>}
    </section>
  );
}