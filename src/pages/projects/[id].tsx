import { useRouter } from 'next/router';

const DetailProject = () => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<div>
			<h1>Detail page for ID {id}</h1>
		</div>
	);
}

export default DetailProject;