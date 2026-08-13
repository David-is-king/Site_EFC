import { PARTENAIRES } from '../data/contenus';

/**
 * BANDEAU DES PARTENAIRES — DEFILEMENT INFINI
 * -------------------------------------------
 * Le principe est entierement en CSS (animation `defileGauche` dans
 * styles.css). Ici, on se contente de dupliquer la liste des logos.
 *
 * Pourquoi dupliquer ? L'animation fait glisser la piste de 0 a -50 % de sa
 * largeur. Comme la seconde moitie est la copie exacte de la premiere, a
 * l'instant ou l'animation reboucle, l'image affichee est identique : l'oeil
 * ne percoit aucune coupure. C'est la technique du "marquee sans fin".
 *
 * La duree s'adapte au nombre de logos pour que la vitesse reste constante,
 * quel que soit le nombre de partenaires ajoutes dans contenus.js.
 */
export default function Partenaires() {
  const duree = `${PARTENAIRES.length * 5}s`; // 5 secondes par logo

  return (
    <div className="marquee">
      <div className="marquee-piste" style={{ '--duree': duree }}>
        {/* Premiere copie, puis seconde copie masquee aux lecteurs d'ecran
            avec aria-hidden pour ne pas annoncer deux fois les memes logos. */}
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
