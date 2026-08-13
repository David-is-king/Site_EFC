import { Link } from 'react-router-dom';
import { CONTACT } from '../data/contenus';
import { MODALITES } from '../data/formations';

/**
 * PIED DE PAGE
 * Quatre colonnes : identite du centre, liens utiles, modalites de formation,
 * coordonnees et reseaux sociaux. Puis une barre basse avec les mentions
 * legales et le copyright (annee calculee automatiquement).
 */
export default function Footer() {
  const annee = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="fbrand">
              <img src="/logo-efc.jpg" alt="Logo du CFP-EFC" />
              <span>
                <b>CFP-EFC</b>
                <span>Excellence Formation &amp; Consulting</span>
              </span>
            </div>
            <p style={{ fontSize: '13.6px' }}>
              Centre de Formation Professionnelle de l&apos;Universite Internationale
              d&apos;Excellence. {CONTACT.adresse}, {CONTACT.ville}.
            </p>
            <div className="fsocial">
              <a href={CONTACT.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href={`mailto:${CONTACT.email}`} aria-label="Envoyer un e-mail">@</a>
            </div>
          </div>

          <div>
            <h5>Le centre</h5>
            <Link to="/a-propos">A propos</Link>
            <Link to="/a-propos">Nos formateurs</Link>
            <Link to="/galerie">Galerie</Link>
            <Link to="/faq">FAQ</Link>
          </div>

          <div>
            <h5>Formations</h5>
            {/* Les liens pointent vers le catalogue filtre sur une modalite */}
            {MODALITES.map((m) => (
              <Link key={m.id} to={`/formations?modalite=${m.id}`}>
                {m.nom}
              </Link>
            ))}
          </div>

          <div>
            <h5>Contact</h5>
            {CONTACT.telephones.map((tel) => (
              <a key={tel} href={`tel:${tel.replace(/\s/g, '')}`}>{tel}</a>
            ))}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <Link to="/contact">Nous ecrire</Link>
          </div>
        </div>
      </div>

      <div className="wrap">
        <div className="fbot">
          <Link to="/confidentialite">Politique de confidentialite</Link>
          <Link to="/confidentialite">Mentions legales</Link>
          <span className="copy">&copy; {annee} CFP-EFC — Tous droits reserves</span>
        </div>
      </div>
    </footer>
  );
}
