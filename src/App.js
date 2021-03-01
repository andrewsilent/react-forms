import './assets/styles/reset.scss';
import './assets/styles/style.scss';
import styles from './App.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import Header from './components/Header';
import TermsOfService from './pages/TermsPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import StyleguidePage from './pages/StyleguidePage';

const App = () => {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/forgot-password' component={ForgotPasswordPage} />
          <Route path='/terms-of-service' component={TermsOfService} />
          <Route path='/styleguide' component={StyleguidePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
