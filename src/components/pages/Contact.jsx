import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import contactStyle from "../styles/contact.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false); 
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending...");
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;
    emailjs
      .sendForm(
        serviceId,
        templateId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          emailjs.sendForm(
            serviceId,
             templateId,
            form.current,
            publicKey
          );
          setStatus("✅ Message sent successfully!");
          e.target.reset();
          setIsSending(false);
        },
        (error) => {
          setStatus("❌ Failed to send message. Try again later.");
          setIsSending(false);
        }
      );
  };
  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className={contactStyle.contactSection}>
      <h2 className={contactStyle.title}>Contact Me</h2>
      <div className={contactStyle.contactContainer}>
        <div className={contactStyle.contactLeft}>
          <h2>Let’s Connect!</h2>
          <div className={contactStyle.contactIcon}>
            <a
              href="https://www.linkedin.com/in/rinchen-bhutia-9691332a6/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className={contactStyle.linkedin} />
            </a>
            <a
              href="https://github.com/rinchen29"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className={contactStyle.github} />
            </a>
            <a
              href="https://www.instagram.com/dev_rinchen?igsh=OW44ZDAxejBseGJ1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className={contactStyle.instagram} />
            </a>
          </div>
        </div>

        <div className={contactStyle.contactFormContainer}>
          <form ref={form} onSubmit={sendEmail} className={contactStyle.form}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className={contactStyle.input}
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
              className={contactStyle.input}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className={contactStyle.textarea}
            ></textarea>
            <button
              type="submit"
              className={contactStyle.button}
              disabled={isSending} 
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
          {status && <p className={contactStyle.status}>{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
