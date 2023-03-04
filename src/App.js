import logo from './logo.svg';
import './App.css';
import LeftNavigation from './components/LeftNavigation';
import Introduction from './components/Introduction';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from './components/Blog';

function App() {
  return (
    <div id="container" class="container">
      <LeftNavigation />
      <div className="content-scroller">
        <div className="content-wrapper">
    <BrowserRouter>
    <Routes>
    
        <Route path="/" element={<Introduction/>}></Route>
        {/* <Route path="/blog" element={<Blog/>}></Route> */}


        
    </Routes>
    </BrowserRouter>
    </div>
      </div>
    </div>
  );
}

export default App;
