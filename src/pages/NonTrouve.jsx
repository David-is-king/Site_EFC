import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

/** PAGE 404 — affichee pour toute adresse inconnue. */
export default function NonTrouve() {
  return (
    <>
      <Seo titre="Page introuvable" description="La page demandee n'existe pas." />
      <div className="wrap p404">
        <b>404</b>
        <h1 style={{ color: 'var(--navy)', margin: '18px 0 12px' }}>Page introuvable</h1>
        <p style={{ color: 'var(--muted)' }}>
          La page que vous cherchez n&apos;existe pas ou a ete deplacee.
        </p>
        <Link className="btn" to="/" style={{ marginTop: 10 }}>Retour a l&apos;accueil</Link>
      </div>
    </>
  );
}
