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
					<span className="count_text">부마숲 {allowCode}번째 이야기</span>
					<div className="date_text_box">
						|<span className="category_text">#{category}</span>
						<span className="date_text">
							{isAnonymous ? '익명' : `${user.grade}학년 ${user.class}반 ${user.name}`}님 제보
						</span>
					</div>
					<div className="author_text_box">
						<span className="author_text">2023년 1월 22일 일요일 4시 32분</span>
					</div>
				</div>
				<div className="content_lines"></div>
				<div className="text_box">
					<span className="content_text">{contents.replace(/<br>/gi, '\n')}</span>
					{image ? <img src={image} alt="img" className="img" /> : ''}
				</div>
			</div>
		</div>
	)
}

export default React.memo(PostItem)
