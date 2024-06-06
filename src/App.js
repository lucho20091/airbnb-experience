import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Card from './components/Card';
import Arr from './data'

function App() {
  
  const newElem = Arr.map(item => {
    return (
      <Card key={item.id} item={item} />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="ComponentCard">
        {newElem}
      </div>
    </div>

  );
}

export default App;
