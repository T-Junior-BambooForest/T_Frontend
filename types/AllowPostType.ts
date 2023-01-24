export default interface AllowPostType {
	AllowedCode: number
	post: {
		postCode: number
		category: string
		isAnonymous: boolean
		contents: string
		Image: string
		user: {
			code: number
			role: string
			grade: number
			class: number
			name: string
		}
	}
}
