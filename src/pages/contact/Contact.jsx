import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      subject: e.target.subject.value,
      content: e.target.message.value,
    };

    emailjs
      .send(
        "service_9jmkvr1",
        "template_suh805s",
        templateParams,
        "aBIhORd1s2vkNHDZd"
      )
      .then(
        (result) => {
          setStatus("success");
          console.log(result.text);
          form.current.reset();
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          setStatus("error");
          console.log(error.text);
          setTimeout(() => setStatus(""), 3000);
        }
      );
  };

  return (
    <div className={`${styles.container} container`}>
      <h2>Contact</h2>
      <div className={styles.contact}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z" />
          </svg>
          <h3>anjarafandresena05@gmail.com</h3>
        </div>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg>
          <h3>+261 37 51 127 31</h3>
        </div>
      </div>
      <div className={`${styles.emailing} metallic-gradient`}>
        <h4>Send me an email</h4>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label htmlFor="name">Name</label>
            <input required type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input required type="email" id="email" name="email" />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input required type="text" id="subject" name="subject" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea required id="message" name="message" />
          </div>

          <div className={styles.submit_button}>
            <button
              type="submit"
              className="tech-gradient"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send"}
            </button>
          </div>

          {status === "success" && (
            <p className={styles.success}>Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className={styles.failed}>
              Failed to send message. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
