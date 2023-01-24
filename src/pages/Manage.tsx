import axios, { AxiosError } from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import useDidMountEffect from '../hooks/useDidMountEffect'
import '../Style/Management.scss'
import userState from '../util/atom/userState'
const Header = React.lazy(() => import('../Components/Header'))

interface PostType {
	allowBoard: boolean
	boardCode: number
	contents: string
	isAnonymous: boolean
	Image: string
	category: string
	User: {
		name: string
	}
}

const Management = () => {
	const user = useRecoilValue(userState)
	const navigate = useNavigate()
	const [post, setPost] = React.useState([])
	const [isLoad, setIsLoad] = React.useState(false)

	const onClickUpdatePost = (code: number) => {
		axios
			.post('/board/update', {
				boardCode: code,
			})
			.then(() => {
				alert('글이 수락되었습니다.')
				window.location.reload()
			})
			.catch((error) => {
				alert(`에러가 발생하였습니다. ${error}`)
				return
			})
	}

	const onClickDeletePost = (code: number) => {
		axios
			.delete('/board', {
				data: {
					boardCode: code,
				},
			})
			.then(() => {
				alert('글이 삭제되었습니다.')
				window.location.reload()
			})
			.catch((error) => {
				alert(`에러가 발생하였습니다. ${error}`)
				return
			})
	}

	React.useEffect(() => {
		;(async () => {
			try {
				const data = await getPostInfo()
				setPost(data.data)
				setIsLoad(true)
			} catch (error) {
				if (error instanceof AxiosError && error.response?.status >= 400) {
					console.log(error)
				}
			}
		})()
	}, [])

	useDidMountEffect(() => {
		if (!user.isManager) {
			navigate('/error')
		}
	}, [user])

	const getPostInfo = () => {
		return axios.get('/board/manage', { withCredentials: true })
	}

	return (
		<div>
			{!isLoad ? (
				''
			) : (
				<>
					<Header />
					<div className="management_title_box">
						<h1 className="management_title">게시글</h1>
					</div>
					<div className="management_content_wrap">
						<div className="management_content_title">
							<table style={{ marginBottom: '50px' }}>
								<tr>
									<td>글번호</td>
									<td>글내용</td>
									<td>요청자</td>
									<td>사진</td>
									<td>글 타입</td>
									<td colSpan={2} style={{ textAlign: 'center' }}>
										승인 여부
									</td>
								</tr>
								{post &&
									post.map((post: PostType) => (
										<>
											{post.allowBoard ? (
												''
											) : (
												<tbody key={post.boardCode}>
													<tr>
														<td>{post.boardCode}</td>
														<td style={{ fontSize: '14px' }}>{post.contents}</td>
														<td>{post.isAnonymous ? '익명' : post.User.name}</td>
														<td>
															<img src={post.Image} alt="없음" style={{ width: '50px', height: '50px' }} />
														</td>
														<td>{post.category}</td>
														<td onClick={() => onClickUpdatePost(post.boardCode)} style={{ cursor: 'pointer' }}>
															수락
														</td>
														<td onClick={() => onClickDeletePost(post.boardCode)} style={{ cursor: 'pointer' }}>
															거절
														</td>
													</tr>
												</tbody>
											)}
										</>
									))}
							</table>
							<br />
							<br />
							<br />
							<br />
							<div className="management_title_box" style={{ marginBottom: '10px' }}>
								<h1 className="management_title">받았던 제보</h1>
							</div>
							<table style={{ marginBottom: '50px' }}>
								<tr>
									<td>글번호</td>
									<td>글내용</td>
									<td>요청자</td>
									<td>사진</td>
									<td>글 타입</td>
									<td style={{ textAlign: 'center' }}>조정</td>
								</tr>
								{post &&
									post.map((post: PostType) => {
										return (
											<>
												{post.allowBoard ? (
													<tbody key={post.boardCode}>
														<tr>
															<td>{post.boardCode}</td>
															<td style={{ fontSize: '14px' }}>{post.contents}</td>
															<td>{post.isAnonymous ? '익명' : post.User.name}</td>
															<td>
																<img src={post.Image} alt="없음" style={{ width: '50px', height: '50px' }} />
															</td>
															<td>{post.category}</td>
															<td onClick={() => onClickDeletePost(post.boardCode)} style={{ cursor: 'pointer' }}>
																삭제
															</td>
														</tr>
													</tbody>
												) : (
													''
												)}
											</>
										)
									})}
							</table>
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default Management
