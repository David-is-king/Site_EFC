import { CONTACT } from '../data/contenus';

/**
 * BOUTON WHATSAPP FLOTTANT Present sur toutes les pages
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
