export default {
    install(Vue) {
        Vue.mixin({
            data() {
                return {
                    name: 'plugin name'
                }
            }
        })
    }
}
