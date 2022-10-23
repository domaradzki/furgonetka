import SectionIntro from '../sectionIntro/sectionIntro';
import FeatureItem from '../featureItem/featureItem';
import Tag from '../tag/tag';
import { ReactComponent as AdressBook } from '../../assets/images/adress_book.svg';
import { ReactComponent as OrderData } from '../../assets/images/order_data.svg';
import { ReactComponent as ShipmentTemplates } from '../../assets/images/shipment_templates.svg';
import { ReactComponent as TrackingShipments } from '../../assets/images/tracking_shipments.svg';
import { ReactComponent as OrderingPackage } from '../../assets/images/ordering_package.svg';
import { ReactComponent as Delivery } from '../../assets/images/delivery.svg';
import { ReactComponent as Tick } from '../../assets/images/list_icon.svg';

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
      <SectionIntro
        padding80
        description="Jeśli zależy Ci na czasie, możesz przyspieszyć transport zleconej paczki. Z Furgonetką nadasz najszybsze przesyłki krajowe. Wystarczy, że dobierzesz odpowiednią usługę dodatkową w zależności od przewoźnika:"
      >
        <em>Dogodny </em>czas dostawy
      </SectionIntro>
      <div className="delivery__item">
        <div className="delivery__content">
          <ul>
            <li>
              <Tick />
              Paczka w Weekend
              <Tag className="tag-inpost" name="InPost" />
            </li>
            <li>
              <Tick />
              Doręczenie przesyłki w sobotę
              <div className="delivery__tags">
                <Tag className="tag-inpost" name="InPost" />
                <Tag className="tag-dhl" name="DHL" />
                <Tag className="tag-dpd" name="DPD" />
              </div>
            </li>
            <li>
              <Tick />
              Doręczenie do danej godziny
              <Tag className="tag-dpd" name="DPD" />
            </li>
            <li>
              <Tick />
              Doręczenie na drugi dzień
              <Tag className="tag-dpd" name="DPD" />
            </li>
            <li>
              <Tick />
              Doręczenie we wskazany dzień
              <Tag className="tag-pocztex" name="Pocztex" />
            </li>
            <li>
              <Tick />
              Przesyłka ekspresowa
              <div className="delivery__tags">
                <Tag className="tag-deligoo" name="DeliGoo" />
                <Tag className="tag-xpress" name="Xpress Delivery" />
              </div>
            </li>
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
