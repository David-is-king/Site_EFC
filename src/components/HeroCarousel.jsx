import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { DIAPOS } from '../data/contenus';

/**
 * BANNIERE ANIMEE DE LA PAGE D'ACCUEIL
 * ------------------------------------
 * Chaque photo apparait en fondu, zoome lentement (effet "Ken Burns", defini
 * par l'animation CSS `zoomLent`), puis laisse la place a la suivante.
 *
 * Le zoom est purement CSS : la classe `.active` declenche l'animation. Le
 * composant React ne fait qu'une chose, changer l'index de la diapo courante.
 *
 * DUREE : constante ci-dessous. Elle doit rester coherente avec la duree de
 * l'animation `zoomLent` dans styles.css (7 s), sinon le zoom se fige avant
 * le changement de photo.
 */
const DUREE_DIAPO = 7000; // millisecondes

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);

  // useCallback evite de recreer ces fonctions a chaque rendu, ce qui
  // relancerait inutilement le minuteur du useEffect.
  const suivante = useCallback(() => {
    // Le modulo ramene a 0 quand on depasse la derniere diapo : boucle infinie.
    setIndex((i) => (i + 1) % DIAPOS.length);
  }, []);

  const precedente = useCallback(() => {
    setIndex((i) => (i - 1 + DIAPOS.length) % DIAPOS.length);
  }, []);

  // Defilement automatique. Le minuteur est reinitialise a chaque changement
  // d'index : si l'utilisateur clique sur une fleche, il repart de zero.
  useEffect(() => {
    const minuteur = setTimeout(suivante, DUREE_DIAPO);
    // Nettoyage : indispensable, sinon les minuteurs s'accumulent.
    return () => clearTimeout(minuteur);
  }, [index, suivante]);

  return (
    <div className="hero">
      {DIAPOS.map((diapo, i) => (
        <div key={i} className={`hero-diapo ${i === index ? 'active' : ''}`}>
          <img
            src={diapo.image}
            alt=""
            /* La premiere image est chargee en priorite, les suivantes a la
               demande : cela allege le premier affichage sur connexion lente. */
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="hero-voile" />
        </div>
      ))}

      {/* Le texte est en dehors de la boucle : il change avec l'index mais ne
          subit pas le fondu, ce qui le garde toujours lisible. */}
      <div className="hero-contenu">
        <div className="wrap">
          <div className="eyebrow">
            Centre de formation de l&apos;Universite Internationale d&apos;Excellence
          </div>
          <h1>{DIAPOS[index].titre}</h1>
          <p className="lead">{DIAPOS[index].texte}</p>
          <div className="acts">
            <Link className="btn" to="/formations">Voir les formations</Link>
            <Link className="btn light" to="/contact">Former mes equipes</Link>
          </div>
        </div>
      </div>

      <button className="hero-fleche prev" onClick={precedente} aria-label="Photo precedente">
        &#8249;
      </button>
      <button className="hero-fleche next" onClick={suivante} aria-label="Photo suivante">
        &#8250;
      </button>

      <div className="hero-puces">
        {DIAPOS.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'actif' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Afficher la photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
