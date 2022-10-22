import Hero from '../hero/hero';
import Menu from '../menu/menu';
import Offer from '../offer/offer';

function App() {
  return (
    <div className="app">
      <Menu />
      <main className="main">
        <Hero />
        <Offer />
      </main>
    </div>
  );
}

export default App;
