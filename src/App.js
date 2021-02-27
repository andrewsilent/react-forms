import './assets/common/reset.scss';
import './assets/common/style.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import StyleguidePage from './pages/StyleguidePage';
import Header from './components/Header';
import ForgotPage from './pages/ForgotPage';
import TermsOfService from './pages/TermsPage';

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          {/* <Route path='/login' component={LoginPage} /> */}
          <Route path='/signup' component={SignUpPage} />
          <Route path='/forgot' component={ForgotPage} />
          <Route path='/terms-of-service' component={TermsOfService} />
          <Route path='/styleguide' component={StyleguidePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
