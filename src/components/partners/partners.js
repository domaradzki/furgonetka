import SectionIntro from '../sectionIntro/sectionIntro';
import { ReactComponent as DHL } from '../../assets/images/dhl.svg';
import { ReactComponent as FedEx } from '../../assets/images/fedex.svg';
import { ReactComponent as GLS } from '../../assets/images/gls.svg';
import { ReactComponent as Pocztex } from '../../assets/images/pocztex.svg';
import { ReactComponent as Orlen } from '../../assets/images/orlen.svg';
import { ReactComponent as Deligoo } from '../../assets/images/deligoo.svg';
import { ReactComponent as DPD } from '../../assets/images/dpd.svg';
import { ReactComponent as UPS } from '../../assets/images/ups.svg';
import { ReactComponent as InPost } from '../../assets/images/inpost.svg';
import { ReactComponent as Meest } from '../../assets/images/meest.svg';
import { ReactComponent as Ambro } from '../../assets/images/ambro.svg';
import { ReactComponent as Xpress } from '../../assets/images/xpress.svg';
import { ReactComponent as Pallex } from '../../assets/images/pallex.svg';

function Partners() {
  return (
    <section className="partners">
      <SectionIntro
        white
        paddingTop0
        description="Za pośrednictwem Furgonetki nadasz przesyłki krajowe z DHL, FedEx, DPD, InPost, UPS, GLS, Pocztex, ORLEN Paczka, Ambro Express, DeliGoo, Xpress Delivery i PallEx. Porównuj oferty najtańszych kurierów krajowych i wybierz usługę, którą potrzebujesz."
      >
        Przesyłki krajowe – <em>DHL, FedEx, DPD, InPost i inni</em>
      </SectionIntro>
      <div className="partners__items">
        <DHL />
        <FedEx />
        <GLS />
        <Pocztex />
        <Orlen />
        <Deligoo />
        <DPD />
        <UPS />
        <InPost />
        <Meest />
        <Ambro />
        <Xpress />
        <Pallex />
      </div>
    </section>
  );
}

export default Partners;
