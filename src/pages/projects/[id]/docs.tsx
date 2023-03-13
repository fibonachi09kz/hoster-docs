import { useRouter } from 'next/router';
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import ProjectsSearch from "@/components/ProjectsSearch/ProjectsSearch";
import SingleProjectTizer from "@/components/SingleProjectTizer/SingleProjectTizer";

const DetailProjectDocs = ({ project }: any) => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<Header />
			<div className="flex flex-1">
				<Sidebar />
				<div className="flex-1">
					{id}
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps (context: any) {
	const { id } = context.query
	const res = await fetch(process.env.API_OPEN_URL + '/projects/' + id)
	const project = await res.json()
	return {
		props: { project }
	}
}


export default DetailProjectDocs;