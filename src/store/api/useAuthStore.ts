// src/store/useAuthStore.ts
import { defineStore } from 'pinia'
import { ICommonStoreStateBase } from '@/types/api'
import { axe } from '@/store/api'
import { getToken as getAuthToken, setToken } from '@/utils'
import { User } from '@/types/api/models/common'
import { getOrGenerateFCMToken } from '@/utils'

const axios = axe({ hasAuthHeaders: false })

interface IAuthState extends ICommonStoreStateBase {
  user: User | null
  last_login: Date | null
  isAuthenticated: boolean
  fcmToken: string | null
}

const defaultState: IAuthState = {
  error: null,
  loading: false,
  fcmToken: null,
  user: null,
  last_login: null,
  isAuthenticated: false
}

export default defineStore('auth', {
  state: (): IAuthState => defaultState,
  actions: {
    async fetchCurrentUser() {
      this.loading = true
      this.loaderStore.startLoading('Fetching user data')
      return axe()
        .get(`/whoami/`)
        .then((response) => {
          if (response.data) {
            this.isAuthenticated = true
            this.user = response.data
            if (this.user && this.user.market_id === null) {
              this.isAuthenticated = false;
              this.error = 'You do not own any market, try logging in to another account'
              setTimeout(() => {
                this.logout();
              }, 4000)
            }
          }
        })
        .catch((err) => {
          if ('ERR_NETWORK' === err.code) {
            document.write('<h1>Network Error (backend server is completely down)</h1>')
          }
          this.isAuthenticated = false;
        })
        .finally(() => {
          this.loading = false
          this.loaderStore.stopLoading()
        })
    },

    async registerNotificationToken(fcmToken: string) {
      return axe()
        .post('/notification-tokens/', {
          token: fcmToken,
          device_type: 'web',
          device_label: window.navigator.userAgent
        })
        .then((response) => console.log(response))
        .catch(() => {})
    },

    async sendOtp(phoneNumber: string) {
      this.loading = true
      this.loaderStore.startLoading('Sending Otp')
      return axios
        .post('/login/', { phone_number: phoneNumber })
        .then((res) => {
          if (res.status === 200) {
          } else if (res.status === 201) {
          }
          this.toast()?.success({ title: 'hey', body: 'what the hell' })
          return true
        })
        .catch((reason) => {
          console.log(reason)
          return false
        })
    },

    async verifyOtp(phoneNumber: string, otp: string) {
      this.loading = true
      this.loaderStore.startLoading('Verify opt')
      return axios
        .post('/verify-otp/', { phone_number: phoneNumber, otp })
        .then(async (response) => {
          if (response.data.access) {
            localStorage.setItem('access_token', response.data.access)
            localStorage.setItem('refresh_token', response.data.refresh)
            localStorage.setItem('user_id', response.data.user_id)
          }

          const fcmToken = await getOrGenerateFCMToken()
          if (fcmToken) {
            await this.registerNotificationToken(fcmToken)
          }
          return true
        })
        .catch((reason) => {
          console.log(reason)
          return false
        })
    },
    
    async checkIsAuthenticated() {
      const { access, refresh } = getAuthToken()
      if (!access || !refresh) {
        this.isAuthenticated = false
        return false
      }
      this.loaderStore.startLoading('Checking if the user is authenticated')
      return this.fetchCurrentUser()
    },

    logout() {
      localStorage.removeItem('access_token')
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('user_id')
      localStorage.removeItem('fcm_token') // Clear the FCM token on logout
      window.location.reload()
    }
  },
  getters: {
    currentUser: (state) => state.user
  }
})
