const logoModules = import.meta.glob('../assets/logo/*.{jpg,jpeg,png,webp,avif,gif,svg}', {
  eager: true,
  import: 'default'
});

const logoImage = Object.values(logoModules)[0];

function Header({ currentRoute }) {
  return (
    <header className="site-header">
      <a className="brand" href="#/">
        {logoImage ? (
          <img className="brand-logo-image" src={logoImage} alt="RRP Interiors logo" />
        ) : (
          <span className="brand-mark">RRP</span>
        )}
        <span className="brand-text">Interiors</span>
      </a>

      <nav className="main-nav">
        <a className={currentRoute === 'home' ? 'nav-link active' : 'nav-link'} href="#/">
          Home
        </a>
        <a className={currentRoute === 'about' ? 'nav-link active' : 'nav-link'} href="#/about">
          About
        </a>
        <a className={currentRoute === 'photos' ? 'nav-link active' : 'nav-link'} href="#/photos">
          Photos
        </a>
      </nav>
    </header>
  );
}

export default Header;
