import { CONTACT } from '../data/contenus';

/**
 * BOUTON WHATSAPP FLOTTANT
 * Present sur toutes les pages. C'est le canal de contact le plus utilise par
 * le public vise, d'ou sa presence permanente demandee au cahier des charges.
 * Le parametre `text` pre-remplit le message dans l'application.
 */
export default function BoutonWhatsApp() {
  const message = encodeURIComponent(
    "Bonjour, je souhaite des informations sur vos formations."
  );

  return (
    <a
      className="wa"
      href={`https://wa.me/${CONTACT.whatsapp}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter le centre sur WhatsApp"
    >
      WhatsApp
    </a>
  );
}
