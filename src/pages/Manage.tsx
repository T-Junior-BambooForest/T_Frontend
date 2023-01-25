import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import useDidMountEffect from '../hooks/useDidMountEffect'
import '../style/Manage.scss'
import allowPost from '../util/api/allowPost'
import deletePost from '../util/api/deletePost'
import getManagePost from '../util/api/getManagePost'
import userState from '../util/atom/userState'
const Header = React.lazy(() => import('../components/Header'))

const Management = () => {
	const user = useRecoilValue(userState)
	const navigate = useNavigate()
	const [post, setPost]: any = React.useState([])
	const [isLoad, setIsLoad] = React.useState(false)

	const onClickUpdatePost = async (postCode: number) => {
		try {
			await allowPost(postCode)
			alert('글이 수락되었습니다.')
			window.location.reload()
		} catch (err) {
			alert('글 수락 도중 오류가 발생했습니다.')
			console.log(err)
		}
	}

	const onClickDeletePost = async (postCode: number) => {
		try {
			await deletePost(postCode)
			alert('글이 삭제되었습니다.')
			window.location.reload()
		} catch (err) {
			alert('글 삭제 도중 오류가 발생했습니다.')
			console.log(err)
		}
	}

	React.useEffect(() => {
		;(async () => {
			try {
				const res = await getManagePost()
				console.log(res.data)
				if (!!res.data) setPost(res.data.data.reverse())
				setIsLoad(true)
			} catch (error) {
				alert('글을 불러오던 도중 오류가 발생했습니다.')
				console.log(error)
			}
		})()
	}, [])

	useDidMountEffect(() => {
		if (user.role !== 'ADMIN') {
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
								<tbody>
									<tr>
										<td>글번호</td>
										<td>글내용</td>
										<td>요청자</td>
										<td>사진</td>
										<td>카테고리</td>
										<td colSpan={2}>승인 여부</td>
									</tr>
								</tbody>
								{post.map((post: any) => (
									<tbody key={post.postCode}>
										<tr>
											<td>{post.postCode}</td>
											<td className="post-contents">{post.contents}</td>
											<td>{post.isAnonymous ? '익명' : post.user?.name || '익명'}</td>
											<td>
												<img src={post.Image} alt="없음" style={{ width: '150px' }} />
											</td>
											<td>
												{post.category
													.replace('free', '자유')
													.replace('worries', '고민')
													.replace('complaints', '불만')
													.replace('questions', '질문')
													.replace('suggestions', '건의')}
											</td>
											{!post.isAllow ? (
												<td
													onClick={() => {
														onClickUpdatePost(post.postCode)
														console.log(post.postCode)
													}}>
													수락
												</td>
											) : (
												<td>&nbsp;</td>
											)}
											<td onClick={() => onClickDeletePost(post.postCode)}>거절</td>
										</tr>
									</tbody>
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
