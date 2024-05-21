import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateBlog from './components/Create';
import 'bootstrap/dist/css/bootstrap.min.css'
import BlogDetails from './components/Blogdetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>

            <Route path='/Create'>
              <CreateBlog/>
            </Route>

            <Route path='/blogdetails/:id'>
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
