import './App.scss';
import Titre1 from './components/Titre1/Titre1';
import AppCore from './components/AppCore/AppCore';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      {/* <> */}
      <Router>
        <Titre1 />
        <Nav />
        <AppCore />
        <Footer societe="Desorbaix" />
      </Router>
      {/* </> */}
    </div>
  );
}

export default App;
