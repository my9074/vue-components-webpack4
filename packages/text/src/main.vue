<template>
  <div class="sk-text_background">
    <div>{{msg}}</div>
    <div>i18n: {{emptyText}}</div>
  </div>
</template>
<script>
import Locale from '@/mixins/locale'

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
	}
}
</script>
<style>
.sk-text_background {
  background: red
}
</style>

