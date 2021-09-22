import Index from 'pages';
import RhodesianInfoPage from 'pages/rhodesian';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/rhodesian'>
            <RhodesianInfoPage />
          </Route>
          <Route path='/'>
            <Index />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
