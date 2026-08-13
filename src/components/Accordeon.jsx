import { useState } from 'react';

/**
 * ACCORDEON DE LA FAQ
 * Une seule question ouverte a la fois. L'index de la question ouverte est
 * conserve dans l'etat ; cliquer sur celle qui est deja ouverte la referme.
 *
 * Le contenu n'est pas simplement masque en CSS : il est retire du DOM quand
 * la question est fermee, ce qui evite que les lecteurs d'ecran lisent des
 * reponses invisibles.
 */
export default function Accordeon({ questions }) {
  const [ouverte, setOuverte] = useState(0);

  return (
    <div className="faq">
      {questions.map((q, i) => (
        <div key={i} className={`q ${ouverte === i ? 'ouvert' : ''}`}>
          <button
            onClick={() => setOuverte(ouverte === i ? -1 : i)}
            aria-expanded={ouverte === i}
          >
            {q.question}
          </button>
          {ouverte === i && <div className="a">{q.reponse}</div>}
        </div>
      ))}
    </div>
  );
}
