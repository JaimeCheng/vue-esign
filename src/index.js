import vueEsign from './index.vue'
vueEsign.install = function (Vue) {
  if (this.installed) {
    return
  }
  this.installed = true
  Vue.component('vueEsign', vueEsign)
}
export default vueEsign

// if (typeof window !== 'undefined' && window.Vue) {
//   window.Vue.use(vueEsign)
// }