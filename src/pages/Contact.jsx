import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Seo from '../components/Seo';
import { CONTACT } from '../data/contenus';
import { FORMATIONS, getFormation } from '../data/formations';
//Cle publique Web3Forms — obtenue sur https://web3forms.com
const CLE_WEB3FORMS = '30ce3571-45d9-4614-b0f5-3555650e5a42';
/**
 * PAGE CONTACT
 * Formulaire a gauche, coordonnees et carte a droite.
 
 * ------------------------------------------------------------------------
 * ENVOI DES MESSAGES 
 * ------------------------------------------------------------------------
 * Les demandes sont transmises par Web3Forms a la boite du centre
 */
export default function Contact() {
  const [params] = useSearchParams();
  const formationDepuisUrl = params.get('formation');
  const estRappel = params.get('rappel') === '1';

  const [donnees, setDonnees] = useState({
    nom: '',
    telephone: '',
    email: '',
    profil: 'particulier',
    formation: formationDepuisUrl || '',
    message: estRappel ? 'Je souhaite être rappelé au sujet de cette formation.' : '',
  });

  const [erreurs, setErreurs] = useState({});
  const [envoye, setEnvoye] = useState(false);

  // Passe a true pendant l'appel reseau : sert a desactiver le bouton et a
  // afficher "Envoi en cours...", pour eviter les doubles soumissions.
  const [envoiEnCours, setEnvoiEnCours] = useState(false);


  // Un seul gestionnaire pour tous les champs : on se sert de l'attribut
  // name de l'input comme cle dans l'objet d'etat.
  function changer(e) {
    const { name, value } = e.target;
    setDonnees((d) => ({ ...d, [name]: value }));
  }

  function valider() {
    const e = {};
    if (!donnees.nom.trim()) e.nom = 'Merci d\u2019indiquer votre nom.';
    if (!donnees.telephone.trim() && !donnees.email.trim()) {
      e.telephone = 'Indiquez au moins un téléphone ou un e-mail.';
    }
    // Verification simple du format de l'e-mail s'il est renseigne
    if (donnees.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(donnees.email)) {
      e.email = 'Cette adresse e-mail ne semble pas valide.';
    }
    if (!donnees.message.trim()) e.message = 'Merci de décrire votre demande.';
    setErreurs(e);
    return Object.keys(e).length === 0;
  }

   async function envoyer(e) {
      e.preventDefault();
      if (!valider()) return;
  
      setEnvoiEnCours(true);
      setErreurs({});
  
      try {
        const reponse = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: CLE_WEB3FORMS,
  
            // Objet et expediteur tels qu'ils apparaitront dans la boite du centre
            subject: `Demande depuis le site — ${donnees.nom}`,
            from_name: 'Site web CFP-EFC',
  
            // Permet de repondre directement au visiteur depuis la messagerie
            replyto: donnees.email || undefined,
  
            // Contenu de la demande. On transmet le TITRE de la formation et non
            // son slug, pour que l'e-mail recu reste lisible par le centre.
            nom: donnees.nom,
            telephone: donnees.telephone,
            email: donnees.email,
            profil:
              donnees.profil === 'entreprise'
                ? 'Entreprise ou institution'
                : 'Particulier',
            formation: donnees.formation
              ? getFormation(donnees.formation)?.titre
              : 'Non précisée',
            message: donnees.message,
          }),
        });
  
        const resultat = await reponse.json();
        if (!resultat.success) throw new Error(resultat.message);
  
        setEnvoye(true);
        setDonnees({
          nom: '', telephone: '', email: '',
          profil: 'particulier', formation: '', message: '',
        });
      } catch (err) {
        console.error('Échec de l\u2019envoi :', err);
        setErreurs({
          global: "L'envoi a échoué. Réessayez, ou appelez directement le centre.",
        });
      } finally {
        // `finally` s'execute dans tous les cas : le bouton est toujours reactive,
        // meme si l'envoi a echoue.
        setEnvoiEnCours(false);
      }
    }

  const titreFormation = formationDepuisUrl
    ? getFormation(formationDepuisUrl)?.titre
    : null;

  return (
    <>
      <Seo
        titre="Nous contacter"
        description="Contactez le CFP-EFC à Badalabougou, Bamako : formulaire, téléphone, e-mail et localisation."
      />

      <div className="pagehead">
        <div className="wrap">
          <h1>Nous contacter</h1>
          <p>
            Une question sur un programme, une demande pour votre entreprise ou une
            visite du centre : dites-nous ce dont vous avez besoin.
          </p>
        </div>
      </div>

      <div className="crumb">
        <div className="wrap"><a href="/">Accueil</a> &nbsp;&rsaquo;&nbsp; Contact</div>
      </div>

      <section>
        <div className="wrap">
          <div className="formgrid">
            <div>
              <h2 style={{ fontSize: 22, color: 'var(--navy)', marginBottom: 20 }}>
                Formulaire de demande
              </h2>

              {titreFormation && (
                <p style={{ fontSize: 14, color: 'var(--muted)' }}>
                  Votre demande concerne la formation <b>{titreFormation}</b>.
                </p>
              )}

              {envoye && (
                <div className="succes">
                  Merci, votre demande a bien été prise en compte. Le centre vous
                  repond sous 48 heures.
                </div>
              )}

              <form onSubmit={envoyer} noValidate>
                 <input
                  type="checkbox"
                  name="botcheck"
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />
                <div className="two">
                  <div>
                    <label htmlFor="nom">Nom et prénom</label>
                    <input id="nom" name="nom" value={donnees.nom} onChange={changer} placeholder="Votre nom complet" />
                    {erreurs.nom && <p className="erreur">{erreurs.nom}</p>}
                  </div>
                  <div>
                    <label htmlFor="telephone">Téléphone</label>
                    <input id="telephone" name="telephone" value={donnees.telephone} onChange={changer} placeholder="+223 ..." />
                    {erreurs.telephone && <p className="erreur">{erreurs.telephone}</p>}
                  </div>
                </div>

                <label htmlFor="email">Adresse e-mail</label>
                <input id="email" name="email" type="email" value={donnees.email} onChange={changer} placeholder="vous@exemple.com" />
                {erreurs.email && <p className="erreur">{erreurs.email}</p>}

                <label htmlFor="profil">Je suis</label>
                <select id="profil" name="profil" value={donnees.profil} onChange={changer}>
                  <option value="particulier">Un particulier</option>
                  <option value="entreprise">Une entreprise ou une institution</option>
                </select>

                <label htmlFor="formation">Formation concernée</label>
                <select id="formation" name="formation" value={donnees.formation} onChange={changer}>
                  <option value="">Je ne sais pas encore</option>
                  {FORMATIONS.map((f) => (
                    <option key={f.slug} value={f.slug}>{f.titre}</option>
                  ))}
                </select>

                <label htmlFor="message">Votre message</label>
                <textarea id="message" name="message" rows="5" value={donnees.message} onChange={changer} placeholder="Decrivez votre besoin ou votre question" />
                {erreurs.message && <p className="erreur">{erreurs.message}</p>}

                <p style={{ fontSize: 12.6, color: 'var(--muted)' }}>
                  Vos données servent uniquement à traiter votre demande. Elles ne
                  sont ni cédées ni utilisées a d&apos;autres fins.
                </p>

                <button className="btn" type="submit">Envoyer ma demande</button>
              </form>
            </div>

            <div>
              <div className="infobox">
                <h3>Coordonnees</h3>
                <div className="ib">
                  <div>
                    <b>Adresse</b>
                    {CONTACT.adresse}<br />{CONTACT.ville}
                  </div>
                </div>
                <div className="ib">
                  <div>
                    <b>Telephone</b>
                    {CONTACT.telephones.map((t) => (
                      <span key={t}>
                        <a href={`tel:${t.replace(/\s/g, '')}`}>{t}</a><br />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="ib">
                  <div>
                    <b>E-mail</b>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </div>
                </div>
                <div className="ib">
                  <div>
                    <b>Horaires</b>
                    {CONTACT.horaires.map((h) => <span key={h}>{h}<br /></span>)}
                  </div>
                </div>
              </div>

              {/* Carte Google Maps. loading="lazy" evite de charger la carte
                  tant que l'utilisateur n'a pas fait defiler jusqu'ici. */}
              <div className="carte">
                <iframe
                  src={CONTACT.carteEmbed}
                  title="Localisation du CFP-EFC a Badalabougou"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
