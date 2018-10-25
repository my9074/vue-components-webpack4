import request from '@/api/request'

export function fetchDemo() {
	return request({
		url: 'http://www.baidu.com',
		method: 'GET',
	})
}
