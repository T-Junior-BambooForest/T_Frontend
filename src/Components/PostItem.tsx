import React from 'react'
import '../Style/PostItem.scss'

interface PostItemType {
	category: string
	isAnonymous: boolean
	contents: string
	allowCode: number
	image: string
	user: {
		code: number
		role: string
		grade: number
		class: number
		name: string
	}
}

const PostItem = ({ category, isAnonymous, contents, allowCode, image, user }: PostItemType) => {
	return (
		<div className="content_box_wrap">
			<div className="content_box">
				<div className="header_info_box">
					<span className="count_text">대나무숲 #{allowCode}번째 제보</span>
					<div className="date_text_box">
						<span className="date_text">
							{/* {parseInt(date.slice(11, 13)) > 12
								? `${date.slice(0, 4)}년 ${date.slice(5, 7)}월 ${date.slice(8, 10)}일 PM ${
										parseInt(date.slice(11, 13)) - 12
								  }${date.slice(13, 16)}`
								: `${date.slice(0, 4)}년 ${date.slice(5, 7)}월 ${date.slice(8, 10)}일 AM ${parseInt(
										date.slice(11, 13)
								  )}${date.slice(13, 16)}`} */}
						</span>
						<span>{category}</span>
					</div>
					<div className="author_text_box">
						<span className="author_text">
							{isAnonymous ? '익명' : `${user.grade}학년 ${user.class}반 ${user.name}`}
						</span>
					</div>
				</div>
				<div className="text_box">
					<span className="content_text">{contents.replace(/<br>/gi, '\n')}</span>
					{image ? <img src={image} alt="img" className="img" /> : ''}
				</div>
			</div>
		</div>
	)
}

export default React.memo(PostItem)
