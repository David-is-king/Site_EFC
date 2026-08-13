import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import Accordeon from '../components/Accordeon';
import { FAQ } from '../data/contenus';

/** PAGE FAQ — les questions viennent de src/data/contenus.js */
export default function Faq() {
  return (
    <>
      <Seo
        titre="Questions frequentes"
        description="Inscription, documents à fournir, attestations, formations en entreprise : les réponses aux questions les plus posées au CFP-EFC."
      />

      <div className="pagehead">
        <div className="wrap">
          <h1>Questions fréquentes</h1>
          <p>
            Les réponses aux questions que l&apos;on nous pose le plus souvent. Si la
            votre n&apos;y figure pas, ecrivez-nous.
          </p>
        </div>
      </div>

      <div className="crumb">
        <div className="wrap"><a href="/">Accueil</a> &nbsp;&rsaquo;&nbsp; FAQ</div>
      </div>

      <section>
        <div className="wrap">
          <Accordeon questions={FAQ} />
        </div>
      </section>

      <div className="cta">
        <div className="wrap">
          <div>
            <h2>Votre question n&apos;a pas de reponse ici ?</h2>
            <p>Posez-la directement au centre, nous repondons sous 48 heures.</p>
          </div>
          <div className="acts">
            <Link className="btn light" to="/contact">Poser ma question</Link>
          </div>
        </div>
      </div>
    </>
  );
}
