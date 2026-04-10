import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PhotosPage from './pages/PhotosPage.jsx';

const getRouteFromHash = () => {
  const hash = window.location.hash.replace('#', '');

  if (hash === '/about') {
    return 'about';
  }

  if (hash === '/photos') {
    return 'photos';
  }

  return 'home';
};

function App() {
  const [route, setRoute] = useState(getRouteFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(getRouteFromHash());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);

    if (!window.location.hash) {
      window.location.hash = '/';
    }

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="app-shell">
      <Header currentRoute={route} />
      <main>
        {route === 'home' && <HomePage />}
        {route === 'about' && <AboutPage />}
        {route === 'photos' && <PhotosPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
