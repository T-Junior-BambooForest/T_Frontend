import axios from 'axios'
import { handleActions } from 'redux-actions'

const POSTING_BOARD = 'posting/POSTING_BOARD'
const POSTING_BOARD_SUCCESS = 'posting/POSTING_BOARD_SUCCESS'
const POSTING_BOARD_FAILURE = 'posting/POSTING_BOARD_FAILURE'

const init = {
	loading: {
		POSTING_BOARD: false,
	},
	res: null,
}

export const postAnonyBoard = (contents, isAnonymous, Image) => async (dispatch) => {
	dispatch({ type: POSTING_BOARD })
	try {
		const res = await axios.post('/board', {
			contents,
			Usercode: -1,
			isAnonymous,
			Image,
		})
		dispatch({
			type: POSTING_BOARD_SUCCESS,
			payload: res.data,
		})
	} catch (err) {
		dispatch({
			type: POSTING_BOARD_FAILURE,
			payload: err,
			error: true,
		})
		throw err
	}
}

export const postBoard = (contents, isAnonymous, Image, Usercode) => async (dispatch) => {
	dispatch({ type: POSTING_BOARD })
	try {
		const res = await axios.post('/board', {
			contents,
			Usercode,
			isAnonymous,
			Image,
		})
	} catch (err) {}
}
