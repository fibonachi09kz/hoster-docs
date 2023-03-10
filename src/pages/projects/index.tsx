import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";
import SingleProjectTizer from "@/components/SingleProjectTizer/SingleProjectTizer";
import {useState} from "react";
import ProjectsSearch from "@/components/ProjectsSearch/ProjectsSearch";


const Projects = ({ projects }:any) => {

	const [projectsList, setProjectsList] = useState(projects.data)

	function projectsFilter(searchQuery: string) {
		console.log(searchQuery)
		const filteredProjects = projects.data.filter((project: any) =>
			project.attributes.Title.toLowerCase().includes(searchQuery.toLowerCase())
		);
		console.log(filteredProjects)
		setProjectsList(filteredProjects)
	}

	return (
		<>
			<Header />
			<div className="flex flex-1">
				<Sidebar projects={projects} />
				<div className="flex-1">
					<ProjectsSearch projectsFilter={projectsFilter} />
					<ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-5 flex-1">
						{projectsList.map((project: any) => (
							<SingleProjectTizer key={project.id} project={project}/>
						))}
					</ul>
				</div>
			</div>
		</>
	)
}



export async function getServerSideProps () {
	const res = await fetch(process.env.API_OPEN_URL + '/projects')
	const projects = await res.json()
	return {
		props: { projects }
	}
}


export default Projects;