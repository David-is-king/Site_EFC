import { useEffect } from 'react';

/**
 * GESTION DES BALISES SEO
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
