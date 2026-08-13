import { useState, useEffect, useRef } from 'react';

/**
 * COMPTEUR ANIME
 * --------------
 * Le nombre defile rapidement de 0 jusqu'a la valeur cible.
 *
 * Deux subtilites :
 *
 * 1. L'animation ne demarre que lorsque le bloc entre dans l'ecran. On utilise
 *    pour cela IntersectionObserver, l'API du navigateur qui previent quand un
 *    element devient visible. Sans cela, le compteur se serait deja termine
 *    avant que l'utilisateur ait fait defiler la page jusqu'a lui.
 *
 * 2. On anime avec requestAnimationFrame plutot qu'avec setInterval : le
 *    navigateur synchronise alors le calcul avec le rafraichissement de
 *    l'ecran, ce qui donne un defilement fluide meme sur un appareil modeste.
 */
export default function Compteur({ valeur, suffixe = '', duree = 1600 }) {
  const [affiche, setAffiche] = useState(0);
  const ref = useRef(null);
  const dejaLance = useRef(false); // evite de relancer si on remonte la page

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
          // fin de course. C'est ce qui donne l'impression que le compteur
          // "se pose" sur sa valeur finale au lieu de s'arreter net.
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
