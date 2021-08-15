import './App.css';
import TopNav from './components/TopNav';
import ProductFilter from './components/ProductFilter';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopNav/>

      <ProductFilter/>

      <div className="h-96 bg-primary-light">Products section</div>
      
      <InstagramFeed/>
      <Footer/>
    </div>
  );
}

export default App;
