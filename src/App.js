import logo from './logo.svg';
import './App.css';
import Header from './global/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route path="/memes">

          </Route>
          <Route path="/about-us">
            
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
