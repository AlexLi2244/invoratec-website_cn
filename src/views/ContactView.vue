<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')

// Firebase Functions URL
const CONTACT_API_URL = 'https://us-central1-zoidberg-aiassistant-tutorial.cloudfunctions.net/sendContactEmail'

const handleSubmit = async () => {
  isSubmitting.value = true
  errorMessage.value = ''

  try {
    const response = await fetch(CONTACT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || t('common.form.sendFailed'))
    }

    isSubmitted.value = true
  } catch (error: any) {
    console.error('Contact form error:', error)
    errorMessage.value = error.message || t('common.form.sendFailedRetry')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <div class="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ t('contact.hero.title') }}</h1>
        <p class="text-xl text-primary-100 max-w-2xl mx-auto">{{ t('contact.hero.subtitle') }}</p>
      </div>
    </div>

    <div class="container-custom py-12">
      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Left Column - Contact Info -->
        <div class="lg:col-span-1 space-y-8">
          <!-- Email Card -->
          <div class="bg-white rounded-2xl p-6 shadow-soft">
            <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ t('contact.info.email.title') }}</h3>
            <p class="text-gray-600 text-sm mb-3">{{ t('contact.info.email.description') }}</p>
            <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:text-primary-700 font-medium">
              contact@invoratec.cn
            </a>
          </div>

          <!-- Phone Card -->
          <div class="bg-white rounded-2xl p-6 shadow-soft">
            <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ t('contact.info.phone.title') }}</h3>
            <p class="text-gray-600 text-sm mb-3">{{ t('contact.info.phone.description') }}</p>
            <a href="tel:+12135109160" class="text-blue-600 hover:text-blue-700 font-medium">
              (213) 510-9160
            </a>
          </div>

          <!-- Response Time Card -->
          <div class="bg-white rounded-2xl p-6 shadow-soft">
            <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 class="font-semibold text-gray-900 mb-2">{{ t('contact.info.response.title') }}</h3>
            <p class="text-gray-600 text-sm">{{ t('contact.info.response.description') }}</p>
          </div>

          <!-- Social Links Card -->
          <div class="bg-white rounded-2xl p-6 shadow-soft">
            <h3 class="font-semibold text-gray-900 mb-4">{{ t('contact.info.social.title') }}</h3>
            <div class="flex gap-3">
              <a href="https://twitter.com/invoratecai" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors group">
                <svg class="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/invoratecai" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors group">
                <svg class="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@invoratecai" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-primary-100 transition-colors group">
                <svg class="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column - Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl p-8 shadow-lg">
            <div v-if="isSubmitted" class="text-center py-12">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ t('contact.success.title') }}</h3>
              <p class="text-gray-600">{{ t('contact.success.message') }}</p>
            </div>

            <form v-else @submit.prevent="handleSubmit" class="space-y-6">
              <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ t('contact.form.title') }}</h2>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('contact.form.name') }} *</label>
                  <input
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('contact.form.email') }} *</label>
                  <input
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('contact.form.company') }}</label>
                  <input
                    v-model="form.company"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('contact.form.subject') }} *</label>
                  <select
                    v-model="form.subject"
                    required
                    class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="">{{ t('contact.form.selectSubject') }}</option>
                    <option value="general">{{ t('contact.form.subjects.general') }}</option>
                    <option value="sales">{{ t('contact.form.subjects.sales') }}</option>
                    <option value="support">{{ t('contact.form.subjects.support') }}</option>
                    <option value="partnership">{{ t('contact.form.subjects.partnership') }}</option>
                    <option value="other">{{ t('contact.form.subjects.other') }}</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('contact.form.message') }} *</label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                  :placeholder="t('contact.form.messagePlaceholder')"
                ></textarea>
              </div>

              <!-- Error Message -->
              <div v-if="errorMessage" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
                {{ errorMessage }}
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn btn-primary py-4"
              >
                <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                  <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ t('contact.form.submitting') }}
                </span>
                <span v-else>{{ t('contact.form.submit') }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
