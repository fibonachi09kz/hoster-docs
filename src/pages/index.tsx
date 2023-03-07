import Head from 'next/head'
import { Montserrat } from 'next/font/google'
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import FrontPage from "@/components/FrontPage/FrontPage";
import Link from "next/link";



const Home = () => {
    return (
        <>
            <Head>
                <title>Hoster.KZ Brains</title>
            </Head>
            <Header />
            <main className="mx-auto max-w-7xl px-4 flex-1 mt-20 md:mt-48">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-slate-100 sm:text-5xl md:text-6xl">
                        <span className="block inline">Hoster</span>{' '}
                        <span className="block text-mainBlue inline">Brains</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Платформа документации и профессионального роста
                    </p>
                    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                        <div className="rounded-md shadow">
                            <Link
                                href="/profile"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-mainBlue hover:bg-mainBlueDark md:py-2 md:text-lg md:px-10"
                            >
                                Войти
                            </Link>
                        </div>
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                            <a
                                href="#"
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-mainBlue dark:text-white bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:text-gray-300 md:py-2 md:text-lg md:px-10"
                            >
                                Hoster.KZ
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Home;