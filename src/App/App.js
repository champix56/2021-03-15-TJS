import Button from './components/Button/Button';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>demat breizh</h1>
      <h2>Bonjour bretagne</h2>
      <Button></Button>
      <Button value="Nouveau"></Button>
      <Button value="warning" bgColor="tomato"></Button>
      <Button value="abc" color="tomato"></Button>
      <Button value="cliquez" bgColor="skyblue" color="darkgrey" ><img src="./logo192.png" width="64px" alt="logo" /></Button>
    </div>
  );
}

export default App;
