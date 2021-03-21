import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import NavBar from './Components/Navbar';
import Footer from './Components/FooterComponent';
import Home from './Components/Home';
import AllBlogs from './Components/AllBlogs';
import FullBlog from './Components/FullBlog';
import UpdateBlog from './Components/UpdateBlog';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div className="App" style={{backgroundColor:'lightblue'}}>
      <BrowserRouter>
        <NavBar />
        <Switch>
           <Route path="/allblogs" component={AllBlogs} />
           <Route path='/fullblog/:id' component={FullBlog} />
           <Route path='/updateblog/:id' component={UpdateBlog} />
           <Route path="/" component={Home} />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
