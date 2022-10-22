import Hero from '../hero/hero';
import Menu from '../menu/menu';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Menu />
        <main className="main">
          <Hero />
        </main>
      </div>
    </div>
  );
}

export default App;
