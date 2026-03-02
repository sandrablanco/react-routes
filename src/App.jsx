import {Routes, Route, Link} from 'react-router-dom';
import Home from './views/Home';
import proyects from './views/projects';
import {studies, experiences} from './views/resume';

function App() {
    return (
        <>
        <div>
            <Link to="/">Home</Link>
            <Link to="/proyects">Proyects</Link>
            <Link to="/resume">Resume</Link>
        </div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyects" element={<proyects />} />
            <Route path="/resume" element={<resume />} />
        </Routes>
        </>
    );
}


export default App;