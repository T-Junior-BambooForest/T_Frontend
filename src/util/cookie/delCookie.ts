import getCookie from './getCookie'
import setCookie from './setCookie'

const delCookie = (name: string) => {
	var temp = getCookie(name)
	if (temp) {
		setCookie(name, temp, new Date(1) as Date & string)
	}
}

export default delCookie
