import {Routes, Route, Link} from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/projects';
import Resume from './views/resume';

function App() {
    return (
        <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/projects">Proyects</Link>
            <Link to="/resume">Resume</Link>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
        </Routes>
        </>
    );
}


export default App;