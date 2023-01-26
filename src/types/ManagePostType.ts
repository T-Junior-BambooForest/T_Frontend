export default interface ManagePostType {
	postCode: number
	contents: string
	isAnonymous: boolean
	category: string
	Image: string
	isAllow: boolean
	user: {
		code: number
		role: string
		grade: number
		class: number
		name: string
	}
}
