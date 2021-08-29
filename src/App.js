import Layout from './components/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './components/pages/Homepage';
// import Auth from './components/pages/Auth';
import ErrorPage from './components/pages/ErrorPage';
import { ThemeProvider } from 'styled-components';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { theme } from './utils/theme';

function App() {
  AOS.init();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path='/' component={Homepage} />
            {/* <Route exact path='/login' component={Auth} /> */}
            <Route path='*' component={ErrorPage} />
          </Switch>
        </Layout>
      </ThemeProvider>
    </Router>
  );
}

export default App;
