import classNames from "classnames";
import {
	ArchiveBoxIcon,
	Bars4Icon,
	ClockIcon,
	HomeIcon,
	UserCircleIcon as UserCircleIconOutline,
} from '@heroicons/react/24/outline'
import Link from "next/link";
import {useRouter} from "next/router";

const navigation = [
	{ name: 'Мой профиль', href: '/profile', icon: HomeIcon },
	{ name: 'My Issues', href: '/', icon: Bars4Icon },
	{ name: 'Assigned', href: '/', icon: UserCircleIconOutline },
	{ name: 'Closed', href: '/', icon: ArchiveBoxIcon },
	{ name: 'Recent', href: '/', icon: ClockIcon },
]
const projects = [
	{ id: 1, name: 'Hoster.kz', href: '#' },
	{ id: 2, name: 'Forcar', href: '#' },
	{ id: 3, name: 'Flirtshop', href: '#' },
	{ id: 4, name: 'Goodgame.kz', href: '#' },
]


const Sidebar = () => {

	const router = useRouter();
	const currentRoute = router.pathname;

	return (
		<div className="flex h-full flex-1 flex-col">
			<div className="flex flex-1 flex-col overflow-y-auto border-r dark:border-slate-700 shadow">
				<nav className="flex-1 px-2 py-4">
					<div className="space-y-1">
						{navigation.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className={classNames(
									currentRoute === item.href ? 'bg-mainBlue text-white' : 'text-gray-900 hover:bg-gray-100',
									'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
								)}
								aria-current={currentRoute === item.href ? 'page' : undefined}
							>
								<item.icon
									className={classNames(
										currentRoute === item.href ? 'text-white' : 'text-gray-500 group-hover:text-gray-500',
										'mr-3 flex-shrink-0 h-6 w-6'
									)}
									aria-hidden="true"
								/>
								{item.name}
							</Link>
						))}
					</div>
					<div className="mt-10">
						<p className="px-3 text-base font-medium text-gray-900">Проекты</p>
						<div className="mt-2 space-y-1">
							{projects.map((project: any) => (
								<a
									key={project.id}
									href={project.href}
									className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100"
								>
									<span className="truncate">{project.name}</span>
								</a>
							))}
						</div>
						<Link
							href="/projects"
							className="mt-3 block px-3 text-sm font-bold text-mainBlue hover:text-mainBlueDark"
						>
							Все проекты
						</Link>
					</div>
				</nav>
			</div>
		</div>
	)
}


export default Sidebar;