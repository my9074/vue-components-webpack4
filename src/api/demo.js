import request from '@/api/request'

export function initQrCodeInfo() {
	return request({
		url: '/api/mfaIntercept/bizInitQrCode',
		method: 'POST',
		data: {
			initQrCodeInfo: {
				type: 'sop'
			}
		}
	})
}
