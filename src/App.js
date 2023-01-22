import { getLocations } from './api/services';
import LeafletContainer from './pages';

function App() {
  // getLocations().then(res => console.log('res', res.data))
  return (
    <div className="App">
      <LeafletContainer />
    </div>
  );
}

export default App;
