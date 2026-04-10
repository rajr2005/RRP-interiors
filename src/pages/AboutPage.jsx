const mdPhotoModules = import.meta.glob('../assets/md/*.{jpg,jpeg,png,webp,avif,gif}', {
  eager: true,
  import: 'default'
});

const mdPhoto = Object.values(mdPhotoModules)[0];

const achievements = [
  {
    value: '60+',
    label: 'Villa Interiors',
    note: 'Successfully completed for Jayabarath across multiple locations.'
  },
  {
    value: '100+',
    label: 'Private House Interiors',
    note: 'Delivered as customized residential interior projects.'
  },
  {
    value: '20+',
    label: 'Company Interiors',
    note: 'Executed for professional and commercial work environments.'
  }
];

function AboutPage() {
  return (
    <div className="page">
      <section className="section about-hero about-layout">
        <div className="section-heading">
          <p className="eyebrow">About RRP Interiors</p>
          <h1>Professional interior works shaped by experience, trust, and practical design.</h1>
          <p>
            RRP Interiors delivers bedroom, hall, kitchen, residential, and commercial interior
            solutions with strong attention to planning, finishing quality, and customer needs.
          </p>
        </div>

        <div className="md-card">
          {mdPhoto ? (
            <img className="md-photo" src={mdPhoto} alt="Managing Director A. Ramaguru" />
          ) : (
            <div className="md-photo-placeholder">
              <span>Add MD Photo</span>
            </div>
          )}
          <div className="md-copy">
            <p className="eyebrow">Managing Director</p>
            <h2>A. Ramaguru</h2>
            <p>
              Leading RRP Interiors with a focus on quality execution, professional standards, and
              long-term client trust.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Professional Achievements</p>
          <h2>Track record built through completed work across residential and company interiors</h2>
        </div>

        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <article className="info-card achievement-card" key={achievement.label}>
              <p className="achievement-value">{achievement.value}</p>
              <h3>{achievement.label}</h3>
              <p>{achievement.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-grid">
        <article className="info-card">
          <h2>Our Focus</h2>
          <p>
            We design and execute interior work for bedrooms, halls, kitchens, villas, houses, and
            company spaces with a balance of beauty, utility, and efficient use of space.
          </p>
        </article>

        <article className="info-card contact-card">
          <h2>Contact</h2>
          <p>
            Phone:{' '}
            <a href="tel:+919092177550" className="contact-link">
              +91 90921 77550
            </a>
          </p>
          <p>
            Whatsapp:{' '}
            <a href="https://wa.me/919092177550?text=Hello%20I%20am%20interested%20in%20your%20services" className="contact-link" target="_blank" >
              <button className="button whatsapp">WhatsApp Us</button>
            </a>
          </p>
          <p>
            Email:{' '}
            <a href="mailto:rguru6324@gmail.com" className="contact-link">
              rguru6324@gmail.com
            </a>
          </p>
          <p className="contact-note">
            Clicking the phone number opens the phone app. Clicking the email opens the mail app.
          </p>
        </article>

        <article className="info-card">
          <h2>Work Style</h2>
          <p>
            Every project is approached with careful planning, neat material selection, clean site
            execution, and designs that support real daily living.
          </p>
        </article>
      </section>
    </div>
  );
}

export default AboutPage;
