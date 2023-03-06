import { Html, Head, Main, NextScript } from 'next/document'
import {useState, useEffect} from "react";

const Document = () => {

	const [darkMode, setDarkMode] = useState(false)
	useEffect(() => {
		if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			setDarkMode(true)
		} else {
			setDarkMode(false)
		}
		// localStorage.theme = 'light'
		// localStorage.theme = 'dark'
		// localStorage.removeItem('theme')
	}, [])

	return (
		<Html lang="en" className={darkMode ? 'dark' : undefined}>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
export default Document;