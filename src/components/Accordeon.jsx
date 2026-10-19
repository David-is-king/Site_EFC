import { useState } from 'react';

/**
 * ACCORDEON DE LA FAQ
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
