import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

import './App.css';
import { useStore } from './hooks/store';

function App() {
  const { fromLanguage, toLanguage, interChangeLanguage } = useStore();
  
  return (
    <div>
      <h1>Google Translate</h1>
      <div>
        <div>
          <h2>From</h2>
          {fromLanguage}
        </div>

        <div>
          <button onClick={interChangeLanguage}>Cambiar</button>
        </div>

        <div>
          <h2>To</h2>
          {toLanguage}
        </div>
      </div>
    </div>
  );
}

export default App;
