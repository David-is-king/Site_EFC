import CarteFormation from './CarteFormation';
import { FORMATIONS } from '../data/formations';

//BANDEAU DES FORMATIONS DEFILEMENT INFINI
export default function FormationsDefilantes() {
  const duree = `${FORMATIONS.length * 6}s`; // 6 secondes par carte

  return (
    <div className="marquee marquee-formations">
      <div className="marquee-piste" style={{ '--duree': duree }}>
        {FORMATIONS.map((f) => (
          <div className="marquee-carte" key={`a-${f.slug}`}>
            <CarteFormation formation={f} />
          </div>
        ))}
        {FORMATIONS.map((f) => (
          <div className="marquee-carte" key={`b-${f.slug}`} aria-hidden="true">
            <CarteFormation formation={f} />
          </div>
        ))}
      </div>
    </div>
  );
}
