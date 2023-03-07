import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import DarkModeToggle from "@/components/ui/DarkModeToggle/DarkModeToggle";
import logo from '../../media/main-logo.svg';
import Image from 'next/image';

import {
    Bars4Icon, BriefcaseIcon,
    ChartBarIcon,
    GlobeAltIcon,
    InformationCircleIcon,
    NewspaperIcon,
    PhoneIcon,
    PlayIcon, ShieldCheckIcon, UserGroupIcon, XMarkIcon
} from '@heroicons/react/24/solid'

import {ChevronDownIcon} from "@heroicons/react/24/solid";

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const company = [
    { name: 'About', href: '#', icon: InformationCircleIcon },
    { name: 'Press', href: '#', icon: NewspaperIcon },
    { name: 'Careers', href: '#', icon: BriefcaseIcon },
    { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
    { name: 'Community', href: '#', icon: UserGroupIcon },
    { name: 'Partners', href: '#', icon: GlobeAltIcon },
]
const blogPosts = [
    {
        id: 1,
        name: 'Boost your conversion rate',
        href: '#',
        preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
        imageUrl:
            'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
    },
    {
        id: 2,
        name: 'How to use search engine optimization to drive traffic to your site',
        href: '#',
        preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
        imageUrl:
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
    },
]



const Header = () => {
    return (
        <header>
            <Popover className="relative bg-white dark:bg-slate-800">
                <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
                <div className="relative z-20">
                    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-3 lg:px-8 md:justify-start md:space-x-10">
                        <div>
                            <a href="#" className="flex">
                                <span className="sr-only">Hoster.Brains</span>
                                <div className="h-10 w-auto sm:h-12 relative">
                                    <Image
                                        src={logo}
                                        alt="hoster-logo"
                                        unoptimized
                                        className='h-full'
                                    />
                                </div>
                            </a>
                        </div>
                        <DarkModeToggle customClass={'flex md:hidden ml-auto mr-4'} />
                        <div className="-mr-2 -my-2 md:hidden">
                            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open menu</span>
                                <Bars4Icon className="h-6 w-6" aria-hidden="true" />
                            </Popover.Button>
                        </div>
                        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
                            <div className="flex space-x-10">

                                <a href="#" className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
                                    Проекты
                                </a>
                                <a href="#" className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
                                    Обучение
                                </a>
                                <a href="#" className="text-base font-medium text-gray-500 dark:text-white hover:text-gray-900 dark:hover:text-gray-300">
                                    База знаний
                                </a>

                            </div>

                            <div className="flex items-center md:ml-12">
                                <DarkModeToggle customClass='ml-0 mr-8' />
                                <a
                                    href="#"
                                    className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-mainBlue hover:bg-mainBlueDark"
                                >
                                    Войти
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-200 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    >
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                            <div className="pt-5 pb-6 px-5 sm:pb-8">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                            alt="Workflow"
                                        />
                                    </div>
                                    <div className="-mr-2">
                                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                            <span className="sr-only">Close menu</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </Popover.Button>
                                    </div>
                                </div>
                                <div className="mt-6 sm:mt-8">
                                    <nav>
                                        <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">

                                        </div>
                                        <div className="mt-8 text-base">
                                            <a href="#" className="font-medium text-indigo-600 hover:text-mainBlue">
                                                {' '}
                                                View all products <span aria-hidden="true">&rarr;</span>
                                            </a>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className="py-6 px-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                        Pricing
                                    </a>

                                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                        Docs
                                    </a>

                                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                        Company
                                    </a>

                                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                        Resources
                                    </a>

                                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                        Blog
                                    </a>

                                    <a href="#" className="rounded-md text-base font-medium text-gray-900 hover:text-gray-700">
                                        Contact Sales
                                    </a>
                                </div>
                                <div className="mt-6">
                                    <a
                                        href="#"
                                        className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        Sign up
                                    </a>
                                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                                        Existing customer?{' '}
                                        <a href="#" className="text-indigo-600 hover:text-indigo-500">
                                            Sign in
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </header>
    )
}

export default Header;