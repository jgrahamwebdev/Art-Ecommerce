
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

import Home from './pages/Home';
import PhotographyPage from './pages/PhotographyPage';
import PaintingsPage from './pages/PaintingsPage';
import BnWPage from './pages/BnWPage';
import Cart from './pages/Cart';
import ProductPage from './pages/ProductPage';



function App() {

  return (
     
      <div>
        <Router>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/photographypage" component={PhotographyPage} />
          <Route exact path="/paintingspage" component={PaintingsPage} />
          <Route exact path="/bnwpage" component={BnWPage} />
          <Route exact path="/productpage" component={ProductPage} />
          <Route exact path="/cart" component={Cart} />
          {/*<Home />*/}
          {/*<Product />*/}
          {/*<PhotographyPage />*/}
          </Switch>
        </Router>
      </div>
   
  );
}

export default App;
