import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css'; // Pastikan ini merujuk ke file yang sesuai
import Home from './Home'; // Pastikan ini merujuk ke file yang sesuai
import Main from './Main'; // Pastikan ini merujuk ke file yang sesuai
import Signup from './daftarakun'; // Pastikan ini merujuk ke file yang sesuai
import Login from './login'; // Pastikan ini merujuk ke file yang sesuai

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/main" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/daftarakun" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
