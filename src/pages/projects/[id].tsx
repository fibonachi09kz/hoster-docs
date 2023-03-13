import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import {SingleProject} from "@/types/projects";
import { PaperClipIcon } from '@heroicons/react/20/solid'

type Props = {
	project: SingleProject
}

const DetailProject = ({ project }: Props) => {

	if (!project) {
		return
	}

	const {Title, Client, Status, updatedAt, createdAt} = project.data.attributes

	return (
		<>
			<Header />
			<div className="flex flex-1 overflow-hidden">
				<Sidebar />
				<div className="min-h-0 flex-1 overflow-y-auto">
					<div className="overflow-hidden dark:bg-slate-900 border-b dark:border-slate-800">
						<div className="px-4 py-5 sm:px-6">
							<h1 className="text-lg font-medium leading-6 text-gray-900">{Title}</h1>
							<p className="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-200">{Client}</p>
						</div>
						<div className="border-t border-gray-200 dark:border-slate-800 px-4 py-5 sm:p-0">
							<dl className="sm:divide-y sm:divide-gray-200 dark:divide-slate-800">
								<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
									<dt className="text-sm font-medium text-gray-500 dark:text-gray-200">Наименование проекта</dt>
									<dd className="mt-1 text-sm text-gray-600 dark:text-gray-300 sm:col-span-2 sm:mt-0">{Title}</dd>
								</div>
								<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
									<dt className="text-sm font-medium text-gray-500 dark:text-gray-200">Статус</dt>
									<dd className="mt-1 text-sm text-gray-600 dark:text-gray-300 sm:col-span-2 sm:mt-0">{Status.toUpperCase()}</dd>
								</div>
								<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
									<dt className="text-sm font-medium text-gray-500 dark:text-gray-200">Проект создан</dt>
									<dd className="mt-1 text-sm text-gray-600 dark:text-gray-300 sm:col-span-2 sm:mt-0">{new Date(createdAt).toLocaleString("ru")}</dd>
								</div>
								<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
									<dt className="text-sm font-medium text-gray-500 dark:text-gray-200">Последний раз обновлён</dt>
									<dd className="mt-1 text-sm text-gray-600 dark:text-gray-300 sm:col-span-2 sm:mt-0">{new Date(updatedAt).toLocaleString("ru")}</dd>
								</div>
								<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
									<dt className="text-sm font-medium text-gray-500 dark:text-gray-200">About</dt>
									<dd className="mt-1 text-sm  dark:text-gray-300 sm:col-span-2 sm:mt-0">
										Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
										qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
										pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
									</dd>
								</div>
								<div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
									<dt className="text-sm font-medium text-gray-500 dark:text-gray-200">Ссылки</dt>
									<dd className="mt-1 text-sm text-gray-600 dark:text-gray-300 sm:col-span-2 sm:mt-0">
										<ul role="list" className="divide-y divide-gray-200 dark:divide-slate-800 rounded-md border border-gray-200 dark:border-slate-800">
											<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
												<div className="flex w-0 flex-1 items-center">
													<PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
													<span className="ml-2 w-0 flex-1 truncate">Тестовый сайт</span>
												</div>
												<div className="ml-4 flex-shrink-0">
													<a href="#" className="font-medium text-mainBlue hover:text-mainBlueDark">
														Перейти
													</a>
												</div>
											</li>
											<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
												<div className="flex w-0 flex-1 items-center">
													<PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
													<span className="ml-2 w-0 flex-1 truncate">Основной сайт</span>
												</div>
												<div className="ml-4 flex-shrink-0">
													<a href="#" className="font-medium text-mainBlue hover:text-mainBlueDark">
														Перейти
													</a>
												</div>
											</li>
										</ul>
									</dd>
								</div>
							</dl>
						</div>
					</div>
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


export default DetailProject;