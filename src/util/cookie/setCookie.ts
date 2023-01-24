const setCookie = (name: string, value: string, days: string) => {
	var exdate = new Date()
	exdate.setDate(exdate.getDate() + parseInt(days))
	// 설정 일수만큼 현재시간에 만료값으로 지정

	var cookie_value = escape(value) + (days == null ? '' : '; expires=' + exdate.toUTCString())
	document.cookie = name + '=' + cookie_value
}

export default setCookie
