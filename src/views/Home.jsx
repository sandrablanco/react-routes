import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Bienvenido a mi portafolios personal de Mario López</h1>
            <p>Explora mis proyectos y experiencia profesional. Soy desarrollador web con experiencia en frontend y backend. Me apasiona crear soluciones innovadoras y eficientes.</p> 
            <Link to="/proyects">Ver Proyectos</Link>
            <Link to="/resume">Ver Curriuculum</Link>
        </div>
    );
}

export default Home;