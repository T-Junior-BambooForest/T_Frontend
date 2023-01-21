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

type User = {
	name: string
}

type AllowBoard = {
	AllowBoardCode: number
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
				<h1 className="article_title">모든 제보</h1>
			</div>
			<div>
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
