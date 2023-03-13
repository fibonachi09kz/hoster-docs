export interface ItteratedProject {
	attributes: {
		Client: string,
		Detail: string,
		Status: string,
		Title: string,
		createdAt: string,
		publishedAt: string,
		updatedAt: string
	},
	id: number
}


export interface SingleProject {
	data: ItteratedProject
	meta: {
		pagination: {
			page: number,
			pageCount: number,
			pageSize: number,
			total: number
		}
	}
}


export interface Projects {
	data: Array<ItteratedProject>
	meta: {
		pagination: {
			page: number,
			pageCount: number,
			pageSize: number,
			total: number
		}
	}
}
