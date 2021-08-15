import './App.css';
import TopNav from './components/TopNav';
import ProductFilter from './components/ProductFilter';

function App() {
  return (
    <div className="App">
      <TopNav/>

      <ProductFilter/>
      
      <div className="h-96 bg-primary-light">Products section</div>
      
      <div>Products section</div>
      <div>Social Section</div>
      <div>Footer section</div>
    </div>
  );
}

export default App;
