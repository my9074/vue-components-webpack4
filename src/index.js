
import Text from '../packages/text'
import locale from './locale/index'

const components = [Text]

const install = function(Vue, opts = {}) {
	if (install.installed) return
	locale.use(opts.locale)
	locale.i18n(opts.i18n)

	components.map(component => {
		Vue.component(component.name, component)
	})
}

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue)
}

export default {
	install,
	locale: locale.use,
	i18n: locale.i18n,
	Text
}
