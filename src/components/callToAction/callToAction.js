import { ReactComponent as Woman } from '../../assets/images/woman.svg';
import CTAButton from '../ctaButton/ctaButton';
import SectionTitle from '../sectionTitle/sectionTitle';

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta__image">
        <Woman />
      </div>
      <div className="cta__content">
        <div className="cta__text">
          <SectionTitle>
            Furgonetka – tu znajdziesz
            <em> najtańsze przesyłki krajowe</em>
          </SectionTitle>
          <p>
            Skorzystaj z bezpłatnego formularza i zamów wysyłkę swojej
            paczki w niskiej cenie.
          </p>
        </div>
        <CTAButton className="button--yellow">
          Nadaj przesyłkę
        </CTAButton>
      </div>
    </section>
  );
}

export default CallToAction;
