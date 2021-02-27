import './assets/common/reset.scss';
import './assets/common/style.scss';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import SignUpPage from './pages/SignUp';
import Styleguide from './pages/Styleguide';

function App () {
  return (
    <div className="container">
      <h1>My webform</h1>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='login'>Login</Link>
            </li>
            <li>
              <Link to='signup'>Sign UP</Link>
            </li>
            <li>
              <Link to='styleguide'>Styleguide</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignUpPage} />
          <Route path='/styleguide' component={Styleguide} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
