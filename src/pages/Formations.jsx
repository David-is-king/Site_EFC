import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Seo from '../components/Seo';
import CarteFormation from '../components/CarteFormation';
import { FORMATIONS, MODALITES, PUBLICS } from '../data/formations';

//CATALOGUE DES FORMATIONS

export default function Formations() {
  const [params, setParams] = useSearchParams();
  const [modalite, setModalite] = useState(params.get('modalite') || 'toutes');
  const [publicCible, setPublicCible] = useState('tous');
  const [recherche, setRecherche] = useState('');

 
  useEffect(() => {
    setModalite(params.get('modalite') || 'toutes');
  }, [params]);

  function changerModalite(id) {
    setModalite(id);
    // On met a jour l'URL sans recharger la page
    if (id === 'toutes') setParams({});
    else setParams({ modalite: id });
  }


  const resultats = useMemo(() => {
    return FORMATIONS.filter((f) => {
      const okModalite = modalite === 'toutes' || f.modalite === modalite;
      const okPublic = publicCible === 'tous' || f.publics.includes(publicCible);
      const texte = `${f.titre} ${f.accroche}`.toLowerCase();
      const okRecherche = texte.includes(recherche.toLowerCase().trim());
      return okModalite && okPublic && okRecherche;
    });
  }, [modalite, publicCible, recherche]);

  return (
    <>
      <Seo
        titre="Catalogue des formations"
        description="Formations qualifiantes, en tutorat, en apprentissage dual et formation continue au CFP-EFC a Bamako."
      />

      <div className="pagehead pagehead-centre">
        <div className="wrap">
          <h1>Catalogue des formations</h1>
          <p>
           Nos programmes sont organisés selon les quatre modalités du centre.
Choisissez celle qui correspond le mieux à votre situation.
          </p>
        </div>
      </div>

      <div className="crumb">
        <div className="wrap"><a href="/">Accueil</a> &nbsp;&rsaquo;&nbsp; Formations</div>
      </div>

      <section>
        <div className="wrap">
          <div className="filters">
            <span className="lab">Modalité</span>
            <button
              className={`chip ${modalite === 'toutes' ? 'actif' : ''}`}
              onClick={() => changerModalite('toutes')}
            >
              Toutes
            </button>
            {MODALITES.map((m) => (
              <button
                key={m.id}
                className={`chip ${modalite === m.id ? 'actif' : ''}`}
                onClick={() => changerModalite(m.id)}
              >
                {m.nom}
              </button>
            ))}
            <input
              className="search"
              placeholder="Rechercher une formation..."
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              aria-label="Rechercher une formation"
            />
          </div>

          <p style={{ color: 'var(--muted)', fontSize: 14, marginBottom: 22 }}>
            {resultats.length === 0
              ? 'Aucune formation ne correspond a votre selection.'
              : `${resultats.length} formation${resultats.length > 1 ? 's' : ''} correspond${resultats.length > 1 ? 'ent' : ''} a votre selection.`}
          </p>

          <div className="cards">
            {resultats.map((f) => <CarteFormation key={f.slug} formation={f} />)}
          </div>
        </div>
      </section>
    </>
  );
}
