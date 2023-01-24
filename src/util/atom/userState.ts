import { atom } from 'recoil'

const userState = atom({
	key: 'userState',
	default: {
		class: 0,
		code: 0,
		enroled: '',
		grade: 0,
		name: '',
		nickname: '',
		studentNo: '',
		profile: '',
		isLogin: false,
		isManager: false,
	},
})

export default userState
