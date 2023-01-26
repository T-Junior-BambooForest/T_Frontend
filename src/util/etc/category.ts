const category = (category: string) => {
	if (category === 'free') return '자유'
	if (category === 'worries') return '고민'
	if (category === 'complaints') return '불만'
	if (category === 'questions') return '질문'
	if (category === 'suggestions') return '건의 '
	return category
}

export default category
