import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { CONTACT } from '../data/contenus';

/**
 * ENTETE DU SITE
 * Contient le bandeau de coordonnees, le logo, le menu principal fixe
 * (sticky) et le menu burger sur mobile.
 *
 * NavLink de react-router-dom ajoute automatiquement une classe quand le lien
 * correspond a la page courante : on s'en sert pour souligner l'onglet actif.
 */
const LIENS = [
  { to: '/', label: 'Accueil' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/formations', label: 'Formations' },
  { to: '/galerie', label: 'Galerie' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [ouvert, setOuvert] = useState(false);

  return (
    <>
      {/* Bandeau superieur : coordonnees cliquables */}
      <div className="topinfo">
        <div className="wrap">
          <span>{CONTACT.adresse}</span>
          <span className="right">
            {/* Le protocole tel: declenche l'appel direct depuis un mobile */}
            <a href={`tel:${CONTACT.telephones[0].replace(/\s/g, '')}`}>
              {CONTACT.telephones[0]}
            </a>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </span>
        </div>
      </div>

      <header className="header">
        <div className="wrap">
          <Link className="brand" to="/" onClick={() => setOuvert(false)}>
            <img src="/logo-efc.jpg" alt="Logo du CFP-EFC" />
            <span className="brandtxt">
              <b>CFP-EFC</b>
              <span>Excellence Formation &amp; Consulting</span>
            </span>
          </Link>

          <button
            className="burger"
            onClick={() => setOuvert(!ouvert)}
            aria-label="Ouvrir le menu"
            aria-expanded={ouvert}
          >
            <span /><span /><span />
          </button>

          <nav className={`mainnav ${ouvert ? 'ouvert' : ''}`}>
            {LIENS.map((lien) => (
              <NavLink
                key={lien.to}
                to={lien.to}
                // `end` limite la correspondance exacte pour l'accueil,
                // sinon "/" serait actif sur toutes les pages.
                end={lien.to === '/'}
                className={({ isActive }) => (isActive ? 'actif' : '')}
                onClick={() => setOuvert(false)}
              >
                {lien.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}
