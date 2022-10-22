import SectionIntro from '../sectionIntro/sectionIntro';
import FeatureItem from '../featureItem/featureItem';
import { ReactComponent as AdressBook } from '../../assets/images/adress_book.svg';
import { ReactComponent as OrderData } from '../../assets/images/order_data.svg';
import { ReactComponent as ShipmentTemplates } from '../../assets/images/shipment_templates.svg';
import { ReactComponent as TrackingShipments } from '../../assets/images/tracking_shipments.svg';
import { ReactComponent as OrderingPackage } from '../../assets/images/ordering_package.svg';
import { ReactComponent as Delivery } from '../../assets/images/delivery.svg';
import icon from '../../assets/images/list_icon.svg';

function Features() {
  return (
    <section className="features">
      <SectionIntro description="Na platformie Furgonetka.pl nie tylko nadasz tanie przesyłki kurierskie, ale także skorzystasz z bezpłatnych narzędzi, które pozwolą Ci pożegnać czasochłonne czynności. Wysyłkę ułatwią Ci m.in.:">
        Narzędzia <em>do wysyłki </em>
      </SectionIntro>
      <div className="features__items">
        <FeatureItem name="Śledzenie przesyłek">
          <TrackingShipments />
        </FeatureItem>
        <FeatureItem name="Książka adresowa">
          <AdressBook />
        </FeatureItem>
        <FeatureItem name="Szablony przesyłek">
          <ShipmentTemplates />
        </FeatureItem>
        <FeatureItem name="Inne dane na etykiecie">
          <OrderData />
        </FeatureItem>
        <FeatureItem name="Zamówienie paczki bez zlecania podjazdu kuriera">
          <OrderingPackage />
        </FeatureItem>
      </div>
      <SectionIntro description="Jeśli zależy Ci na czasie, możesz przyspieszyć transport zleconej paczki. Z Furgonetką nadasz najszybsze przesyłki krajowe. Wystarczy, że dobierzesz odpowiednią usługę dodatkową w zależności od przewoźnika:">
        <em>Dogodny </em>czas dostawy
      </SectionIntro>
      <div className="delivery__item">
        <div className="delivery__content">
          <ul>
            <li>Paczka w Weekend </li>
            <li>Doręczenie przesyłki w sobotę </li>
            <li>Doręczenie do danej godziny</li>
            <li>Doręczenie na drugi dzień</li>
            <li>Doręczenie we wskazany dzień</li>
            <li>Przesyłka ekspresowa </li>
          </ul>
        </div>
        <div className="delivery__image">
          <Delivery />
        </div>
      </div>
    </section>
  );
}

export default Features;
