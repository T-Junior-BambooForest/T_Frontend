import { AxiosResponse } from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import useDidMountEffect from '../hooks/useDidMountEffect'
import '../Style/Management.scss'
import allowPost from '../util/api/allowPost'
import deletePost from '../util/api/deletePost'
import getAllPost from '../util/api/getAllPost'
import userState from '../util/atom/userState'
const Header = React.lazy(() => import('../componentsasvsa/Header'))

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

	const onClickUpdatePost = async (postCode: number) => {
		try {
			await allowPost(postCode)
		} catch (err) {
			alert('글 수락 도중 오류가 발생했습니다.')
			console.log(err)
		}
	}

	const onClickDeletePost = async (postCode: number) => {
		try {
			await deletePost(postCode)
		} catch (err) {
			alert('글 삭제 도중 오류가 발생했습니다.')
			console.log(err)
		}
	}

	React.useEffect(() => {
		;(async () => {
			try {
				const res = (await getAllPost()) as unknown as AxiosResponse
				setPost(res.data)
				setIsLoad(true)
			} catch (error) {
				alert('글을 불러오던 도중 오류가 발생했습니다.')
				console.log(error)
			}
		})()
	}, [])

	useDidMountEffect(() => {
		if (!user.isManager) {
			navigate('/error')
		}
	}, [user])

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
							<table>
								<tr>
									<td>글번호</td>
									<td>글내용</td>
									<td>요청자</td>
									<td>사진</td>
									<td>글 타입</td>
									<td colSpan={2}>승인 여부</td>
								</tr>
								{post.map((post: PostType) => (
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
						</div>
					</div>
				</>
			)}
		</div>
	)
}

export default Management
