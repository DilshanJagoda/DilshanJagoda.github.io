const Contact = () => (
  <div className="section-wrapper reveal" id="contact">
    <div className="section-inner">
      <span className="section-label">Contact</span>
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle contact-sub">
        I&apos;m open to opportunities, collaborations, or just a conversation
        about technology.
      </p>

      <div className="contact-links">
        <a
          href="https://github.com/DilshanJagoda"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-icon">🐙</span>
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/vimukth-thisarana-dilshan-b29899319"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <span className="contact-icon">💼</span>
          LinkedIn
        </a>

        <a href="mailto:dilshanjagoda2008@gmail.com" className="contact-link">
          <span className="contact-icon">✉️</span>
          Email
        </a>
      </div>

      <div className="contact-footer">
        Built with React + Vite &middot; &copy; {new Date().getFullYear()}{" "}
        Dilshan Jagoda
      </div>
    </div>
  </div>
);

export default Contact;
