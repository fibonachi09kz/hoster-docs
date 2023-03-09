import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";


const Projects = ({data}:any) => {
	return (
		<>
			<Header />
			<Sidebar data={data} />
		</>
	)
}



Projects.getInitialProps = async () => {
	const res = await fetch(process.env.NEXT_PUBLIC_API_OPEN_URL + '/projects')
	const json = await res.json()
	console.log(json)
	return {
		props: { json }
	}
}


export default Projects;