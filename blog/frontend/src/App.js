
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import Fooders from './components/Fooders';
import Headers from './components/Headers';
import CategoryPosts from './pages/CategoryPosts';


function App() {
  return (
    <div className="App">
       
      <Router>
      <Headers/>
        <Routes>
          <Route path= '/' element={<PostList/>}  />
          <Route path= '/posts/:id' element={<PostDetail/>}  />
          <Route path= '/posts/category/:id' element={<CategoryPosts/>}  />
          </Routes>
          <Fooders/>
          </Router>
          

      
       </div>
  );
}

export default App;
