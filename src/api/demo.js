import AxiosFactory from '@/api/axios'

const axios = AxiosFactory.create()

export function initQrCodeInfo() {
	return axios({
		url: '/api/mfaIntercept/bizInitQrCode',
		method: 'POST',
		data: {
			initQrCodeInfo: {
				type: 'sop'
			}
		}
	})
}
