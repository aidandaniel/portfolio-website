import { contact } from '../data/portfolio';

function ContactPanel() {
  return (
    <section id="contact" className="content-section contact-section" aria-labelledby="contact-title">
      <div className="section-heading">
        <p className="section-kicker">Final Page / Signal Fire</p>
        <h2 id="contact-title">Get In Touch</h2>
      </div>

      <div className="contact-container manga-panel">
        <form action={contact.formAction} method="POST" encType="text/plain" className="contact-form">
          <p>{contact.intro}</p>
          <label>
            <span>Your Name</span>
            <input type="text" name="name" placeholder="Your Name" required />
          </label>
          <label>
            <span>Your Email</span>
            <input type="email" name="email" placeholder="Your Email" required />
          </label>
          <label>
            <span>Your Message</span>
            <textarea name="message" rows="5" placeholder="Your Message" required />
          </label>
          <button type="submit">Send Message</button>
        </form>

        <aside className="contact-info" aria-label="Contact details">
          <h3>Contact Details</h3>
          <p>{contact.details}</p>

          <div className="info-links">
            {contact.links.map((link) => (
              <a key={link.href} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                <span className="info-links__icon" aria-hidden="true">
                  {link.icon}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default ContactPanel;
