import Seo from '../components/Seo';
import Partenaires from '../components/Partenaires';
import { ATOUTS, EQUIPE, MOT_DIRECTEUR} from '../data/contenus';

/**
 * PAGE A PROPOS
 * Vision, mission, atouts, equipe et partenaires. Les textes de vision et de
 * mission sont repris mot pour mot de la plaquette institutionnelle du centre.
 */
export default function APropos() {
  return (
    <>
      <Seo
        titre="Le centre"
        description="Le CFP-EFC, centre de formation de l'Universite Internationale d'Excellence : vision, mission, equipe et partenaires."
      />

      <div className="pagehead pagehead-centre">
        <div className="wrap">
          <h1>Le centre</h1>
          <p>
            Le CFP-EFC est le centre de formation de l’Université Internationale d’Excellence. Il répond aux besoins de qualification et de perfectionnement des étudiants, des professionnels et des entreprises.
          </p>
        </div>
      </div>

      <div className="crumb">
        <div className="wrap"><a href="/">Accueil</a> &nbsp;&rsaquo;&nbsp; À propos</div>
      </div>

      <section>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, alignItems: 'start' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--navy)' }}>Vision</div>
            <h2 style={{ fontSize: 26, color: 'var(--navy)', marginBottom: 14 }}>
              Être un centre de référence en formation professionnelle
            </h2>
            <p style={{ fontFamily: "'Newsreader', serif", fontSize: 18, color: 'var(--muted)' }}>
              Reconnu pour la qualité de ses programmes et l’impact de ses formations sur l’employabilité et la performance professionnelle.
            </p>
          </div>
          <div>
            <div className="eyebrow">Mission</div>
            <ul style={{ paddingLeft: 20 }}>
              <li style={{ marginBottom: 10 }}>Former des professionnels qualifiés et compétents</li>
              <li style={{ marginBottom: 10 }}>Renforcer les capacités des apprenants et des travailleurs</li>
              <li style={{ marginBottom: 10 }}>
                Accompagner les entreprises et les institutions dans le développement de leurs ressources humaines
              </li>
              <li>Favoriser l’insertion professionnelle et l’auto-emploi</li>
            </ul>
          </div>
        </div>
      </section>

{/* MOT DU DIRECTEUR */}
      <section className="alt">
        <div className="wrap">
          <div className="titre-centre">
            <h2>{MOT_DIRECTEUR.titre}</h2>
          </div>

          <div className="mot">
            <div className="mot-texte">
              {MOT_DIRECTEUR.paragraphes.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <div className="mot-signature">
                <b>{MOT_DIRECTEUR.nom}</b>
                <span>{MOT_DIRECTEUR.fonction}</span>
              </div>
            </div>

            <div className="mot-photo">
              <img
                src={MOT_DIRECTEUR.photo}
                alt={`${MOT_DIRECTEUR.nom}, ${MOT_DIRECTEUR.fonction}`}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      
      <section className="alt">
        <div className="wrap">
          <div className="sec-title center">
            <div className="eyebrow">Nos atouts</div>
            <h2>Pourquoi choisir le CFP-EFC</h2>
          </div>
          <div className="why">
            {ATOUTS.map((a) => (
              <div key={a.titre}>
                <img className="why-icone" src={a.icone} alt="" loading="lazy" />
                <h4>{a.titre}</h4>
                <p>{a.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-title center">
            <div className="eyebrow">L&apos;equipe</div>
            <h2>Une équipe d’experts passionnés...</h2>
          </div>
          <div className="team center">
            {EQUIPE.map((m, i) => (
              <div className="mem" key={i}>
                <img src={m.photo} alt={m.nom} loading="lazy" />
                <b>{m.nom}</b>
                <span>{m.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="sec-title center" style={{ marginBottom: 24 }}>
            <div className="eyebrow">Partenaires</div>
            <h2 style={{ fontSize: 26 }}>Entreprises et institutions partenaires</h2>
          </div>
        </div>
        <Partenaires />
      </section>
    </>
  );
}