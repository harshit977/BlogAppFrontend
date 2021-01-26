import react from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar';
import Home from './Components/Home';
import AllBlogs from './Components/AllBlogs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
           <Route path="/allblogs" component={AllBlogs} />
           <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
