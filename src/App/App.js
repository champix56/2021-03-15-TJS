import './App.scss';
import Titre1 from './components/Titre1/Titre1';
import AppCore from './components/AppCore/AppCore';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <div className="App">
    {/* <> */}
        <Titre1/>
        <AppCore/>
        <Footer societe="Desorbaix"/>
    {/* </> */}
    </div>
  );
}

export default App;
