import './App.css';
import TopNav from './components/TopNav';
import ProductFilter from './components/ProductFilter';
import InstagramFeed from './components/InstagramFeed';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import AccountLogin from './components/AccountLogin';

import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://pangaea-interviews.vercel.app/api/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <div className="App">
      <TopNav/>
      <ProductFilter/>

      <ApolloProvider client={client}>
        <ProductList/>
      </ApolloProvider>

      <InstagramFeed/>
      <Footer/>

      <Cart/>
      <AccountLogin/>
    </div>
  );
}

export default App;
