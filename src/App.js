import './App.css';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Heroes from './components/heroes/heroes';
import Calculator from './components/calculator/calculator';


function App() {
  return (
    <div className="App">
      <Tabs defaultActiveKey="heroes" id="uncontrolled-tab-example">
        <Tab eventKey="calculator" title="Calculadora">
          <Calculator />
        </Tab>
        <Tab eventKey="heroes" title="Héroes">
          <Heroes/>
        </Tab>
      </Tabs>

    </div>
  );



}

export default App;
