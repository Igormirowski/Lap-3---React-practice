import './App.css';
import ReaderCount from './components/ReaderCount';
import FaveButton from './components/FaveButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ReaderCount />
      <FaveButton />
      </header>
    </div>
  );
}

export default App;
