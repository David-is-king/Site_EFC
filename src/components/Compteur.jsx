import { useState, useEffect, useRef } from 'react';

/**
 * COMPTEUR ANIME
 * Le nombre defile rapidement de 0 jusqu'a la valeur cible.
 *
 * Deux subtilites :
 *
 * 1. L'animation ne demarre que lorsque le bloc entre dans l'ecran. On utilise
 *    pour cela IntersectionObserver puis on anime avec requestAnimationFrame 
 */
export default function Compteur({ valeur, suffixe = '', duree = 1600 }) {
  const [affiche, setAffiche] = useState(0);
  const ref = useRef(null);
  const dejaLance = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observateur = new IntersectionObserver(
      (entrees) => {
        const visible = entrees[0].isIntersecting;
        if (!visible || dejaLance.current) return;
        dejaLance.current = true;

        const depart = performance.now();

        function animer(maintenant) {
          // progression va de 0 (debut) a 1 (fin)
          const progression = Math.min((maintenant - depart) / duree, 1);

          // Fonction d'attenuation : demarrage rapide puis ralentissement en
          // fin de course
          const attenuee = 1 - Math.pow(1 - progression, 3);

          setAffiche(Math.round(attenuee * valeur));

          if (progression < 1) requestAnimationFrame(animer);
        }

        requestAnimationFrame(animer);
      },
      { threshold: 0.4 } // se declenche quand 40 % du bloc est visible
    );

    observateur.observe(element);
    return () => observateur.disconnect();
  }, [valeur, duree]);

  return (
    <b ref={ref}>
      {affiche}
      {suffixe && <sup>{suffixe}</sup>}
    </b>
  );
}
