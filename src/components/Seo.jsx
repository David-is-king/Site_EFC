import { useEffect } from 'react';

/**
 * GESTION DES BALISES SEO
 * ----------------------
 * Un site React n'a qu'un seul index.html : il faut donc mettre a jour le
 * titre et la meta description a la main a chaque changement de page.
 *
 * Ce petit composant ne rend rien a l'ecran, il agit uniquement sur le
 * document. On l'appelle en haut de chaque page.
 */
export default function Seo({ titre, description }) {
  useEffect(() => {
    document.title = `${titre} | CFP-EFC Bamako`;

    let balise = document.querySelector('meta[name="description"]');
    if (!balise) {
      balise = document.createElement('meta');
      balise.setAttribute('name', 'description');
      document.head.appendChild(balise);
    }
    balise.setAttribute('content', description);
  }, [titre, description]);

  return null;
}
