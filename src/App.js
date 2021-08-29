import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
import Auth from './components/pages/Auth';
import ErrorPage from './components/pages/ErrorPage';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init();
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/login' component={Auth} />
          <Route path='*' component={ErrorPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
