import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Homepage';
import AboutPage from './Pages/Aboutpage';
import ProjectsPage from './Pages/Porjectspage';
import ContactPage from './Pages/Contactpage';
import Navbar from './components/Navbar';
import Skillspage from './Pages/Skillspage';
import Githubpage from './Pages/Githubpage';
import Codechefpage from './Pages/Codechefpage';
import Experiencepage from './Pages/Experiencepage';
import Certificationpage from './Pages/Certificationpage';
import Educationpage from './Pages/Educationpage';

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
       <Route path="/skills" element={<Skillspage/>} />
        <Route path="/github" element={<Githubpage/>} />
       <Route path="/codechef" element={<Codechefpage/>}/>
        <Route path="/experience" element={<Experiencepage/>}/>
        <Route path="/certification" element={<Certificationpage/>}/>
        <Route path="/education" element={<Educationpage/>}/>
      </Routes>
     </Router>
   
    </div>
  );
}

export default App;

