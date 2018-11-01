import request from '@/api/request'

export function fetchDemo() {
	return request({
		url: '/api',
		method: 'GET',
	})
}
