import Tabs from '@/components/core/tabs/Tabs'
import Tab from '@/components/core/tabs/Tab'

/**
 * register global components
 * @param {Object} Vue
 */
const register = (Vue) => {
    Vue.component('Tab', Tab)
    Vue.component('Tabs', Tabs)
}

export {
    Tabs,
    Tab
}
export default {
    register
}