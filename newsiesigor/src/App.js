import './App.css';
import ReaderCount from './components/ReaderCount';
import FaveButton from './components/FaveButton';
import Greeting from './components/Greeting';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Counter */}
      <ReaderCount />
        {/* Button */}
      <FaveButton />
      {/* Input */}
      <Greeting />
      </header>
    </div>
  );
}

export default App;
