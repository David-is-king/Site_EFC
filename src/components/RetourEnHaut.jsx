import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Remet la page en haut a chaque changement d'adresse.
 * Sans cela, en passant d'une fiche formation a une autre, on resterait au
 * milieu de la page, ce qui donne l'impression que rien ne s'est passe.
 */
export default function RetourEnHaut() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
