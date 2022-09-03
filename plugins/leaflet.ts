import { LMap, LTileLayer, LMarker, LTooltip, LCircle  } from '@vue-leaflet/vue-leaflet'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.component('LMap', LMap)
    nuxtApp.vueApp.component('LTileLayer', LTileLayer)
    nuxtApp.vueApp.component('LMarker', LMarker)
    nuxtApp.vueApp.component('LTooltip', LTooltip)
    nuxtApp.vueApp.component('LCircle', LCircle)
})