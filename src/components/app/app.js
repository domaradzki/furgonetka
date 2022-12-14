import CallToAction from '../callToAction/callToAction';
import Features from '../features/features';
import Contact from '../contact/contact';
import Hero from '../hero/hero';
import Menu from '../menu/menu';
import Offer from '../offer/offer';
import Partners from '../partners/partners';

function App() {
  return (
    <div className="app">
      <Menu />
      <main className="main">
        <Hero />
        <Offer />
        <Features />
        <Partners />
        <CallToAction />
        <Contact />
      </main>
    </div>
  );
}

export default App;
