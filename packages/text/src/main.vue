<template>
  <div class="sk-text-background">
    <div>{{msg}}</div>
    <div>i18n: {{emptyText}}</div>
    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2414791379,4060275662&fm=200&gp=0.jpg"  alt="test img" />
  </div>
</template>
<script>
import Locale from '@/mixins/locale'
import { fetchDemo } from '@/api/demo'

export default {
	name: 'SkText',
	mixins: [Locale],
	props: {
		msg: {
			default: 'test',
			type: String
		}
	},
	computed: {
		emptyText() {
			return this.t('sk.text.emptyText')
		}
	},
	created () {
		fetchDemo()
	}
}
</script>
