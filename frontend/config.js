let ggAuth = null
const API_URL = window.location.host.includes('localhost')
	? 'http://localhost:8000'
  : `${window.location.protocol}//${window.location.host}`
const USER_ID = null
export { ggAuth ,API_URL, USER_ID}