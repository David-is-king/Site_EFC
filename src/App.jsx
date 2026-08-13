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

/**
 * COMPOSANT RACINE
 * Definit la structure commune a toutes les pages (entete, pied de page,
 * bouton WhatsApp) et la table des routes.
 *
 * L'arborescence correspond au point 4 du cahier des charges.
 */
export default function App() {
  return (
    <>
      {/* Lien d'evitement : permet d'atteindre le contenu au clavier */}
      <a className="skip" href="#contenu">Aller au contenu</a>

      <RetourEnHaut />
      <Header />

      <main id="contenu">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/formations" element={<Formations />} />
          {/* :slug est un parametre dynamique, lu par useParams() */}
          <Route path="/formations/:slug" element={<DetailFormation />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
          {/* L'etoile capte toutes les adresses non declarees ci-dessus */}
          <Route path="*" element={<NonTrouve />} />
        </Routes>
      </main>

      <Footer />
      <BoutonWhatsApp />
    </>
  );
}
