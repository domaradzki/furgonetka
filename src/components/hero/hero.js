import CTAButton from '../ctaButton/ctaButton';
import { ReactComponent as HeroImage } from '../../assets/images/hero.svg';
import { ReactComponent as Underline } from '../../assets/images/underline.svg';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__textgroup">
            <div className="hero__title">
              <p className="hero__caption">Furgonetka</p>
              <h1>
                Przesyłki krajowe
                <br />
                <span>z Furgonetką</span>
              </h1>
              <Underline className="title__underline" />
            </div>
            <p>
              Nadawaj przesyłki krajowe o różnych gabarytach ze
              sprawdzonymi przewoźnikami – z dostawą pod drzwi, do
              punktów odbioru i automatów paczkowych.
            </p>
          </div>
          <CTAButton className="button--blue">
            Nadaj przesyłkę
          </CTAButton>
        </div>
      </div>
      <div className="hero__container">
        <HeroImage className="hero__image" />
      </div>
    </section>
  );
}

export default Hero;
