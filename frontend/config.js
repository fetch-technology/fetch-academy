let ggAuth = null
const API_URL = window.location.host.includes('localhost')
	? 'http://localhost:8000'
	: `${window.location.protocol}//${window.location.host}`
export { ggAuth ,API_URL}