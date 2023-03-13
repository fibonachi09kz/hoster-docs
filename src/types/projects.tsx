
export interface Project {
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

export interface Projects {
	data: Array<Project>
	meta: {
		pagination: {
			page: number,
			pageCount: number,
			pageSize: number,
			total: number
		}
	}
}
