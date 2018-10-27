<template>
  <div class="sk-text-background">
    <div>{{msg}}</div>
    <div>i18n: {{emptyText}}</div>
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
