import { AxiosResponse } from 'axios'
import React from 'react'
import AllowPostType from '../../types/AllowPostType'
import '../Style/Forum.scss'
import getAllPost from '../util/api/getAllPost'
const PostItem = React.lazy(() => import('../Components/PostItem'))

const AllPost = () => {
	const [allowPost, setAllowPost] = React.useState([])

	React.useEffect(() => {
		;(async () => {
			try {
				const res = (await getAllPost()) as unknown as AxiosResponse
				setAllowPost(res.data)
			} catch (err) {
				alert('글을 불러오는 도중 오류가 발생했습니다.')
				console.log(err)
			}
		})()
	}, [])
	return (
		<div className="forum_wrap">
			<div className="article_title_box">
				<span className="article_title">모든 이야기들</span>
			</div>
			<React.Suspense>
				{allowPost &&
					allowPost?.map((data: AllowPostType) => (
						<PostItem
							key={data.post.postCode}
							category={data.post.category}
							isAnonymous={data.post.isAnonymous}
							contents={data.post.contents}
							allowCode={data.AllowedCode}
							image={data.post.Image}
							user={data.post.user}
						/>
					))}
			</React.Suspense>
		</div>
	)
}

export default AllPost
