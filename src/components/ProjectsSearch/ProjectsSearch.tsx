import {useState} from "react";



type searchProps = {
	projectsFilter: (searchQuery: string) => void;
};

const ProjectsSearch = ({projectsFilter}: searchProps) => {

	const [searchQuery, setSearchQuery] = useState('');

	function setQuery(event: any) {
		setSearchQuery(event.target.value)
		projectsFilter(event.target.value)
	}

	return (
		<div className="p-5 pb-0 max-w-md">
			<label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-white">
				Быстрый поиск
			</label>
			<div className="relative mt-1 flex items-center">
				<input
					type="text"
					name="search"
					placeholder="Поиск"
					value={searchQuery}
					onChange={(event) => setQuery(event)}
					id="search"
					className="block bg-white dark:bg-slate-800 dark:placeholder:text-gray-400 w-full rounded-md border-gray-300 dark:border-gray-700 pr-12 shadow-sm focus:border-mainBlue focus:ring-mainBlue sm:text-sm"
				/>
			</div>
		</div>
	)
}

export default ProjectsSearch;