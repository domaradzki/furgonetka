import OfferItem from '../offerItem/offerItem';
import { ReactComponent as StandardShipment } from '../../assets/images/standard_shipment.svg';
import { ReactComponent as CityShipment } from '../../assets/images/city_shipment.svg';
import { ReactComponent as PaletteShipment } from '../../assets/images/palette_shipment.svg';
import { ReactComponent as NonStandardShipment } from '../../assets/images/nonstandard_shipment.svg';

function Offer() {
  return (
    <section className="offer">
      <div className="offer__intro">
        <h2 className="offer__title">
          Wybierz tanie i szybkie <span>przesyłki krajowe</span>
        </h2>
        <p className="offer__paragraph">
          Wyceniaj i wysyłaj tanie paczki krajowe bez podpisywania
          umowy i określania minimum logistycznego. U nas płacisz
          tylko za nadane przesyłki. Nie pobieramy abonamentu za
          prowadzenie konta czy korzystanie z dostępnych narzędzi.
        </p>
      </div>
      <div className="offer__items">
        <h2 className="offer__title-margin">
          Szeroki wybór przesyłek krajowych
        </h2>
        <OfferItem
          title="Przesyłki standardowe"
          description="Nadajesz przesyłki drobnicowe krajowe do różnych miast w Polsce? Wysyłaj koperty DOX (np. z dokumentami) i przesyłki kurierskie (nawet do 70 kg) – prywatnie i biznesowo za pomocą naszego serwisu."
        >
          <StandardShipment />
        </OfferItem>
        <OfferItem
          title="Wysyłka palet"
          description="Potrzebujesz przetransportować duże gabaryty lub ładunki złożone z wielu mniejszych elementów? Nadawaj przesyłki paletowe krajowe. W naszej ofercie znajdziesz wysyłkę europalet i półpalet euro, a także palet i półpalet przemysłowych."
        >
          <PaletteShipment />
        </OfferItem>
        <OfferItem
          title="Przesyłki miejskie"
          description="Chcesz skorzystać z usługi dostawy paczki na terenie swojego miasta? Nadawaj przesyłki ekspresowe w kilkudziesięciu miejscowościach w Polsce z doręczeniem nawet w 40 minut. Współpracujemy z dwoma przewoźnikami miejskimi."
        >
          <CityShipment />
        </OfferItem>
        <OfferItem
          title="Przesyłki nietypowe"
          description="Masz do wysłania coś nietypowego (np. meble, części samochodowe, motor, sprzęt AGD)? Zlecaj przesyłki gabarytowe krajowe i korzystaj z usług firm transportowych z całej Polski za pośrednictwem platformy Furgonetka Giełda."
        >
          <NonStandardShipment />
        </OfferItem>
      </div>
    </section>
  );
}

export default Offer;
