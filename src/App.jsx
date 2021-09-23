import Layout from 'layouts/Layout';
import Index from 'pages';
import Bordercollie from 'pages/bordercollie';
import RhodesianInfoPage from 'pages/rhodesian';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Layout>
          <Switch>
            <Route path='/rhodesian'>
              <RhodesianInfoPage />
            </Route>
            <Route path='/bordercollie'>
              <Bordercollie />
            </Route>
            <Route path='/'>
              <Index />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
