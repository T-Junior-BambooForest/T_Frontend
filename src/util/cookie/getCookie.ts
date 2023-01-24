const getCookie = (name: string) => {
	var cookieValue = null
	if (document.cookie) {
		var array = document.cookie.split(escape(name) + '=')
		if (array.length >= 2) {
			var arraySub = array[1].split(';')
			cookieValue = unescape(arraySub[0])
		}
	}
	return cookieValue
}

export default getCookie
