import './App.css';
import ChartTemplateComponent from './components/charts/chartTemplateComponent'
import {animals, carts, soccerTeams} from './data/DataChart'

function App() {
  const colors = ["tomato", "gold", "cyan", "orange", "navy"]

  return (
    <div className="App">
      <h1>Prueba de charts</h1>
      <div className="chartsContainer">
        <div className="chartBlock">
          <ChartTemplateComponent renderData={animals} renderColors={colors} />
        </div>
        <div className="chartBlock">
          <ChartTemplateComponent renderData={carts} renderColors={colors} />
        </div>
        <div className="chartBlock">
          <ChartTemplateComponent renderData={soccerTeams} renderColors={colors} />
        </div>
      </div>
    </div>
  );
}

export default App;
