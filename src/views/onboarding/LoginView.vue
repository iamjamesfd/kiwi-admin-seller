<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useToast } from 'primevue/usetoast'
import InputMask from 'primevue/inputmask'
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputOTP from 'primevue/inputotp'

import useAuthStore from '@/store/api/useAuthStore'
const toast = useToast()

const phoneNumber = ref(localStorage.getItem('phone_number') || '')
const otp = ref<string>('')
const isOTPSent = ref(false)

const authStore = useAuthStore()

const serializedPhoneNumber = computed(() => {
  return '+998' + phoneNumber.value.replace(/[\(\)\-\s]/g, '')
})

const handlers = {
  async handleSubmit() {
    if (!phoneNumber) return

    if (otp) {
      var authenticated = await authStore.verifyOtp(serializedPhoneNumber.value, otp.value)
      if (authenticated) {
        location.href = '/';
        location.reload();
      }
    }

    const isSend = await authStore.sendOtp(serializedPhoneNumber.value)
    if (isSend) {
      isOTPSent.value = true
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-2 h-screen place-items-center bg-[#F3F4F6]">
    <div class="max-w-[572px] w-full">
      <div>
        <h1 class="text-3xl leading-normal font-bold">Kirish</h1>

        <div class="fields w-full mt-10">
          <form
            action=""
            method="post"
            class="flex flex-col gap-7.5 w-full"
            @submit.prevent="handlers.handleSubmit"
          >
            <div class="space-y-2">
              <label> Enter your phone number </label>
              <InputGroup>
                <InputGroupAddon>+998</InputGroupAddon>
                <InputMask
                  v-model="phoneNumber"
                  mask="(99) 999-99-99"
                  placeholder="(xx) xxx-xx-xx"
                  :pt="{ pcInputText: { class: 'form-input' } }"
                  size="large"
                />
              </InputGroup>
            </div>
            <div class="space-y-2" v-if="isOTPSent">
              <label>Enter the code you recieved</label>
              <InputOTP v-model="otp" />
            </div>
            <button type="submit" class="btn">
              {{ isOTPSent ? 'Tasdiqlash' : 'Davom etish' }}
            </button>
            <p class="text-red-500">
              {{ authStore.error }}
            </p>
            <a
              href="#"
              class="text-sm text-icon-color text-center font-semibold leading-normal focus:outline-none"
            >
              Parolni unutdingizmi
            </a>
          </form>
        </div>
      </div>
    </div>
    <div class="bg-slate-400 w-full h-screen">
      <img src="@/assets/login-hero.png" class="w-full h-full object-cover" alt="" />
    </div>
  </div>
</template>

