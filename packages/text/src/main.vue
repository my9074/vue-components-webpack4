<template>
  <div class="sk-text_background">{{msg}}</div>
</template>
<script>
export default {
	name: 'SkText',
	props: {
		msg: {
			default: 'test',
			type: String
		}
	},
}
</script>
<style>
.sk-text_background {
  background: red
}
</style>

