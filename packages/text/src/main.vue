<template>
  <div class="sk-text-background">
    <div>{{msg}}</div>
    <div>i18n: {{emptyText}}</div>
    <img :src="qr.base64Qr ? `data:image/jpeg;base64,${qr.base64Qr }`: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2414791379,4060275662&fm=200&gp=0.jpg'"  alt="test img" />
  </div>
</template>
<script>
import Locale from '@/mixins/locale'
import { initQrCodeInfo } from '@/api/demo'

export default {
	name: 'SkText',
	mixins: [Locale],
	props: {
		msg: {
			default: 'test',
			type: String
		}
	},
	data () {
		return {
			qr: {
				base64Qr: '',
				uuid: '',
			}
		}
	},
	computed: {
		emptyText() {
			return this.t('sk.text.emptyText')
		}
	},
	async created () {
		const { result } = await initQrCodeInfo()
		this.qr = result
	}
}
</script>
