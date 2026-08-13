import { useState, useEffect } from 'react';
import Seo from '../components/Seo';
import { GALERIE } from '../data/contenus';

/**
 * GALERIE PHOTOS
 * Grille de vignettes ; un clic ouvre la photo en plein ecran (lightbox).
 * La touche Echap referme la vue, et le defilement de la page est bloque
 * pendant l'affichage pour eviter que l'arriere-plan bouge.
 */
export default function Galerie() {
  const [ouverte, setOuverte] = useState(null); // index de la photo affichee

  useEffect(() => {
    function surTouche(e) {
      if (e.key === 'Escape') setOuverte(null);
    }
    document.addEventListener('keydown', surTouche);

    // Blocage du defilement de la page quand la lightbox est ouverte
    document.body.style.overflow = ouverte !== null ? 'hidden' : '';

    return () => {
      document.removeEventListener('keydown', surTouche);
      document.body.style.overflow = '';
    };
  }, [ouverte]);

  return (
    <>
      <Seo
        titre="Galerie"
        description="Photos des sessions de formation, des travaux pratiques et des remises d'attestations au CFP-EFC."
      />

      <div className="pagehead">
        <div className="wrap">
          <h1>Galerie</h1>
          <p>Ateliers, travaux pratiques, immersions en entreprise et remise d’attestations.</p>
        </div>
      </div>

      <div className="crumb">
        <div className="wrap"><a href="/">Accueil</a> &nbsp;&rsaquo;&nbsp; Galerie</div>
      </div>

      <section>
        <div className="wrap">
          <div className="gal">
            {GALERIE.map((photo, i) => (
              <button key={i} onClick={() => setOuverte(i)} aria-label={`Agrandir : ${photo.legende}`}>
                <img src={photo.image} alt={photo.legende} loading="lazy" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {ouverte !== null && (
        <div className="lightbox" onClick={() => setOuverte(null)}>
          <button className="fermer" aria-label="Fermer">&times;</button>
          <div>
            <img src={GALERIE[ouverte].image} alt={GALERIE[ouverte].legende} />
            <p className="legende">{GALERIE[ouverte].legende}</p>
          </div>
        </div>
      )}
    </>
  );
}
