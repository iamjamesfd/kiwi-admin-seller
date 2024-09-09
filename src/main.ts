import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import { createPinia } from 'pinia'
import useAuthStore from './store/api/useAuthStore'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import AppState from './plugins/appState.js'
import Noir from './presets/Noir.js'
import Chart from 'primevue/chart';
import { getOrGenerateFCMToken, useToast } from '@/utils'
import useLoaderStore from './store/useLoaderStore.js'
import { messaging } from './firebase.js'
import { StoreFactory } from '@/store/api/utils'

import { onMessage } from 'firebase/messaging'
import useNotificationsStore from './store/api/useNotificationsStore'

onMessage(messaging, (payload) => {
  const notificationStore = useNotificationsStore()
  notificationStore.showNotification(
    payload.notification?.title || '',
    payload.notification?.body || ''
  )
  console.log('onMessage', payload)
})


export var app: any
;(async () => {
  app = createApp(App)
  const pinia = createPinia()

  app.use(ToastService)

  pinia.use(({ store }) => {
    store.loaderStore = useLoaderStore()
    store.toast = useToast
  })

  

  app.use(pinia)

  app.use(AppState)
  app.use(PrimeVue, {
    theme: {
      preset: Noir,
      options: {
        prefix: 'p',
        darkModeSelector: '.p-dark',
        cssLayer: false
      }
    }
  })

  app.component('Chart', Chart)
  await useAuthStore().checkIsAuthenticated()

  app.use(router)
  app.mount('#app')

  await getOrGenerateFCMToken()
})()