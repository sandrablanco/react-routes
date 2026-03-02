import projects from '../data/projects';

function Proyects() {
    return (
        <>
        <div>
            <h1>Proyectos</h1>
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <img src={project.image} alt={project.name} />
                    <p>{project.description}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">Ver proyecto</a> {/*Evita ataques de seguridad y no comparte la URL de tu página*/}
                </div>
            ))}

        </div>
        
        </>
    );
}

export default Proyects;