import React from 'react'
import { MutationFunction, useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import useDidMountEffect from '../hooks/useDidMountEffect'
import '../style/Manage.scss'
import ManagePostType from '../types/ManagePostType'
import allowPost from '../util/api/allowPost'
import deletePost from '../util/api/deletePost'
import getManagePost from '../util/api/getManagePost'
import userState from '../util/atom/userState'
import category from '../util/etc/category'
import Header from '../components/Header'

const Management = () => {
	const user = useRecoilValue(userState)
	const navigate = useNavigate()
	const [post, setPost] = React.useState([])
	const [isLoad, setIsLoad] = React.useState(false)

	useQuery('getManagePost', getManagePost, {
		onSuccess: (res) => {
			if (!!res.data) setPost(res.data.reverse())
			setIsLoad(true)
		},
		onError: (err) => {
			console.log(err)
		},
	})

	const queryClient = useQueryClient()

	const updatePostMutation = useMutation(allowPost as MutationFunction, {
		onSuccess: () => {
			alert('글이 수락되었습니다.')
			queryClient.invalidateQueries('getManagePost')
		},
		onError: (err) => {
			alert('글 수락 도중 오류가 발생했습니다.')
			console.log(err)
		},
	})

	const deletePostMutation = useMutation(deletePost as MutationFunction, {
		onSuccess: () => {
			alert('글이 삭제되었습니다.')
			queryClient.invalidateQueries('getManagePost')
		},
		onError: (err) => {
			alert('글 수락 도중 오류가 발생했습니다.')
			console.log(err)
		},
	})

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
								{post.map((post: ManagePostType) => (
									<tbody key={post.postCode}>
										{!post.isAllow && (
											<tr>
												<td>{post.postCode}</td>
												<td className="post-contents">{post.contents}</td>
												<td>{post.isAnonymous ? '익명' : post.user?.name || '익명'}</td>
												<td>
													<img src={post.Image} alt="없음" className="post-img" />
												</td>
												<td>{category(post.category)}</td>
												<td onClick={() => updatePostMutation.mutate(post.postCode)}>수락</td>
												<td onClick={() => deletePostMutation.mutate(post.postCode)}>거절</td>
											</tr>
										)}
									</tbody>
								))}
							</table>
						</div>
					</div>
					<div className="management_title_box">
						<h1 className="management_title">승인된 게시글</h1>
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
										<td>삭제 여부</td>
									</tr>
								</tbody>
								{post.map((post: ManagePostType) => (
									<tbody key={post.postCode}>
										{post.isAllow && (
											<tr>
												<td>{post.postCode}</td>
												<td className="post-contents">{post.contents}</td>
												<td>{post.isAnonymous ? '익명' : post.user?.name || '익명'}</td>
												<td>
													<img src={post.Image} alt="없음" className="post-img" />
												</td>
												<td>{category(post.category)}</td>
												<td onClick={() => deletePostMutation.mutate(post.postCode)}>삭제</td>
											</tr>
										)}
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
