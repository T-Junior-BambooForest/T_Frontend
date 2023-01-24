import React, { useState } from 'react'
import '../style/Posting.scss'
import AllPost from './AllPost'
import checkLogo from '../assets/checkImg.svg'
import postLogo from '../assets/postImg.svg'
import { Textarea } from './Textarea'
import { useRecoilValue } from 'recoil'
import userState from '../util/atom/userState'
import createPost from '../util/api/createPost'

const Post = () => {
	const [prevent, setPrevent] = useState(false)
	const [contents, setContents] = useState('')
	const [isAnonymous, setIsAnonymous] = useState(true)

	const user = useRecoilValue(userState)
	const [Image, setImage] = React.useState(null)
	const [imageType, setImageType] = React.useState('')
	const [option, setOption] = React.useState('')
	const [textareaHeight, setTextareaHeight] = React.useState({
		row: 1,
		lineBreak: [],
	})

	const resizeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

	const onKeyEnter = (e: KeyboardEvent & React.ChangeEvent<HTMLTextAreaElement>) => {
		if (e.code === 'Enter') {
			setTextareaHeight((prev) => ({
				row: prev.row + 1,
				lineBreak: { ...prev.lineBreak, [e.target.value.length]: true },
			}))
		}
	}

	const encodeFileToBase64 = (fileBlob: File) => {
		setImageType(fileBlob.type.replace('image/', ''))
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

	const onSubmit = React.useCallback(
		async (e: React.FormEvent) => {
			e.preventDefault()
			setPrevent(true)

			if (!user.isLogin) {
				alert('로그인 상태를 확인할 수 없습니다. 로그인 후에 글을 작성하실 수 있습니다.')
				setPrevent(false)
				return
			}

			if (!contents) {
				alert('내용이 비어있습니다. 제보 내용을 다시 한 번 확인해주세요.')
				setPrevent(false)
				return
			}

			if (contents.length > 5000) {
				alert('내용이 제한을 초과했습니다. 5000자 이내로 작성해주세요.')
				return
			}

			try {
				await createPost(option, isAnonymous, contents, Image, imageType)
				alert('제보가 접수 되었습니다. 관리자 승인 후 목록에 표시됩니다.')
				setPrevent(false)
				window.location.reload()
			} catch (err) {
				alert('오류가 발생했습니다. 관리자에게 문의바랍니다.')
				console.log(err)
				setPrevent(false)
			}
		},
		[user, contents, isAnonymous, Image, option, imageType]
	)

	return (
		<form onSubmit={onSubmit}>
			<div className="article_wrap">
				<div className="article_box">
					<div className="post_title_box">
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
								<div className="anony-button-wrap" onClick={() => setIsAnonymous(!isAnonymous)}>
									<span className="anony_button_span">익명</span>
									<button type="button" className="anony-button" style={isAnonymous ? { backgroundColor: 'green' } : null}>
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
									<button type="submit" id="post" className="post_button" disabled={prevent}>
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
							onKeyDown={onKeyEnter as unknown as React.KeyboardEventHandler<HTMLTextAreaElement>}
							rows={textareaHeight.row}
							onChange={(e) => setContents(e.target.value)}
							value={contents}
							disabled={!user.isLogin}
							placeholder={!user.isLogin ? '로그인 후 글을 작성하실 수 있습니다.' : ''}
						/>
						<div>
							<span>{contents?.length || 0}/5000</span>
						</div>
					</div>
					<AllPost />
				</div>
			</div>
		</form>
	)
}

export default Post
