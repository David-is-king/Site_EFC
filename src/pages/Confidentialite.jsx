import Seo from '../components/Seo';
import { CONTACT } from '../data/contenus';

/**
 * MENTIONS LEGALES ET POLITIQUE DE CONFIDENTIALITE
 * Les zones entre crochets sont a completer par le centre avant la mise en
 * ligne (identite de l'editeur, hebergeur retenu, numero d'immatriculation).
 */
export default function Confidentialite() {
  return (
    <>
      <Seo
        titre="Mentions légales et confidentialité"
        description="Mentions légales, éditeur, hébergeur et politique de traitement des données personnelles du site du CFP-EFC."
      />

      <div className="pagehead">
        <div className="wrap">
          <h1>Mentions légales et confidentialité</h1>
        </div>
      </div>

      <section>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <h2 style={{ color: 'var(--navy)', fontSize: 22, marginBottom: 12 }}>Editeur du site</h2>
          <p>
            Centre de Formation Professionnelle Excellence Formation et Consulting
            (CFP-EFC), {CONTACT.adresse}, {CONTACT.ville}.<br />
            Telephone : {CONTACT.telephones.join(' / ')}<br />
            E-mail : {CONTACT.email}<br />
          </p>


          <h2 style={{ color: 'var(--navy)', fontSize: 22, margin: '28px 0 12px' }}>Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus de ce site (textes, images, logos, etc.) est la propriété du CFP-EFC, sauf mention contraire. Toute reproduction sans autorisation préalable est interdite.
          </p>

          <h2 style={{ color: 'var(--navy)', fontSize: 22, margin: '28px 0 12px' }}>Données personnelles</h2>
          <p>
            Les informations transmises via les formulaires du site (nom, téléphone, adresse e-mail, message) sont utilisées uniquement pour répondre à votre demande et vous transmettre les informations sollicitées. Elles ne sont ni cédées ni vendues à des tiers.
            </p>
          <p>
            Conformément à la réglementation malienne relative à la protection des données à caractère personnel, vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant. Pour exercer ces droits, écrivez à
           {CONTACT.email}.
          </p>

          <h2 style={{ color: 'var(--navy)', fontSize: 22, margin: '28px 0 12px' }}>Cookies</h2>
          <p>
            Ce site utilise des cookies pour assurer son bon fonctionnement, mémoriser vos préférences et améliorer votre expérience de navigation. Vous pouvez à tout moment gérer ou modifier vos préférences en matière de cookies depuis les paramètres de votre navigateur.
          </p>

          <h2 style={{ color: 'var(--navy)', fontSize: 22, margin: '28px 0 12px' }}>Mise à jour de cette politique</h2>
          <p>
            Cette politique peut être mise à jour afin de refléter les évolutions du site, des services du CFP-EFC ou de la réglementation applicable. La date de dernière mise à jour sera alors modifiée.
          </p>
        </div>
      </section>
    </>
  );
}
