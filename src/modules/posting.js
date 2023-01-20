const ANONYMOUS = 'posting/ANONYMOUS'
const CONTENTS = 'posting/CONTENTS'
const PREVENT_ON = 'posting/PREVENT_ON'
const PREVENT_OFF = 'posting/PREVENT_OFF'

export const setAnonymous = (isAnonymous) => ({ type: ANONYMOUS, isAnonymous })
export const setContents = (contents) => ({ type: CONTENTS, contents })
export const setPreventON = (preventClick) => ({ type: PREVENT_ON, preventClick })
export const setPreventOFF = (preventClick) => ({ type: PREVENT_OFF, preventClick })

const init = {
	isAnonymous: true,
	contents: '',
	preventClick: false,
}

const posting = (state = init, action) => {
	switch (action.type) {
		case ANONYMOUS:
			return {
				...state,
				isAnonymous: !state.isAnonymous,
			}
		case CONTENTS:
			return {
				...state,
				contents: action.contents,
			}
		case PREVENT_ON:
			return {
				...state,
				preventClick: true,
			}
		case PREVENT_OFF:
			return {
				...state,
				preventClick: false,
			}
		default:
			return state
	}
}

export default posting
