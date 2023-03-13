import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import {SingleProject} from "@/types/projects";
import ReactMarkdown from "react-markdown";
import {useEffect, useState} from "react";
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

type Props = {
	project: SingleProject
}
interface HTMLElementWithDataset extends HTMLElement {
	dataset: DOMStringMap;
}


const DetailProjectDocs = ({ project }: Props) => {

	if (!project) {
		return
	}

	useEffect(() => {
		document.querySelectorAll<HTMLElementWithDataset>('pre code').forEach((el) => {
			hljs.highlightElement(el as HTMLElement)
			hljs.addPlugin({
				'after:highlightElement': ({ el: Element, result }) => {
					el.dataset.language = result.language;
				}
			});
			const lang = el.dataset.language;
		});

	}, [])

	const {Detail, Title, Client} = project.data.attributes

	return (
		<>
			<Header />
			<div className="flex flex-1 overflow-hidden">
				<Sidebar />
				<div className="min-h-0 flex-1 overflow-y-auto">
					<div className="relative overflow-hidden text-gray-900 dark:text-white p-5 prose">
						<h1 className="text-gray-900 dark:text-white text-4xl font-medium mb-2">{Title}</h1>
						<p className="text-gray-700 dark:text-gray-300 text-base font-medium mb-5">{Client}</p>
						<ReactMarkdown>
							{Detail}
						</ReactMarkdown>
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


export default DetailProjectDocs;