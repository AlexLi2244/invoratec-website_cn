<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  company: '',
  phone: '',
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
      body: JSON.stringify({
        name: form.value.name,
        email: form.value.email,
        company: form.value.company,
        subject: 'demo',
        message: `Phone: ${form.value.phone || 'Not provided'}\n\nProject Details:\n${form.value.message || 'No additional details provided'}`,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || t('common.form.requestFailed'))
    }

    isSubmitted.value = true
  } catch (error: any) {
    console.error('Demo request error:', error)
    errorMessage.value = error.message || t('common.form.requestFailedRetry')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <div class="container-custom py-12">
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Left Column - Info -->
        <div>
          <h1 class="text-4xl font-bold text-gray-900 mb-4">{{ t('demo.hero.title') }}</h1>
          <p class="text-xl text-gray-600 mb-8">{{ t('demo.hero.subtitle') }}</p>

          <!-- Benefits -->
          <div class="space-y-6 mb-8">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🎯</div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">{{ t('demo.benefits.personalized.title') }}</h3>
                <p class="text-gray-600">{{ t('demo.benefits.personalized.description') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">💡</div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">{{ t('demo.benefits.expert.title') }}</h3>
                <p class="text-gray-600">{{ t('demo.benefits.expert.description') }}</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">🚀</div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">{{ t('demo.benefits.quickStart.title') }}</h3>
                <p class="text-gray-600">{{ t('demo.benefits.quickStart.description') }}</p>
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="bg-white rounded-xl p-6 shadow-soft">
            <h3 class="font-semibold text-gray-900 mb-4">{{ t('demo.contact.title') }}</h3>
            <div class="space-y-3 text-gray-600">
              <p>📧 contact@invoratec.cn</p>
              <p>📞 (213) 510-9160</p>
            </div>
          </div>
        </div>

        <!-- Right Column - Form -->
        <div class="bg-white rounded-2xl p-8 shadow-lg">
          <div v-if="isSubmitted" class="text-center py-12">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ t('demo.success.title') }}</h3>
            <p class="text-gray-600">{{ t('demo.success.message') }}</p>
          </div>

          <form v-else @submit.prevent="handleSubmit" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('demo.form.name') }} *</label>
              <input
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('demo.form.email') }} *</label>
              <input
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('demo.form.company') }}</label>
              <input
                v-model="form.company"
                type="text"
                class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('demo.form.phone') }}</label>
              <input
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">{{ t('demo.form.message') }}</label>
              <textarea
                v-model="form.message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
              ></textarea>
            </div>

            <!-- Error Message -->
            <div v-if="errorMessage" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl">
              {{ errorMessage }}
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full btn btn-primary"
            >
              <span v-if="isSubmitting">{{ t('demo.form.submitting') }}</span>
              <span v-else>{{ t('demo.form.submit') }}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>