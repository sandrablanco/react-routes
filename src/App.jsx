import {Routes, Route, Link} from 'react-router-dom';
import Home from './views/Home';
import Projects from './views/projects';
import Resume from './views/resume';

function App() {
    return (
        <>
        <div>
            <nav style={{ display: "flex", gap: "20px" }}>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
            </nav>
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