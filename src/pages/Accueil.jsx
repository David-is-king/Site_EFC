import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import HeroCarousel from '../components/HeroCarousel';
import Compteur from '../components/Compteur';
import Partenaires from '../components/Partenaires';
import CarteFormation from '../components/CarteFormation';
import { CHIFFRES, ATOUTS, TEMOIGNAGES } from '../data/contenus';
import { FORMATIONS, MODALITES } from '../data/formations';

/**
 * PAGE D'ACCUEIL
 * Enchaine : banniere animee, bandeau des quatre modalites, chiffres cles
 * animes, formations phares, atouts, temoignages, partenaires defilants et
 * appel a l'action.
 */
export default function Accueil() {
  // On met en avant les trois premieres formations du catalogue.
  // Pour changer la selection, il suffit de reordonner formations.js.
  const phares = FORMATIONS.slice(0, 3);

  return (
    <>
      <Seo
        titre="Centre de formation professionnelle a Bamako"
        description="Le CFP-EFC forme etudiants, professionnels et entreprises a Bamako : formation qualifiante, tutorat, apprentissage dual et formation continue."
      />

      <HeroCarousel />

      {/* Bandeau des quatre modalites : il chevauche le bas de la banniere */}
      <div className="modalites">
        <div className="wrap">
          <div className="modgrid">
            {MODALITES.map((m, i) => (
              <Link
                key={m.id}
                className="mod"
                to={`/formations?modalite=${m.id}`}
                style={{ '--couleur': m.couleur }}
              >
                <div className="n">Modalité {String(i + 1).padStart(2, '0')}</div>
                <h3>{m.nom}</h3>
                <p>{m.resume}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Chiffres cles : les compteurs demarrent quand la section entre a l'ecran */}
      <section>
        <div className="wrap">
          <div className="stats">
            {CHIFFRES.map((c) => (
              <div className="stat" key={c.libelle}>
                <Compteur valeur={c.valeur} suffixe={c.suffixe} />
                <span>{c.libelle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="sec-title">
            <div className="eyebrow">Catalogue</div>
            <h2>Nos formations les plus demandées</h2>
            <p>
              Selection des programmes qui ouvrent le plus rapidement sur un emploi
              ou une évolution de poste.
            </p>
          </div>
          <div className="cards">
            {phares.map((f) => <CarteFormation key={f.slug} formation={f} />)}
          </div>
          <p style={{ marginTop: 28 }}>
            <Link className="btn ghost" to="/formations">Parcourir tout le catalogue</Link>
          </p>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-title">
            <div className="eyebrow">Pourquoi le CFP-EFC</div>
            <h2>Un centre adossé à l&apos;université, tourne vers l&apos;emploi</h2>
          </div>
          <div className="why">
            {ATOUTS.map((a) => (
              <div key={a.titre}>
                <h4>{a.titre}</h4>
                <p>{a.texte}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <div className="sec-title">
            <div className="eyebrow">Temoignages</div>
            <h2>Ce qu&apos;en disent nos anciens</h2>
          </div>
          <div className="quotes">
            {TEMOIGNAGES.map((t) => (
              <div className="quote" key={t.nom}>
                <p>&laquo; {t.texte} &raquo;</p>
                <div className="who">
                  <div className="av">{t.initiales}</div>
                  <div>
                    <b>{t.nom}</b>
                    <span>{t.formation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bandeau des partenaires : defilement continu vers la gauche */}
      <section className="alt" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-title" style={{ marginBottom: 24 }}>
            <div className="eyebrow">Ils nous font confiance</div>
            <h2 style={{ fontSize: 26 }}>Nos partenaires</h2>
            <p>
              Grâce à la collaboration avec nos partenaires, nous offrons à nos apprenants des opportunités de stage et d’insertion professionnelle.
            </p>
          </div>
        </div>
        <Partenaires />
      </section>

      <div className="cta">
        <div className="wrap">
          <div>
            <h2>Une question sur une formation ?</h2>
            <p>Ecrivez-nous : nous répondrons sous 48 heures.</p>
          </div>
          <div className="acts">
            <Link className="btn light" to="/contact">Nous écrire</Link>
          </div>
        </div>
      </div>
    </>
  );
}
