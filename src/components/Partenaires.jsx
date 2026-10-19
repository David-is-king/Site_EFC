import { PARTENAIRES } from '../data/contenus';

/**
 * BANDEAU DES PARTENAIRES — DEFILEMENT INFINI
 * La duree s'adapte au nombre de logos pour que la vitesse reste constante quel que soit le nombre de partenaires ajoutes dans contenus.js.
 */
export default function Partenaires() {
  const duree = `${PARTENAIRES.length * 5}s`; // 5 secondes par logo

  return (
    <div className="marquee">
      <div className="marquee-piste" style={{ '--duree': duree }}>
        {PARTENAIRES.map((p, i) => (
          <div className="marquee-logo" key={`a-${i}`}>
            <img src={p.logo} alt={p.nom} loading="lazy" />
          </div>
        ))}
        {PARTENAIRES.map((p, i) => (
          <div className="marquee-logo" key={`b-${i}`} aria-hidden="true">
            <img src={p.logo} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
