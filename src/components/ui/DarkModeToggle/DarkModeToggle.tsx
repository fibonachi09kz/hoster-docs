import {useEffect, useState} from 'react'
import { Switch } from '@headlessui/react'
import {useTheme} from 'next-themes'


function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ')
}
const DarkModeToggle = () => {

	const {theme, setTheme} = useTheme()
	const [darkTheme, setDarkTheme] = useState(false)

	useEffect(() => {
		const themeCheck = () => {
			if (theme === 'dark') {
				setDarkTheme(true)
			} else if (theme === 'light' || typeof theme === "undefined") {
				setDarkTheme(false)
			}
		}
	}, [])


	return (
		<Switch
			checked={darkTheme}
			onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className={classNames(
				darkTheme ? 'bg-indigo-600' : 'bg-gray-200',
				'relative inline-flex mr-8 flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
			)}
		>
			<span className="sr-only">Use setting</span>
			<span
				className={classNames(
					darkTheme ? 'translate-x-5' : 'translate-x-0',
					'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
				)}
			>
				<span
					className={classNames(
						darkTheme ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
						'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
					)}
					aria-hidden="true"
				>
					  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 ">
						  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
					  </svg>
				</span>
				<span
					className={classNames(
						darkTheme ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
						'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
					)}
					aria-hidden="true"
				>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-3 w-3 text-indigo-600">
						<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
					</svg>
				</span>
		  	</span>
		</Switch>
	)
}

export default DarkModeToggle;