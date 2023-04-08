import moment from 'moment'
import 'moment/locale/ko'

const dateParser = (UTC: string) => {
	const weeks = ['일', '월', '화', '수', '목', '금', '토']
	const date = moment(UTC)

	console.log(date)

	const PARSING_DATE = `
    ${date.year()}년 
    ${date.month() + 1}월 
    ${date.date()}일
	${weeks[date.day()]}요일
    ${date.format('A')}
	${date.format('A') === '오후' && date.hour() !== 12 ? date.hour() - 12 : date.hour() === 0 ? 12 : date.hour()}시 
    ${date.minute()}분`

	return PARSING_DATE
}

export default dateParser
