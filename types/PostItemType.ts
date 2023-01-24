export default interface PostItemType {
	category: string
	isAnonymous: boolean
	contents: string
	allowCode: number
	image: string
	user: {
		code: number
		role: string
		grade: number
		class: number
		name: string
	}
}
