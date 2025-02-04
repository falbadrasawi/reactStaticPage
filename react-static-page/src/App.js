import './App.css';
import Header from './components/Header.js';
import Content from './components/Content.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Content />
      </header>
      <Footer />
    </div>
  );
}

export default App;
