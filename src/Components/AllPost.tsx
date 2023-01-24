import axios, { AxiosError } from 'axios'
import React from 'react'
import AllowPostType from '../../types/AllowPostType'
import '../Style/Forum.scss'
const PostItem = React.lazy(() => import('../Components/PostItem'))

const AllPost = () => {
	const [allowPost, setAllowPost] = React.useState([])

	React.useEffect(() => {
		;(async () => {
			try {
				const res = await getAllowPostInfo()
				setAllowPost(res.data)
			} catch (error) {
				if (error instanceof AxiosError && error.response?.data?.code >= 400) {
					alert('에러가 발생했습니다.')
					console.log(error)
				}
			}
		})()
	}, [])

	const getAllowPostInfo = () => {
		return axios.get('/board', { withCredentials: true })
	}

	return (
		<div className="forum_wrap">
			<div className="article_title_box">
				<span className="article_title">모든 이야기들</span>
			</div>
			<div>
				<React.Suspense>
					{allowPost &&
						allowPost?.map((post: AllowPostType) => (
							<PostItem
								key={post.post.postCode}
								category={post.post.category}
								isAnonymous={post.post.isAnonymous}
								contents={post.post.contents}
								allowCode={post.AllowedCode}
								image={post.post.Image}
								user={post.post.user}
							/>
						))}
				</React.Suspense>
			</div>
		</div>
	)
}

export default AllPost
