<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getActivity, getActivityContent } from '../data/activities'

const route = useRoute()
const router = useRouter()
const { t, locale } = useI18n()

const slug = computed(() => route.params.slug as string)
const activity = computed(() => getActivity(slug.value))
const activityContent = computed(() => getActivityContent(slug.value))

const content = computed(() => {
  if (!activityContent.value) return null
  return locale.value === 'zh' ? activityContent.value.zh : activityContent.value.en
})

// Form state
const formData = ref({
  fullName: '',
  email: '',
  phone: '',
  company: '',
  jobTitle: '',
  attendees: 1,
  dietaryRestrictions: '',
  howDidYouHear: '',
  agreeToTerms: false
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

const getEventTypeColor = (type: string) => {
  switch (type) {
    case 'Webinar':
      return 'from-blue-500 to-blue-600'
    case 'Conference':
      return 'from-purple-500 to-purple-600'
    case 'Workshop':
      return 'from-green-500 to-green-600'
    default:
      return 'from-gray-500 to-gray-600'
  }
}

const getEventTypeBadgeColor = (type: string) => {
  switch (type) {
    case 'Webinar':
      return 'bg-blue-100 text-blue-700 border-blue-200'
    case 'Conference':
      return 'bg-purple-100 text-purple-700 border-purple-200'
    case 'Workshop':
      return 'bg-green-100 text-green-700 border-green-200'
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200'
  }
}

const howDidYouHearOptions = computed(() => [
  { value: '', label: t('activityRegistration.form.howDidYouHear.pleaseSelect') },
  { value: 'search', label: t('activityRegistration.form.howDidYouHear.searchEngine') },
  { value: 'social', label: t('activityRegistration.form.howDidYouHear.socialMedia') },
  { value: 'colleague', label: t('activityRegistration.form.howDidYouHear.colleague') },
  { value: 'email', label: t('activityRegistration.form.howDidYouHear.email') },
  { value: 'event', label: t('activityRegistration.form.howDidYouHear.otherEvent') },
  { value: 'other', label: t('activityRegistration.form.howDidYouHear.other') }
])

const handleSubmit = async () => {
  if (!formData.value.agreeToTerms) {
    alert(t('activityRegistration.form.agreeToTermsAlert'))
    return
  }

  isSubmitting.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  isSubmitting.value = false
  isSubmitted.value = true
}

const goBack = () => {
  router.push(`/activities/${slug.value}`)
}
</script>

<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section v-if="activity && content" class="relative overflow-hidden text-white" :class="`bg-gradient-to-br ${getEventTypeColor(activity.eventType)}`">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <div class="container-custom py-12 relative z-10">
        <!-- Breadcrumb -->
        <nav class="mb-6">
          <router-link to="/new-media" class="text-white/70 hover:text-white transition-colors">{{ t('common.newMedia') }}</router-link>
          <span class="text-white/50 mx-2">/</span>
          <router-link :to="`/activities/${slug}`" class="text-white/70 hover:text-white transition-colors">{{ content.title }}</router-link>
          <span class="text-white/50 mx-2">/</span>
          <span class="text-white/70">{{ t('activityRegistration.breadcrumb.register') }}</span>
        </nav>

        <div class="max-w-3xl">
          <div class="flex items-center gap-3 mb-4">
            <span class="px-4 py-1.5 bg-white/20 backdrop-blur rounded-full text-sm font-medium">
              {{ activity.eventType }}
            </span>
          </div>
          <h1 class="text-3xl md:text-4xl font-bold mb-3">
            {{ t('activityRegistration.hero.title') }}
          </h1>
          <p class="text-xl text-white/90">
            {{ content.title }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section v-if="activity && content" class="section">
      <div class="container-custom">
        <div class="max-w-5xl mx-auto">
          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Left Column - Form -->
            <div class="lg:col-span-2">
              <!-- Success State -->
              <div v-if="isSubmitted" class="bg-white rounded-2xl shadow-soft p-8 text-center">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg class="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h2 class="text-2xl font-bold text-gray-900 mb-4">
                  {{ t('activityRegistration.success.title') }}
                </h2>
                <p class="text-gray-600 mb-6">
                  {{ t('activityRegistration.success.message') }}
                </p>
                <div class="bg-gray-50 rounded-xl p-6 mb-6 text-left">
                  <h3 class="font-semibold text-gray-900 mb-4">{{ t('activityRegistration.success.eventDetails') }}</h3>
                  <div class="space-y-2 text-sm">
                    <div class="flex justify-between">
                      <span class="text-gray-600">{{ t('activityRegistration.success.event') }}</span>
                      <span class="font-medium text-gray-900">{{ content.title }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">{{ t('common.date') }}</span>
                      <span class="font-medium text-gray-900">{{ activity.date }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">{{ t('common.time') }}</span>
                      <span class="font-medium text-gray-900">{{ activity.time }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">{{ t('common.location') }}</span>
                      <span class="font-medium text-gray-900">{{ activity.location }}</span>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                  <router-link :to="`/activities/${slug}`" class="btn btn-outline">
                    {{ t('activityRegistration.success.backToEvent') }}
                  </router-link>
                  <router-link to="/new-media" class="btn btn-primary">
                    {{ t('activityRegistration.success.browseMore') }}
                  </router-link>
                </div>
              </div>

              <!-- Registration Form -->
              <form v-else @submit.prevent="handleSubmit" class="bg-white rounded-2xl shadow-soft p-8">
                <h2 class="text-xl font-bold text-gray-900 mb-6">
                  {{ t('activityRegistration.form.title') }}
                </h2>

                <div class="space-y-6">
                  <!-- Full Name -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      {{ t('activityRegistration.form.fullName') }} *
                    </label>
                    <input
                      v-model="formData.fullName"
                      type="text"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      :placeholder="t('activityRegistration.form.fullNamePlaceholder')"
                    />
                  </div>

                  <!-- Email -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      {{ t('activityRegistration.form.email') }} *
                    </label>
                    <input
                      v-model="formData.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      :placeholder="t('activityRegistration.form.emailPlaceholder')"
                    />
                  </div>

                  <!-- Phone -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      {{ t('activityRegistration.form.phone') }} *
                    </label>
                    <input
                      v-model="formData.phone"
                      type="tel"
                      required
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      :placeholder="t('activityRegistration.form.phonePlaceholder')"
                    />
                  </div>

                  <!-- Company & Job Title -->
                  <div class="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">
                        {{ t('activityRegistration.form.company') }}
                      </label>
                      <input
                        v-model="formData.company"
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        :placeholder="t('activityRegistration.form.companyPlaceholder')"
                      />
                    </div>
                    <div>
                      <label class="block text-sm font-medium text-gray-700 mb-2">
                        {{ t('activityRegistration.form.jobTitle') }}
                      </label>
                      <input
                        v-model="formData.jobTitle"
                        type="text"
                        class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        :placeholder="t('activityRegistration.form.jobTitlePlaceholder')"
                      />
                    </div>
                  </div>

                  <!-- Number of Attendees (for non-online events) -->
                  <div v-if="!activity.isOnline">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      {{ t('activityRegistration.form.attendees') }}
                    </label>
                    <select
                      v-model="formData.attendees"
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
                    </select>
                  </div>

                  <!-- Dietary Restrictions (for non-online events) -->
                  <div v-if="!activity.isOnline">
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      {{ t('activityRegistration.form.dietary') }}
                    </label>
                    <input
                      v-model="formData.dietaryRestrictions"
                      type="text"
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      :placeholder="t('activityRegistration.form.dietaryPlaceholder')"
                    />
                  </div>

                  <!-- How did you hear -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">
                      {{ t('activityRegistration.form.howDidYouHearLabel') }}
                    </label>
                    <select
                      v-model="formData.howDidYouHear"
                      class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option v-for="option in howDidYouHearOptions" :key="option.value" :value="option.value">
                        {{ option.label }}
                      </option>
                    </select>
                  </div>

                  <!-- Terms Agreement -->
                  <div class="flex items-start gap-3">
                    <input
                      v-model="formData.agreeToTerms"
                      type="checkbox"
                      id="agreeToTerms"
                      class="mt-1 w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <label for="agreeToTerms" class="text-sm text-gray-600">
                      {{ t('activityRegistration.form.agreeToTerms') }}
                    </label>
                  </div>

                  <!-- Submit Button -->
                  <button
                    type="submit"
                    :disabled="isSubmitting"
                    :class="[
                      'w-full py-4 rounded-xl font-semibold text-white transition-all',
                      `bg-gradient-to-r ${getEventTypeColor(activity.eventType)}`,
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                    ]"
                  >
                    <span v-if="isSubmitting" class="flex items-center justify-center gap-2">
                      <svg class="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      {{ t('activityRegistration.form.submitting') }}
                    </span>
                    <span v-else>
                      {{ t('activityRegistration.form.submit') }}
                    </span>
                  </button>
                </div>
              </form>

              <!-- Back Link -->
              <div v-if="!isSubmitted" class="mt-6 text-center">
                <button @click="goBack" class="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                  </svg>
                  {{ t('activityRegistration.form.backToDetails') }}
                </button>
              </div>
            </div>

            <!-- Right Column - Event Summary -->
            <div class="lg:col-span-1">
              <div class="sticky top-24">
                <div :class="['rounded-2xl border-2 overflow-hidden', getEventTypeBadgeColor(activity.eventType)]">
                  <!-- Event Image -->
                  <div class="aspect-video overflow-hidden">
                    <img
                      :src="activity.image"
                      :alt="content.title"
                      class="w-full h-full object-cover"
                    />
                  </div>

                  <div class="p-6 bg-white">
                    <span :class="['text-xs px-3 py-1 rounded-full font-medium', getEventTypeBadgeColor(activity.eventType)]">
                      {{ activity.eventType }}
                    </span>

                    <h3 class="text-lg font-bold text-gray-900 mt-3 mb-4">
                      {{ content.title }}
                    </h3>

                    <div class="space-y-3 text-sm">
                      <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        <span class="text-gray-700">{{ activity.date }}</span>
                      </div>
                      <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span class="text-gray-700">{{ activity.time }}</span>
                      </div>
                      <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span class="text-gray-700">{{ activity.location }}</span>
                      </div>
                      <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <span class="font-semibold text-gray-900">{{ content.registration.price }}</span>
                      </div>
                      <div v-if="content.registration.seats" class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        <span class="text-gray-700">{{ content.registration.seats }} {{ t('activityRegistration.sidebar.seatsAvailable') }}</span>
                      </div>
                    </div>

                    <!-- Speakers -->
                    <div class="mt-6 pt-6 border-t border-gray-200">
                      <h4 class="text-sm font-semibold text-gray-900 mb-3">
                        {{ t('activityDetail.speakers') }}
                      </h4>
                      <div class="space-y-3">
                        <div
                          v-for="speaker in activity.speakers.slice(0, 2)"
                          :key="speaker.name"
                          class="flex items-center gap-3"
                        >
                          <div :class="['w-10 h-10 rounded-full flex items-center justify-center text-lg', `bg-gradient-to-br ${getEventTypeColor(activity.eventType)}`]">
                            {{ speaker.avatar }}
                          </div>
                          <div>
                            <div class="text-sm font-medium text-gray-900">{{ speaker.name }}</div>
                            <div class="text-xs text-gray-500">{{ speaker.role }}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Help Section -->
                <div class="mt-6 p-6 bg-white rounded-2xl shadow-soft">
                  <h4 class="font-semibold text-gray-900 mb-3">
                    {{ t('activityRegistration.sidebar.needHelp') }}
                  </h4>
                  <p class="text-sm text-gray-600 mb-4">
                    {{ t('activityRegistration.sidebar.helpDescription') }}
                  </p>
                  <a href="mailto:contact@invoratec.cn" class="text-primary-600 text-sm font-medium hover:text-primary-700 transition-colors">
                    contact@invoratec.cn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 404 State -->
    <section v-if="!activity || !content" class="section bg-white min-h-screen flex items-center">
      <div class="container-custom text-center">
        <div class="text-6xl mb-4">📅</div>
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          {{ t('activityDetail.notFound.title') }}
        </h1>
        <p class="text-gray-600 mb-8">
          {{ t('activityDetail.notFound.description') }}
        </p>
        <router-link to="/new-media" class="btn btn-primary">
          {{ t('common.backToNewMedia') }}
        </router-link>
      </div>
    </section>
  </div>
</template>
