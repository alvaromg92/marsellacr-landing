import { useState } from "react";
import "../styles/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [perfume, setPerfume] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hola, MarsellaCR. 👋

Mi nombre es ${name}.

📱 Teléfono:
${phone}

🧴 Perfume de interés:
${perfume}

💬 Mensaje:
${message}`;

    const url = `https://wa.me/50687195863?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <span>Contacto</span>

        <h2>Solicita información</h2>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <select
          value={perfume}
          onChange={(e) => setPerfume(e.target.value)}
        >
          <option value="">Selecciona un perfume</option>

          <option>Versace</option>

          <option>Carolina Herrera</option>

          <option>Jean Paul Gaultier</option>

          <option>Coco Chanel</option>

          <option>Otro</option>
        </select>

        <textarea
          rows="5"
          placeholder="Escribe tu mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">
          Enviar por WhatsApp
        </button>
      </form>
    </section>
  );
}

export default Contact;