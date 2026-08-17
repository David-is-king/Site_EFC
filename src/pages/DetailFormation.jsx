import { useParams, Link, Navigate } from 'react-router-dom';
import Seo from '../components/Seo';
import CarteFormation from '../components/CarteFormation';
import { getFormation, getModalite, FORMATIONS } from '../data/formations';

/**
 * FICHE DETAILLEE D'UNE FORMATION
 * Le slug est lu dans l'adresse (/formations/:slug) puis recherche dans le
 * catalogue. Si aucune formation ne correspond, on redirige vers la page 404.
 *
 * RAPPEL DU CAHIER DES CHARGES : la colonne de droite affiche les modalites
 * pratiques mais AUCUN tarif. La conversion se fait par les deux boutons de
 * demande d'informations.
 */
export default function DetailFormation() {
  const { slug } = useParams();
  const formation = getFormation(slug);

  if (!formation) return <Navigate to="/404" replace />;

  const modalite = getModalite(formation.modalite);

  // Suggestions : trois autres formations, en privilegiant la meme modalite.
  const proches = FORMATIONS
    .filter((f) => f.slug !== formation.slug)
    .sort((a, b) => (b.modalite === formation.modalite) - (a.modalite === formation.modalite))
    .slice(0, 3);

  return (
    <>
      <Seo titre={formation.titre} description={formation.accroche} />

      <div className="pagehead pagehead-centre">
        <div className="wrap">
          <span className="tag" style={{ '--couleur': modalite.couleur }}>
            {modalite.nom}
          </span>
          <h1 style={{ marginTop: 14 }}>{formation.titre}</h1>
          <p>{formation.accroche}</p>
        </div>
      </div>

      <div className="crumb">
        <div className="wrap">
          <Link to="/">Accueil</Link> &nbsp;&rsaquo;&nbsp;
          <Link to="/formations"> Formations</Link> &nbsp;&rsaquo;&nbsp; {formation.titre}
        </div>
      </div>

      <section>
        <div className="wrap">
          <div className="detail">
            <div>
              <h2>A qui s&apos;adresse cette formation</h2>
              <ul>{formation.pourQui.map((x, i) => <li key={i}>{x}</li>)}</ul>

              <h2>Objectifs pédagogiques</h2>
              <ul>{formation.objectifs.map((x, i) => <li key={i}>{x}</li>)}</ul>

              <h2>Programme</h2>
              <div className="prog">
                {formation.programme.map((m, i) => (
                  <div key={i}>
                    <b>{m.titre}</b>
                    <span>{m.contenu}</span>
                  </div>
                ))}
              </div>

              <h2>Prérequis</h2>
              <p>{formation.prerequis}</p>

              <h2>Débouchés</h2>
              <p>{formation.debouches}</p>
            </div>

            <aside className="aside">
              <div className="top">
                <b>En resumé</b>
              </div>
              <div className="rows">
                <div className="row"><span>Modalité</span><b>{modalite.nom}</b></div>
                <div className="row"><span>Durée</span><b>{formation.duree} {formation.volume}</b></div>
                <div className="row"><span>Lieu</span><b>{formation.lieu}</b></div>
                <div className="row"><span>Validation</span><b>{formation.validation}</b></div>
              </div>
              <div className="foot">
                {/* Le lien transporte l'intitule de la formation, que la page
                    Contact pre-remplira automatiquement dans le formulaire. */}
                <Link className="btn bloc" to={`/contact?formation=${formation.slug}`}>
                  Démander des informations
                </Link>
                <Link className="btn ghost bloc" to={`/contact?formation=${formation.slug}&rappel=1`} style={{ marginTop: 9 }}>
                  Être rappelé
                </Link>
                <small>
                  Le programme détaillé et les conditions d&apos;inscription vous sont
                  envoyés par e-mail.
                </small>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="sec-title">
            <div className="eyebrow">À decouvrir aussi</div>
            <h2>Formations prôches</h2>
          </div>
          <div className="cards">
            {proches.map((f) => <CarteFormation key={f.slug} formation={f} />)}
          </div>
        </div>
      </section>
    </>
  );
}