import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import "../../components/sharedStyle.css";

const Contact = () => {
   const form = useRef<HTMLFormElement | null>(null);
   const fc = form.current!;

   const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();

     emailjs
       .sendForm(
         "service_wbyqufl",
         "template_mujab0f",
         fc,
         "wMDzF2mx2BP8YhRcT"
       )
      // e.target.reset()
   };

  return (
    <section className="contact">
      <h3>Get In Touch</h3>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rchiamaka331@gmail.com</h5>
            <a href="mailto:rchiamaka331@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2347083537150</h5>-
            <a href="https://wa.me/+2347083537150" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="your Message"
            rows={7}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
