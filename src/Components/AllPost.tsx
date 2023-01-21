import axios, { AxiosError } from 'axios'
import React, { useEffect, useState } from 'react'
import '../Style/Forum.scss'
import PostItem from './PostItem'

interface AllowPostType {
	AllowedCode: number
	post: {
		postCode: number
		category: string
		isAnonymous: boolean
		contents: string
		Image: string
		user: {
			code: number
			role: string
			grade: number
			class: number
			name: string
		}
	}
}

const AllPost = () => {
	const [allowPost, setAllowPost] = useState([])

	useEffect(() => {
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
				{[1, 2, 3].map(() => (
					<PostItem
						category="자유"
						isAnonymous={false}
						contents="안녕안녕안녕친구들 나는 사밀이란다!안녕안녕안녕친구들 나는 사밀이란다!안녕안녕안녕친구들 나는 사밀이란다!안녕안녕안녕친구들 나는 사밀이란다!안녕안녕안녕친구들 나는 사밀이란다!안녕안녕안녕친구들 나는 사밀이란다!안녕안녕안녕친구들 나는 사밀이란다!안녕안녕안녕친구들 나는 사밀이란다!안녕안녕안녕친구들 나는 사밀이란다!안녕안녕안녕친구들 나는 사밀이란다!안녕안녕안녕친구들 나는 사밀이란다!안녕안녕안녕친구들 나는 사밀이란다!안녕안녕안녕친구들 나는 사밀이란다!안녕안녕안녕친구들 나는 사밀이란다!"
						allowCode={3}
						image={null}
						user={{
							code: 1,
							role: '3',
							grade: 2,
							class: 1,
							name: '박우빈',
						}}
					/>
				))}
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
			</div>
		</div>
	)
}

export default AllPost
