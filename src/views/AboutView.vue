<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const values = [
  { key: 'innovation', icon: '💡' },
  { key: 'quality', icon: '✨' },
  { key: 'collaboration', icon: '🤝' },
  { key: 'impact', icon: '🎯' },
]

const goals = [
  { key: 'transform', icon: '🚀' },
  { key: 'empower', icon: '💪' },
  { key: 'connect', icon: '🔗' },
  { key: 'innovate', icon: '⚡' },
]

// Contact form
const contactForm = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)
const errorMessage = ref('')

const CONTACT_API_URL = 'https://us-central1-zoidberg-aiassistant-tutorial.cloudfunctions.net/sendContactEmail'

const handleContactSubmit = async () => {
  if (!contactForm.value.name || !contactForm.value.email || !contactForm.value.message) {
    errorMessage.value = t('common.form.requiredFields')
    return
  }

  isSubmitting.value = true
  errorMessage.value = ''

  try {
    const response = await fetch(CONTACT_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: contactForm.value.name,
        email: contactForm.value.email,
        company: '',
        subject: 'general',
        message: contactForm.value.message,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || t('common.form.sendFailed'))
    }

    isSubmitted.value = true
    contactForm.value = { name: '', email: '', message: '' }
  } catch (error: any) {
    console.error('Contact form error:', error)
    errorMessage.value = error.message || t('common.form.sendFailedRetry')
  } finally {
    isSubmitting.value = false
  }
}

// Job Application form
const showJobForm = ref(false)
const jobForm = ref({
  name: '',
  email: '',
  phone: '',
  position: '',
  experience: '',
  linkedin: '',
  portfolio: '',
  coverLetter: '',
})

const isJobSubmitting = ref(false)
const isJobSubmitted = ref(false)
const jobErrorMessage = ref('')

const JOB_API_URL = 'https://us-central1-zoidberg-aiassistant-tutorial.cloudfunctions.net/sendJobApplication'

const positions = [
  { value: 'software-engineer', label: 'Software Engineer' },
  { value: 'frontend-developer', label: 'Frontend Developer' },
  { value: 'backend-developer', label: 'Backend Developer' },
  { value: 'bim-specialist', label: 'BIM Specialist' },
  { value: 'ai-engineer', label: 'AI/ML Engineer' },
  { value: 'product-manager', label: 'Product Manager' },
  { value: 'ux-designer', label: 'UX Designer' },
  { value: 'sales', label: 'Sales Representative' },
  { value: 'marketing', label: 'Marketing Specialist' },
  { value: 'other', label: 'Other' },
]

const experienceLevels = [
  { value: '0-1', label: '0-1 years' },
  { value: '1-3', label: '1-3 years' },
  { value: '3-5', label: '3-5 years' },
  { value: '5-10', label: '5-10 years' },
  { value: '10+', label: '10+ years' },
]

const handleJobSubmit = async () => {
  if (!jobForm.value.name || !jobForm.value.email || !jobForm.value.position || !jobForm.value.coverLetter) {
    jobErrorMessage.value = t('common.form.requiredFields')
    return
  }

  isJobSubmitting.value = true
  jobErrorMessage.value = ''

  try {
    const response = await fetch(JOB_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobForm.value),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || t('common.form.sendFailed'))
    }

    isJobSubmitted.value = true
    jobForm.value = {
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      linkedin: '',
      portfolio: '',
      coverLetter: '',
    }
  } catch (error: any) {
    console.error('Job application error:', error)
    jobErrorMessage.value = error.message || t('common.form.sendFailedRetry')
  } finally {
    isJobSubmitting.value = false
  }
}

const closeJobForm = () => {
  showJobForm.value = false
  isJobSubmitted.value = false
  jobErrorMessage.value = ''
}
</script>

<template>
  <div>
    <!-- Hero Section with Banner Image -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="/images/banners/banner-gradient.jpeg"
          alt="About Banner"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/70"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">{{ t('about.hero.title') }}</h1>
          <p class="text-xl text-white/80">{{ t('about.hero.subtitle') }}</p>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ t('about.mission.title') }}</h2>
            <p class="text-lg text-gray-600 mb-6">{{ t('about.mission.description') }}</p>
            <p class="text-gray-600">{{ t('about.mission.details') }}</p>
          </div>
          <div class="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/bim-ai/mission-scene.png"
              alt="Making BIM Smarter"
              class="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Where BIM Meets AI Section -->
    <section class="section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('about.bimMeetsAi.title') }}</h2>
          <p class="text-lg text-white/70 max-w-3xl mx-auto">{{ t('about.bimMeetsAi.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <!-- BIM Expertise -->
          <div class="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <div class="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4">
              🏛️
            </div>
            <h3 class="text-xl font-bold mb-3">{{ t('about.bimMeetsAi.bim.title') }}</h3>
            <p class="text-white/70 mb-4">{{ t('about.bimMeetsAi.bim.description') }}</p>
            <ul class="space-y-2 text-sm text-white/60">
              <li class="flex items-center gap-2">
                <span class="text-cyan-400">✓</span>
                {{ t('about.bimMeetsAi.bim.items.modeling') }}
              </li>
              <li class="flex items-center gap-2">
                <span class="text-cyan-400">✓</span>
                {{ t('about.bimMeetsAi.bim.items.coordination') }}
              </li>
              <li class="flex items-center gap-2">
                <span class="text-cyan-400">✓</span>
                {{ t('about.bimMeetsAi.bim.items.management') }}
              </li>
            </ul>
          </div>

          <!-- AI Technology -->
          <div class="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6">
            <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl mb-4">
              🤖
            </div>
            <h3 class="text-xl font-bold mb-3">{{ t('about.bimMeetsAi.ai.title') }}</h3>
            <p class="text-white/70 mb-4">{{ t('about.bimMeetsAi.ai.description') }}</p>
            <ul class="space-y-2 text-sm text-white/60">
              <li class="flex items-center gap-2">
                <span class="text-purple-400">✓</span>
                {{ t('about.bimMeetsAi.ai.items.nlp') }}
              </li>
              <li class="flex items-center gap-2">
                <span class="text-purple-400">✓</span>
                {{ t('about.bimMeetsAi.ai.items.automation') }}
              </li>
              <li class="flex items-center gap-2">
                <span class="text-purple-400">✓</span>
                {{ t('about.bimMeetsAi.ai.items.insights') }}
              </li>
            </ul>
          </div>

          <!-- The Result -->
          <div class="bg-gradient-to-br from-primary-500/20 to-purple-500/20 backdrop-blur border border-primary-500/30 rounded-2xl p-6">
            <div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center text-2xl mb-4">
              ✨
            </div>
            <h3 class="text-xl font-bold mb-3">{{ t('about.bimMeetsAi.result.title') }}</h3>
            <p class="text-white/70 mb-4">{{ t('about.bimMeetsAi.result.description') }}</p>
            <ul class="space-y-2 text-sm text-white/60">
              <li class="flex items-center gap-2">
                <span class="text-primary-400">✓</span>
                {{ t('about.bimMeetsAi.result.items.efficiency') }}
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary-400">✓</span>
                {{ t('about.bimMeetsAi.result.items.accuracy') }}
              </li>
              <li class="flex items-center gap-2">
                <span class="text-primary-400">✓</span>
                {{ t('about.bimMeetsAi.result.items.collaboration') }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('about.products.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">{{ t('about.products.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- BIM AI -->
          <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <img src="/images/revit-logo.svg" alt="Revit" class="w-10 h-10 rounded-lg" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">{{ t('about.products.bim.title') }}</h3>
                <p class="text-gray-500">{{ t('about.products.bim.subtitle') }}</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6">{{ t('about.products.bim.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">{{ t('about.products.bim.features.assistant') }}</span>
              <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">{{ t('about.products.bim.features.voice') }}</span>
              <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">{{ t('about.products.bim.features.automation') }}</span>
              <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">{{ t('about.products.bim.features.sync') }}</span>
            </div>
          </div>

          <!-- Web AI -->
          <div class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl">
                🌐
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">{{ t('about.products.web.title') }}</h3>
                <p class="text-gray-500">{{ t('about.products.web.subtitle') }}</p>
              </div>
            </div>
            <p class="text-gray-600 mb-6">{{ t('about.products.web.description') }}</p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">{{ t('about.products.web.features.viewer') }}</span>
              <span class="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">{{ t('about.products.web.features.tasks') }}</span>
              <span class="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">{{ t('about.products.web.features.coordination') }}</span>
              <span class="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">{{ t('about.products.web.features.reports') }}</span>
            </div>
          </div>
        </div>

        <div class="text-center mt-8">
          <router-link to="/product" class="btn btn-primary">{{ t('about.products.cta') }}</router-link>
        </div>
      </div>
    </section>

    <!-- Showcase Image Section -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/bim-ai/goals-building.png"
              alt="BIM AI Goals"
              class="w-full h-auto"
            />
          </div>
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('about.goals.title') }}</h2>
            <p class="text-lg text-gray-600 mb-8">{{ t('about.goals.subtitle') }}</p>

            <div class="grid grid-cols-2 gap-4">
              <div v-for="goal in goals" :key="goal.key" class="bg-white rounded-xl p-4 shadow-sm">
                <div class="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center text-xl mb-3">
                  {{ goal.icon }}
                </div>
                <h3 class="font-bold text-gray-900 mb-1">{{ t(`about.goals.items.${goal.key}.title`) }}</h3>
                <p class="text-gray-600 text-sm">{{ t(`about.goals.items.${goal.key}.description`) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section bg-white">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-gray-900 mb-4 text-center">{{ t('about.values.title') }}</h2>
        <p class="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">{{ t('about.values.subtitle') }}</p>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="value in values" :key="value.key" class="card text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
              {{ value.icon }}
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">{{ t(`about.values.items.${value.key}.title`) }}</h3>
            <p class="text-gray-600 text-sm">{{ t(`about.values.items.${value.key}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team / Careers Section -->
    <section class="section bg-gray-50">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ t('about.team.title') }}</h2>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{{ t('about.team.subtitle') }}</p>
        <button @click="showJobForm = true" class="btn btn-primary">{{ t('about.team.cta') }}</button>
      </div>
    </section>

    <!-- Job Application Modal -->
    <Teleport to="body">
      <div v-if="showJobForm" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="closeJobForm"></div>

        <!-- Modal -->
        <div class="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <!-- Header -->
          <div class="sticky top-0 bg-gradient-to-r from-emerald-500 to-teal-600 px-6 py-5 rounded-t-2xl">
            <div class="flex items-center justify-between">
              <div>
                <h3 class="text-xl font-bold text-white">{{ t('about.careers.formTitle') }}</h3>
                <p class="text-emerald-100 text-sm mt-1">{{ t('about.careers.formSubtitle') }}</p>
              </div>
              <button @click="closeJobForm" class="text-white/80 hover:text-white transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Success Message -->
          <div v-if="isJobSubmitted" class="p-8 text-center">
            <div class="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
              ✓
            </div>
            <h4 class="text-2xl font-bold text-gray-900 mb-3">{{ t('about.careers.success') }}</h4>
            <p class="text-gray-600 mb-6">{{ t('about.careers.successMessage') }}</p>
            <button @click="closeJobForm" class="btn btn-primary">{{ t('common.close') }}</button>
          </div>

          <!-- Application Form -->
          <form v-else class="p-6 space-y-5" @submit.prevent="handleJobSubmit">
            <!-- Name & Email Row -->
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">
                  {{ t('about.careers.name') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="jobForm.name"
                  type="text"
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  :placeholder="t('about.careers.namePlaceholder')"
                  required
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">
                  {{ t('about.careers.email') }} <span class="text-red-500">*</span>
                </label>
                <input
                  v-model="jobForm.email"
                  type="email"
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  :placeholder="t('about.careers.emailPlaceholder')"
                  required
                />
              </div>
            </div>

            <!-- Phone & Position Row -->
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">
                  {{ t('about.careers.phone') }}
                </label>
                <input
                  v-model="jobForm.phone"
                  type="tel"
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  :placeholder="t('about.careers.phonePlaceholder')"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">
                  {{ t('about.careers.position') }} <span class="text-red-500">*</span>
                </label>
                <select
                  v-model="jobForm.position"
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white"
                  required
                >
                  <option value="" disabled>{{ t('about.careers.positionPlaceholder') }}</option>
                  <option v-for="pos in positions" :key="pos.value" :value="pos.value">
                    {{ t(`about.careers.positions.${pos.value}`, pos.label) }}
                  </option>
                </select>
              </div>
            </div>

            <!-- Experience & LinkedIn Row -->
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">
                  {{ t('about.careers.experience') }}
                </label>
                <select
                  v-model="jobForm.experience"
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors bg-white"
                >
                  <option value="">{{ t('about.careers.experiencePlaceholder') }}</option>
                  <option v-for="exp in experienceLevels" :key="exp.value" :value="exp.value">
                    {{ t(`about.careers.experienceLevels.${exp.value}`, exp.label) }}
                  </option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1.5">
                  {{ t('about.careers.linkedin') }}
                </label>
                <input
                  v-model="jobForm.linkedin"
                  type="url"
                  class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
            </div>

            <!-- Portfolio -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                {{ t('about.careers.portfolio') }}
              </label>
              <input
                v-model="jobForm.portfolio"
                type="url"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                :placeholder="t('about.careers.portfolioPlaceholder')"
              />
            </div>

            <!-- Cover Letter -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-1.5">
                {{ t('about.careers.coverLetter') }} <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model="jobForm.coverLetter"
                rows="5"
                class="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                :placeholder="t('about.careers.coverLetterPlaceholder')"
                required
              ></textarea>
            </div>

            <!-- Error Message -->
            <div v-if="jobErrorMessage" class="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {{ jobErrorMessage }}
            </div>

            <!-- Submit Button -->
            <div class="flex gap-3 pt-2">
              <button
                type="button"
                @click="closeJobForm"
                class="flex-1 btn border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                {{ t('common.cancel') }}
              </button>
              <button
                type="submit"
                :disabled="isJobSubmitting"
                class="flex-1 btn bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isJobSubmitting" class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ t('about.careers.submitting') }}
                </span>
                <span v-else>{{ t('about.careers.submit') }}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Teleport>

    <!-- Contact Section -->
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('about.contact.title') }}</h2>
            <p class="text-white/80 mb-8">{{ t('about.contact.subtitle') }}</p>

            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl">
                  📧
                </div>
                <div>
                  <p class="text-sm text-white/60">{{ t('about.contact.email.label') }}</p>
                  <a href="mailto:contact@invoratec.cn" class="text-white font-medium hover:text-white/80">contact@invoratec.cn</a>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl">
                  🌐
                </div>
                <div>
                  <p class="text-sm text-white/60">{{ t('about.contact.website.label') }}</p>
                  <a href="https://cloud.invoratec.com" target="_blank" class="text-white font-medium hover:text-white/80">cloud.invoratec.com</a>
                </div>
              </div>

              <div class="flex items-center gap-4">
                <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-xl">
                  💬
                </div>
                <div>
                  <p class="text-sm text-white/60">{{ t('about.contact.demo.label') }}</p>
                  <router-link to="/demo" class="text-white font-medium hover:text-white/80">{{ t('about.contact.demo.link') }}</router-link>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white/10 backdrop-blur rounded-2xl p-8">
            <h3 class="text-xl font-bold mb-4">{{ t('about.contact.form.title') }}</h3>

            <!-- Success Message -->
            <div v-if="isSubmitted" class="text-center py-8">
              <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">✓</div>
              <h4 class="text-xl font-bold mb-2">{{ t('about.contact.form.success', 'Message Sent!') }}</h4>
              <p class="text-white/70">{{ t('about.contact.form.successMessage', 'We will get back to you soon.') }}</p>
            </div>

            <!-- Contact Form -->
            <form v-else class="space-y-4" @submit.prevent="handleContactSubmit">
              <div>
                <input
                  v-model="contactForm.name"
                  type="text"
                  :placeholder="t('about.contact.form.name')"
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  required
                />
              </div>
              <div>
                <input
                  v-model="contactForm.email"
                  type="email"
                  :placeholder="t('about.contact.form.email')"
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40"
                  required
                />
              </div>
              <div>
                <textarea
                  v-model="contactForm.message"
                  :placeholder="t('about.contact.form.message')"
                  rows="4"
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 resize-none"
                  required
                ></textarea>
              </div>

              <!-- Error Message -->
              <div v-if="errorMessage" class="bg-red-500/20 border border-red-400/30 text-white px-4 py-3 rounded-lg text-sm">
                {{ errorMessage }}
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn bg-white text-primary-600 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span v-if="isSubmitting">{{ t('about.contact.form.sending', 'Sending...') }}</span>
                <span v-else>{{ t('about.contact.form.submit') }}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
