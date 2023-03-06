import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Inter} from "next/font/google";

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
			<Component {...pageProps} />
		</>
	)
}
export default App;