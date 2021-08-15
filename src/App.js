import './App.css';
import TopNav from './components/TopNav';
import ProductFilter from './components/ProductFilter';
import InstagramFeed from './components/InstagramFeed';

function App() {
  return (
    <div className="App">
      <TopNav/>

      <ProductFilter/>

      <div className="h-96 bg-primary-light">Products section</div>
      
      <InstagramFeed/>
      <div>Footer section</div>
    </div>
  );
}

export default App;
