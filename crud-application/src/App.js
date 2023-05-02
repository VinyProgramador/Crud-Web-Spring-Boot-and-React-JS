import Post from './pages/Post/Post';
import Feed from './pages/Feed/Feed';
import NotFound from './pages/NotFound/NotFound';
import EditPost from './pages/EditPost/EditPost';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Feed />}/>
          <Route path='/post' element={<Post />}/>
          <Route path='/edit/:id' element={<EditPost />}/>
          <Route path='/*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
