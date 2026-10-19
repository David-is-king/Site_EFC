import { Link } from 'react-router-dom';
import { getModalite } from '../data/formations';

/**
 * CARTE D'UNE FORMATION
 * Utilisee sur l'accueil, dans le catalogue et dans les formations proches
 */
export default function CarteFormation({ formation }) {
  const modalite = getModalite(formation.modalite);

  return (
    <Link className="card" to={`/formations/${formation.slug}`}>
      <div className="ph">
        <img src={formation.image} alt={formation.titre} loading="lazy" />
      </div>
      <div className="body">
        <span className="tag" style={{ '--couleur': modalite.couleur }}>
          {modalite.nom}
        </span>
        <h3>{formation.titre}</h3>
        <p>{formation.accroche}</p>
        <div className="meta">
        </div>
        <span className="go">Voir le programme &rarr;</span>
      </div>
    </Link>
  );
}
