import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Homepage';
import AboutPage from './Pages/Aboutpage';
import ProjectsPage from './Pages/Porjectspage';
import ContactPage from './Pages/Contactpage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
     <Router>
      <Navbar/>
      <Routes>
       {/* setting route for Home component */}
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<AboutPage/>}/>
       <Route path="/projects" element={<ProjectsPage/>} />
       <Route path="/contacts" element={<ContactPage/>} />

      </Routes>
     </Router>
   
    </div>
  );
}

export default App;

