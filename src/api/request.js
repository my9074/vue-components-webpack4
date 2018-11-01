import axios from 'axios'

const service = axios.create({
	timeout: 30000,
	withCredentials: true
})

service.interceptors.request.use(
	config => config,
	error => {
		Promise.reject(error)
	}
)

service.interceptors.response.use(
	response => response.data,
	error => {
		return Promise.reject(error)
	}
)

export default service
