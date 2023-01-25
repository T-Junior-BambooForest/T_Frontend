import { atom } from 'recoil'

const userState = atom({
	key: 'userState',
	default: {
		class: 0,
		code: 0,
		grade: 0,
		name: '',
		role: '',
		isLogin: false,
	},
})

export default userState
