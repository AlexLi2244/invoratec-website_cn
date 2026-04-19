<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getActivity, getActivityContent, getAllActivities } from '../data/activities'

const route = useRoute()
const { t, locale } = useI18n()

const slug = computed(() => route.params.slug as string)
const activity = computed(() => getActivity(slug.value))
const activityContent = computed(() => getActivityContent(slug.value))

const content = computed(() => {
  if (!activityContent.value) return null
  return locale.value === 'zh' ? activityContent.value.zh : activityContent.value.en
})

// Get related activities (other activities)
const relatedActivities = computed(() => {
  if (!activity.value) return []
  return getAllActivities()
    .filter(a => a.slug !== slug.value)
    .slice(0, 2)
})

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
      return 'bg-blue-100 text-blue-700'
    case 'Conference':
      return 'bg-purple-100 text-purple-700'
    case 'Workshop':
      return 'bg-green-100 text-green-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

const getRegistrationStatusColor = (status: string) => {
  switch (status) {
    case 'open':
      return 'bg-green-100 text-green-700'
    case 'closed':
      return 'bg-red-100 text-red-700'
    case 'coming-soon':
      return 'bg-yellow-100 text-yellow-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

const getRegistrationStatusText = (status: string) => {
  switch (status) {
    case 'open': return t('activityDetail.registration.statusOpen')
    case 'closed': return t('activityDetail.registration.statusClosed')
    case 'coming-soon': return t('activityDetail.registration.statusComingSoon')
    default: return status
  }
}
</script>

<template>
  <div class="pt-20">
    <!-- Hero Section with gradient background -->
    <section v-if="activity && content" class="relative overflow-hidden text-white" :class="`bg-gradient-to-br ${getEventTypeColor(activity.eventType)}`">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <div class="container-custom py-16 relative z-10">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <router-link to="/new-media" class="text-white/70 hover:text-white transition-colors">{{ t('newMedia.hero.title') }}</router-link>
          <span class="text-white/50 mx-2">/</span>
          <span class="text-white/70">{{ t('newMedia.categories.activity') }}</span>
        </nav>

        <div class="max-w-4xl">
          <!-- Event Type Badge -->
          <div class="flex flex-wrap items-center gap-4 mb-6">
            <span class="px-4 py-1.5 bg-white/20 backdrop-blur rounded-full text-sm font-medium">
              {{ activity.eventType }}
            </span>
            <span :class="['px-3 py-1 rounded-full text-sm font-medium', getRegistrationStatusColor(content.registration.status)]">
              {{ getRegistrationStatusText(content.registration.status) }}
            </span>
          </div>

          <!-- Title -->
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {{ content.title }}
          </h1>

          <!-- Description -->
          <p class="text-xl text-white/90 mb-8 leading-relaxed">
            {{ content.description }}
          </p>

          <!-- Event Details -->
          <div class="flex flex-wrap gap-6 text-sm">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
              <span>{{ activity.date }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>{{ activity.time }}</span>
            </div>
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>{{ activity.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Image -->
    <section v-if="activity" class="bg-white">
      <div class="container-custom -mt-8 relative z-20">
        <div class="max-w-4xl mx-auto">
          <div class="aspect-video rounded-2xl overflow-hidden shadow-xl" :class="`bg-gradient-to-br ${getEventTypeColor(activity.eventType)}/10`">
            <img
              :src="activity.image"
              :alt="content?.title"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <article v-if="content && activity" class="section bg-white pt-12">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <!-- Tags -->
          <div class="flex flex-wrap gap-2 mb-8 pb-8 border-b border-gray-200">
            <span
              v-for="tag in activity.tags"
              :key="tag"
              class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {{ tag }}
            </span>
          </div>

          <div class="grid lg:grid-cols-3 gap-12">
            <!-- Left Column - Main Content -->
            <div class="lg:col-span-2">
              <!-- Overview -->
              <div class="mb-10">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">
                  {{ t('activityDetail.overview') }}
                </h2>
                <p class="text-gray-600 leading-relaxed text-lg">
                  {{ content.overview }}
                </p>
              </div>

              <!-- Agenda -->
              <div class="mb-10">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                  {{ t('activityDetail.agenda') }}
                </h2>
                <div class="space-y-4">
                  <div
                    v-for="(item, index) in content.agenda"
                    :key="index"
                    class="flex gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div class="flex-shrink-0 w-28 text-sm font-medium text-gray-500">
                      {{ item.time }}
                    </div>
                    <div>
                      <h3 class="font-semibold text-gray-900">{{ item.topic }}</h3>
                      <p v-if="item.description" class="text-sm text-gray-600 mt-1">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Highlights -->
              <div class="mb-10">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">
                  {{ t('activityDetail.highlights') }}
                </h2>
                <ul class="space-y-3">
                  <li
                    v-for="(highlight, index) in content.highlights"
                    :key="index"
                    class="flex items-start gap-3"
                  >
                    <span :class="['flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5', getEventTypeBadgeColor(activity.eventType)]">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </span>
                    <span class="text-gray-700">{{ highlight }}</span>
                  </li>
                </ul>
              </div>

              <!-- Who Should Attend -->
              <div class="mb-10">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">
                  {{ t('activityDetail.whoShouldAttend') }}
                </h2>
                <ul class="space-y-3">
                  <li
                    v-for="(person, index) in content.whoShouldAttend"
                    :key="index"
                    class="flex items-start gap-3"
                  >
                    <span class="flex-shrink-0 w-6 h-6 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center mt-0.5">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                      </svg>
                    </span>
                    <span class="text-gray-700">{{ person }}</span>
                  </li>
                </ul>
              </div>

              <!-- Speakers -->
              <div class="mb-10">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">
                  {{ t('activityDetail.speakers') }}
                </h2>
                <div class="grid sm:grid-cols-2 gap-4">
                  <div
                    v-for="speaker in activity.speakers"
                    :key="speaker.name"
                    class="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div :class="['w-14 h-14 rounded-full flex items-center justify-center text-2xl', `bg-gradient-to-br ${getEventTypeColor(activity.eventType)}`]">
                      {{ speaker.avatar }}
                    </div>
                    <div>
                      <div class="font-semibold text-gray-900">{{ speaker.name }}</div>
                      <div class="text-sm text-gray-600">{{ speaker.role }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Right Column - Registration Sidebar -->
            <div class="lg:col-span-1">
              <div class="sticky top-24">
                <div :class="['rounded-2xl p-6 border-2', `border-${activity.eventType === 'Webinar' ? 'blue' : activity.eventType === 'Conference' ? 'purple' : 'green'}-200 bg-gradient-to-br ${getEventTypeColor(activity.eventType)}/5`]">
                  <h3 class="text-xl font-bold text-gray-900 mb-4">
                    {{ t('activityDetail.registration.title') }}
                  </h3>

                  <div class="space-y-4 mb-6">
                    <div class="flex justify-between">
                      <span class="text-gray-600">{{ t('common.date') }}</span>
                      <span class="font-medium text-gray-900">{{ activity.date }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">{{ t('common.time') }}</span>
                      <span class="font-medium text-gray-900">{{ activity.time }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">{{ t('activityDetail.registration.duration') }}</span>
                      <span class="font-medium text-gray-900">{{ activity.duration }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">{{ t('activityDetail.registration.format') }}</span>
                      <span class="font-medium text-gray-900">{{ activity.isOnline ? t('activityDetail.registration.online') : t('activityDetail.registration.inPerson') }}</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-gray-600">{{ t('activityDetail.registration.price') }}</span>
                      <span class="font-bold text-gray-900">{{ content.registration.price }}</span>
                    </div>
                    <div v-if="content.registration.seats" class="flex justify-between">
                      <span class="text-gray-600">{{ t('activityDetail.registration.seats') }}</span>
                      <span class="font-medium text-gray-900">{{ content.registration.seats }}</span>
                    </div>
                  </div>

                  <router-link
                    :to="content.registration.status === 'open' ? `/activities/${slug}/register` : '#'"
                    :class="['w-full btn text-center block', content.registration.status === 'open' ? `bg-gradient-to-r ${getEventTypeColor(activity.eventType)} text-white hover:opacity-90` : 'bg-gray-200 text-gray-500 cursor-not-allowed']"
                  >
                    {{ content.registration.status === 'open' ? t('activityDetail.registration.registerNow') : getRegistrationStatusText(content.registration.status) }}
                  </router-link>

                  <p class="text-xs text-gray-500 mt-4 text-center">
                    {{ t('activityDetail.registration.confirmationNote') }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Share & Actions -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p class="text-gray-600 mb-2">{{ t('activityDetail.shareEvent') }}</p>
                <div class="flex gap-3">
                  <button class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                  </button>
                  <button class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
                  </button>
                  <button class="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </button>
                </div>
              </div>

              <router-link to="/new-media" class="btn btn-outline">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                {{ t('common.backToNewMedia') }}
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- Related Activities -->
    <section v-if="relatedActivities.length > 0" class="section bg-gray-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">
            {{ t('activityDetail.moreEvents') }}
          </h2>

          <div class="grid md:grid-cols-2 gap-6">
            <router-link
              v-for="relatedActivity in relatedActivities"
              :key="relatedActivity.slug"
              :to="`/activities/${relatedActivity.slug}`"
              class="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all"
            >
              <div class="aspect-video overflow-hidden relative">
                <img
                  :src="relatedActivity.image"
                  :alt="relatedActivity.slug"
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-sm font-medium text-gray-800">
                  {{ relatedActivity.eventType }}
                </div>
              </div>
              <div class="p-6">
                <span :class="['text-xs px-2 py-1 rounded-full', getEventTypeBadgeColor(relatedActivity.eventType)]">
                  {{ relatedActivity.eventType }}
                </span>
                <h3 class="text-lg font-bold text-gray-900 mt-3 group-hover:text-primary-600 transition-colors">
                  {{ t(`newMedia.activities.${relatedActivity.slug}.title`) }}
                </h3>
                <p class="text-gray-600 text-sm mt-2">
                  {{ relatedActivity.date }} | {{ relatedActivity.time }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-4">{{ t('activityDetail.cta.title') }}</h2>
        <p class="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{{ t('activityDetail.cta.subtitle') }}</p>
        <router-link to="/demo" class="btn bg-white text-primary-600 hover:bg-gray-100">
          {{ t('newMedia.cta.button') }}
        </router-link>
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

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
