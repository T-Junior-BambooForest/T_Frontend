import React, { ChangeEvent, KeyboardEventHandler, useCallback, useContext, useState } from 'react'
import '../Style/Post.scss'
import axios from 'axios'
import AllPost from './AllPost'
import { UserContext } from '../App'
import checkLogo from '../Image/checkImg.svg'
import postLogo from '../Image/postImg.svg'
import { Textarea } from './Textarea'
import { useDispatch, useSelector } from 'react-redux'
import { setAnonymous, setContents, setPreventOFF, setPreventON } from '../modules/posting'

const Post = () => {
	const dispatch = useDispatch()
	const { isAnonymous, contents, preventClick } = useSelector((state: any) => state.posting)

	const user = useContext(UserContext)
	const [Image, setImage] = useState(null)
	const [option, setOption] = useState('')
	const [textareaHeight, setTextareaHeight] = useState({
		row: 1,
		lineBreak: [],
	})

	const resizeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const { scrollHeight, clientHeight, value } = e.target

		if (scrollHeight > clientHeight) {
			setTextareaHeight((prev) => ({
				row: prev.row + 1,
				lineBreak: { ...prev.lineBreak, [value.length - 1]: true },
			}))
		}
		if (textareaHeight.lineBreak[value.length]) {
			setTextareaHeight((prev) => ({
				row: prev.row - 1,
				lineBreak: { ...prev.lineBreak, [value.length]: false },
			}))
		}
	}

	const onKeyEnter = (e: KeyboardEvent & ChangeEvent<HTMLTextAreaElement>) => {
		if (e.code === 'Enter') {
			setTextareaHeight((prev) => ({
				row: prev.row + 1,
				lineBreak: { ...prev.lineBreak, [e.target.value.length]: true },
			}))
		}
	}

	const encodeFileToBase64 = (fileBlob: File) => {
		if (
			fileBlob.type !== 'image/png' &&
			fileBlob.type !== 'image/jpg' &&
			fileBlob.type !== 'image/jpeg' &&
			fileBlob.type !== 'image/webp' &&
			fileBlob.type !== 'image/gif'
		) {
			alert('올바른 사진 형식이 아닙니다. 파일을 다시 확인해주세요.')
			window.location.reload()
			return
		} else {
			const reader = new FileReader()
			reader.readAsDataURL(fileBlob)
			return new Promise((resolve) => {
				reader.onload = () => {
					setImage(reader.result)
					resolve('')
				}
			})
		}
	}

	const onSubmit = useCallback(
		async (e: React.FormEvent) => {
			e.preventDefault()
			dispatch(setPreventON())

			if (!user.isLogin) {
				alert('로그인 상태를 확인할 수 없습니다. 로그인 후에 글을 작성하실 수 있습니다.')
				dispatch(setPreventOFF())
				return
			} else if (!contents) {
				alert('내용이 비어있습니다. 제보 내용을 다시 한 번 확인해주세요.')
				dispatch(setPreventOFF())
				return
			} else if (contents.length > 5000) {
				alert('내용이 제한을 초과했습니다. 5000자 이내로 작성해주세요.')
				return
			}

			if (isAnonymous) {
				try {
					await axios.post('/board', {
						contents,
						Usercode: -1,
						isAnonymous,
						Image,
						category: option,
					})
					alert('제보가 접수 되었습니다. 관리자 승인 후 목록에 표시됩니다.')
					dispatch(setPreventOFF())
					window.location.reload()
				} catch (err) {
					console.log(err)
					alert('이미지 용량이 너무 큽니다.')
					dispatch(setPreventOFF())
				}
			} else {
				try {
					await axios.post('/board', {
						contents,
						Usercode: user.code,
						isAnonymous,
						Image,
						category: option,
					})
					alert('제보가 접수 되었습니다. 관리자 승인 후 목록에 표시됩니다.')
					dispatch(setPreventOFF())
					window.location.reload()
				} catch (err) {
					console.log(err)
					alert('이미지 용량이 너무 큽니다.')
					dispatch(setPreventOFF())
				}
			}
		},
		[user, contents, isAnonymous, Image, option]
	)

	return (
		<form onSubmit={onSubmit}>
			<div className="article_wrap">
				<div className="article_box">
					<div className="post_title_box">
						<h1 className="post_title">제보하기</h1>
						<div className="form_boxs">
							<div className="posts-wrap">
								<input
									type="file"
									onChange={(e) => {
										encodeFileToBase64(e.target.files[0])
									}}
									accept="image/png, image/gif, image/jpg"
									disabled={!user.isLogin}
								/>
								{Image ? <img src={Image} alt="미리보기" className="preview-img" /> : ''}
								<div className="anony-button-wrap" onClick={() => dispatch(setAnonymous())}>
									<span className="anony_button_span">익명</span>
									<button
										type="button"
										className="anony-button"
										style={isAnonymous ? { backgroundColor: 'green' } : null}>
										{isAnonymous ? <img src={`${checkLogo}`} alt="check" /> : ''}
									</button>
								</div>
								<div className="post-select-wrap">
									<select
										onChange={(e) => {
											setOption(e.target.value)
										}}>
										<option>자유</option>
										<option>고민</option>
										<option>질문</option>
										<option>불만</option>
										<option>건의</option>
									</select>
								</div>
								<div className="post-button-wrap">
									<button type="submit" id="post" className="post_button" disabled={preventClick}>
										<img src={`${postLogo}`} alt="" />
										<span>제보</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="editor_box">
						<Textarea
							className="editor"
							autoComplete="off"
							onInput={resizeTextarea}
							onKeyDown={onKeyEnter as unknown as KeyboardEventHandler<HTMLTextAreaElement>}
							rows={textareaHeight.row}
							onChange={(e) => dispatch(setContents(e.target.value))}
							value={contents}
							// disabled={!user.isLogin}
							placeholder={!user.isLogin ? '로그인 후 글을 작성하실 수 있습니다.' : ''}
						/>
						<div>
							<span>{contents.length}/5000</span>
						</div>
					</div>
					<AllPost />
				</div>
			</div>
		</form>
	)
}

export default Post
