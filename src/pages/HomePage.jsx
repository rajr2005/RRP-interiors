// Import hero card images
const bedroomModules = import.meta.glob('../assets/photos/bedroom/*.{jpg,jpeg,png,webp,avif,gif}', {
  eager: true,
  import: 'default'
});
const hallModules = import.meta.glob('../assets/photos/hall/*.{jpg,jpeg,png,webp,avif,gif}', {
  eager: true,
  import: 'default'
});
const kitchenModules = import.meta.glob('../assets/photos/kitchen/*.{jpg,jpeg,png,webp,avif,gif}', {
  eager: true,
  import: 'default'
});

const bedroomImg = Object.values(bedroomModules)[0];
const hallImg = Object.values(hallModules)[0];
const kitchenImg = Object.values(kitchenModules)[0];

const services = [
  {
    title: 'Bedroom Interiors',
    text: 'Wardrobes, storage walls, lighting details, and calm layouts shaped around daily comfort.'
  },
  {
    title: 'Hall Designs',
    text: 'Stylish TV units, seating layouts, display spaces, and welcoming finishes for modern living.'
  },
  {
    title: 'Kitchen Solutions',
    text: 'Functional modular kitchens with smart storage, clean lines, and durable materials.'
  }
];

const highlights = [
  'Custom interior work for homes',
  'Neat finishing and space planning',
  'Modern design with practical use',
  'Easy photo showcase updates later'
];

function HomePage() {
  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Interior Works Company</p>
          <h1>RRP Interiors builds beautiful spaces that feel warm, modern, and useful.</h1>
          <p className="hero-text">
            From bedrooms to halls and kitchens, we create interior solutions that improve everyday
            living with style and function.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#/photos">
              View Photo Spaces
            </a>
            <a className="button secondary" href="#/about">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card hero-card-large">
            <img 
              src={bedroomImg || 'https://via.placeholder.com/400x300?text=Premium+Interior'} 
              alt="Premium Interior Concepts" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            /> 
            
          </div>
          <div className="hero-card-grid">
            <div className="hero-card">
              <img 
                src={bedroomImg || 'https://via.placeholder.com/200x150?text=Bedroom'} 
                alt="Bedroom" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="hero-card">
              <img 
                src={hallImg || 'https://via.placeholder.com/200x150?text=Hall'} 
                alt="Hall" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="hero-card">
              <img 
                src={kitchenImg || 'https://via.placeholder.com/200x150?text=Kitchen'} 
                alt="Kitchen" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="hero-card">
              <img 
                src={bedroomImg || 'https://via.placeholder.com/200x150?text=Custom+Work'} 
                alt="Custom Work" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">What We Do</p>
          <h2>Interior work designed around your lifestyle</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article className="info-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="split-card accent-panel">
          <p className="eyebrow">Why Choose RRP Interiors</p>
          <h2>Balanced design, strong execution, and room for your ideas.</h2>
        </div>

        <div className="split-card highlight-list">
          {highlights.map((item) => (
            <div className="highlight-item" key={item}>
              <span className="highlight-dot" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
