import axios from 'axios'

class AxiosFactory {
	static create() {
		let instance = axios.create({
			timeout: 30000,
			withCredentials: true
		})
		instance.interceptors.response.use(this.handleSuccess, this.handleError)
		return instance
	}

	static handleSuccess(response) {
		return response.data
	}

	static handleError(error) {
		return Promise.reject(error)
	}
}

export default AxiosFactory
