import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { MdOutlineEmail } from "react-icons/md";
import "../sharedStyle.css";

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
         "wMDzF2mx2BP8YhRcT",
       );
      // e.target.reset()
   };

  return (
    <section className="contact">
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rchiamaka331@gmail.com</h5>
            <a href="mailto:rchiamaka331@gmail.com">
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
          >
          </textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
