import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Inter} from "next/font/google"
import {ThemeProvider} from 'next-themes'


const inter = Inter({
	subsets: ['cyrillic']
})

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<style jsx global>{`
                html {
                    font-family: ${inter.style.fontFamily};
                }
			`}</style>
			<ThemeProvider attribute="class">
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}
export default App;