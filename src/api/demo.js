import request from '@/api/request'

export function fetchDemo() {
	return request({
		url: 'https://cnodejs.org/api/v1/topics',
		method: 'GET',
	})
}
