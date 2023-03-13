import {
	EnvelopeIcon,
	PhoneIcon,
	ArrowTopRightOnSquareIcon,
	DocumentChartBarIcon
} from '@heroicons/react/20/solid';
import Link from "next/link";
import cn from 'classnames';



const SingleProjectTizer = ({project} : any) => {

	function statusIdentifier(status: string) {
		switch (status) {
			case "активен": return "bg-green-300 text-green-900"
			case "не активен": return "bg-red-300 text-red-900"
			case "в разработке": return "bg-blue-300 text-blue-900"
			case "на поддержке": return "bg-orange-300 text-orange-900"
		}
	}



	return (
		<li className="flex flex-col col-span-1 divide-y divide-gray-200 dark:divide-slate-700 rounded-lg bg-white dark:bg-slate-800 border dark:border-slate-700 dark:shadow overflow-hidden">
			<div className="flex flex-1 w-full items-start justify-between space-x-6 p-6">
				<div className="flex-1 truncate">
					<div className="flex justify-between space-x-3">
						<h3 className="truncate text-base font-medium text-gray-900 dark:text-white">{project.attributes.Title}</h3>
						<span className={`inline-block h-full flex-shrink-0 rounded-md px-2 py-1 text-xs font-medium bg-green-300 text-green-900 ${statusIdentifier(project.attributes.Status)}`}>
						  	{project.attributes.Status}
						</span>
					</div>
					<p className="mt-1 truncate text-sm text-gray-500 dark:text-gray-400">{project.attributes.Client}</p>
					<p className="mt-1 truncate text-xs text-gray-500 dark:text-gray-400">{`Обновлён: ${new Date(project.attributes.updatedAt).toLocaleString("ru")}`}</p>
				</div>
			</div>
			<div className="pt-px">
				<div className="-mt-px flex divide-x divide-gray-200 dark:divide-slate-700">
					<div className="flex w-0 flex-1 hover:bg-gray-50 hover:dark:bg-gray-700">
						<Link
							href={`/projects/${project.id}/docs`}
							className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 dark:text-gray-200"
						>
							<DocumentChartBarIcon className="h-5 w-5 text-gray-500 dark:text-gray-300" aria-hidden="true" />
							<span className="ml-2">Документация</span>
						</Link>
					</div>
					<div className="-ml-px flex w-0 flex-1 hover:bg-gray-50 hover:dark:bg-gray-700">
						<Link
							href={`/projects/${project.id}`}
							className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 dark:text-gray-200"
						>
							<ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-500 dark:text-gray-300" aria-hidden="true" />
							<span className="ml-2">Информация</span>
						</Link>
					</div>
				</div>
			</div>
		</li>
	)
}


export default SingleProjectTizer;