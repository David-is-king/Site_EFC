import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BoutonWhatsApp from './components/BoutonWhatsApp';
import RetourEnHaut from './components/RetourEnHaut';

import Accueil from './pages/Accueil';
import APropos from './pages/APropos';
import Formations from './pages/Formations';
import DetailFormation from './pages/DetailFormation';
import Galerie from './pages/Galerie';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Confidentialite from './pages/Confidentialite';
import NonTrouve from './pages/NonTrouve';

// COMPOSANT RACINE
export default function App() {
  return (
    <>
      <a className="skip" href="#contenu">Aller au contenu</a>

      <RetourEnHaut />
      <Header />

      <main id="contenu">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/formations/:slug" element={<DetailFormation />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          <Route path="*" element={<NonTrouve />} />
        </Routes>
      </main>

      <Footer />
      <BoutonWhatsApp />
    </>
  );
}
