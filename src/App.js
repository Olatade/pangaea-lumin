import './App.css';
import TopNav from './components/TopNav';
import ProductFilter from './components/ProductFilter';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AccountLogin from './components/AccountLogin';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <ProductFilter/>
      <ProductList/>
      <InstagramFeed/>
      <Footer/>

      <Cart/>
      <AccountLogin/>
    </div>
  );
}

export default App;
