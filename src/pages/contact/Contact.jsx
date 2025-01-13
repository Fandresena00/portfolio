import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className="container">
      <div className={styles.emailing}>
        <h2>Contact</h2>
        <h4>Send me an email</h4>
        <form>
          <div>
            <label htmlFor="name">your name</label>
            <input required type="text" id="name" name="name" />
          </div>
          <div>
            <label htmlFor="email">e-mail</label>
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

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
