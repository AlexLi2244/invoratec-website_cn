<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

type Category = 'all' | 'case-study' | 'knowledge' | 'activity'

const activeCategory = ref<Category>('all')

const categories = [
  { key: 'all', label: 'All', color: '' },
  { key: 'case-study', label: 'Case Study', color: 'bg-blue-500' },
  { key: 'knowledge', label: 'Knowledge Base', color: 'bg-purple-500' },
  { key: 'activity', label: 'Activity Center', color: 'bg-green-500' },
]

// Combined media items
const mediaItems = [
  // Case Studies
  {
    id: 1,
    category: 'case-study',
    slug: 'shanghai-xintiandi',
    image: '/images/case1.webp',
    date: '2024-12-15',
    stats: { timeSaved: '40%', costReduction: '25%' },
  },
  {
    id: 2,
    category: 'case-study',
    slug: 'ordos-smart-scenic',
    image: '/images/case2.webp',
    date: '2024-12-10',
    stats: { timeSaved: '35%', costReduction: '20%' },
  },
  {
    id: 3,
    category: 'case-study',
    slug: 'daxing-airport',
    image: '/images/case3.png',
    date: '2024-12-05',
    stats: { timeSaved: '45%', costReduction: '30%' },
  },
  // Knowledge Base (Blog posts)
  {
    id: 4,
    category: 'knowledge',
    slug: 'ai-bim-revolution',
    image: '/images/knowledge/knowledge-1.png',
    date: '2024-12-15',
  },
  {
    id: 5,
    category: 'knowledge',
    slug: 'construction-efficiency',
    image: '/images/knowledge/knowledge-2.png',
    date: '2024-12-10',
  },
  {
    id: 6,
    category: 'knowledge',
    slug: 'digital-twin-guide',
    image: '/images/knowledge/knowledge-3.jpg',
    date: '2024-12-05',
  },
  {
    id: 10,
    category: 'knowledge',
    slug: 'revit-ai-assistant-guide',
    image: '/images/knowledge/knowledge-4.png',
    date: '2024-12-18',
  },
  {
    id: 11,
    category: 'knowledge',
    slug: 'mep-coordination-best-practices',
    image: '/images/knowledge/knowledge-5.png',
    date: '2024-12-12',
  },
  {
    id: 12,
    category: 'knowledge',
    slug: 'cloud-collaboration-future',
    image: '/images/knowledge/knowledge-6.png',
    date: '2024-12-08',
  },
  // Activity Center
  {
    id: 7,
    category: 'activity',
    slug: 'webinar-ai-construction',
    image: '/images/activity/webinar.png',
    date: '2024-12-20',
    eventType: 'Webinar',
  },
  {
    id: 8,
    category: 'activity',
    slug: 'conference-bim-summit',
    image: '/images/activity/conference.png',
    date: '2024-12-28',
    eventType: 'Conference',
  },
  {
    id: 9,
    category: 'activity',
    slug: 'workshop-revit-ai',
    image: '/images/activity/workshop.png',
    date: '2025-01-15',
    eventType: 'Workshop',
  },
]

const filteredItems = computed(() => {
  if (activeCategory.value === 'all') {
    return mediaItems
  }
  return mediaItems.filter(item => item.category === activeCategory.value)
})

const getCategoryBadge = (category: string) => {
  switch (category) {
    case 'case-study':
      return { text: t('newMedia.categories.caseStudy'), class: 'bg-blue-100 text-blue-700' }
    case 'knowledge':
      return { text: t('newMedia.categories.knowledge'), class: 'bg-purple-100 text-purple-700' }
    case 'activity':
      return { text: t('newMedia.categories.activity'), class: 'bg-green-100 text-green-700' }
    default:
      return { text: '', class: '' }
  }
}

const getItemTitle = (item: typeof mediaItems[0]) => {
  if (item.category === 'case-study') {
    return t(`cases.items.${item.slug}.title`)
  } else if (item.category === 'knowledge') {
    return t(`blog.posts.${item.slug}.title`)
  } else {
    return t(`newMedia.activities.${item.slug}.title`)
  }
}

const getItemDescription = (item: typeof mediaItems[0]) => {
  if (item.category === 'case-study') {
    return t(`cases.items.${item.slug}.summary`)
  } else if (item.category === 'knowledge') {
    return t(`blog.posts.${item.slug}.excerpt`)
  } else {
    return t(`newMedia.activities.${item.slug}.description`)
  }
}

const getItemLink = (item: typeof mediaItems[0]) => {
  if (item.category === 'case-study') {
    return `/cases/${item.slug}`
  } else if (item.category === 'knowledge') {
    return `/blog/${item.slug}`
  } else {
    return `/activities/${item.slug}`
  }
}
</script>

<template>
  <div>
    <!-- Hero Section with Banner Image -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img
          src="/images/banners/banner-grid.png"
          alt="Media Hub Banner"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95"></div>
      </div>

      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="text-center max-w-3xl mx-auto">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {{ t('newMedia.hero.title') }}
          </h1>
          <div class="w-20 h-1 bg-gradient-primary mx-auto mb-6 rounded-full"></div>
          <p class="text-xl text-gray-300">
            {{ t('newMedia.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Tabs & Content -->
    <section class="section bg-white">
      <div class="container-custom">
        <!-- Category Tabs -->
        <div class="flex justify-center mb-12">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-2 p-1.5 bg-gray-100 rounded-2xl w-full max-w-3xl">
            <button
              v-for="category in categories"
              :key="category.key"
              @click="activeCategory = category.key as Category"
              class="px-3 md:px-5 py-2.5 md:py-3 rounded-xl font-medium transition-all duration-300 text-sm flex items-center justify-center gap-1.5"
              :class="activeCategory === category.key
                ? 'bg-white shadow-lg text-primary-600'
                : 'text-gray-600 hover:text-gray-900'"
            >
              <span v-if="category.color" class="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full flex-shrink-0" :class="category.color"></span>
              <span class="truncate md:truncate-none">{{ t(`newMedia.tabs.${category.key}`) }}</span>
            </button>
          </div>
        </div>

        <!-- Underline indicator -->
        <div class="border-b border-gray-200 mb-12"></div>

        <!-- Media Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="item in filteredItems"
            :key="item.id"
            class="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <!-- Image -->
            <div class="relative aspect-video overflow-hidden">
              <img
                :src="item.image"
                :alt="getItemTitle(item)"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <!-- Overlay on hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <!-- Event badge for activities -->
              <div
                v-if="item.eventType"
                class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-sm font-medium text-gray-800"
              >
                {{ item.eventType }}
              </div>
            </div>

            <!-- Content -->
            <div class="p-6">
              <!-- Category & Date -->
              <div class="flex items-center gap-3 mb-3">
                <span
                  class="text-xs px-3 py-1 rounded-full font-medium"
                  :class="getCategoryBadge(item.category).class"
                >
                  {{ getCategoryBadge(item.category).text }}
                </span>
                <span class="text-sm text-gray-400">{{ item.date }}</span>
              </div>

              <!-- Title -->
              <h2 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                {{ getItemTitle(item) }}
              </h2>

              <!-- Description -->
              <p class="text-gray-600 text-sm mb-4 line-clamp-3">
                {{ getItemDescription(item) }}
              </p>

              <!-- Stats for case studies -->
              <div v-if="item.stats" class="flex gap-4 mb-4 text-sm">
                <div class="flex items-center gap-1">
                  <span class="text-primary-600 font-bold">{{ item.stats.timeSaved }}</span>
                  <span class="text-gray-500">{{ t('cases.timeSaved') }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <span class="text-primary-600 font-bold">{{ item.stats.costReduction }}</span>
                  <span class="text-gray-500">{{ t('cases.costReduction') }}</span>
                </div>
              </div>

              <!-- Read More -->
              <router-link
                :to="getItemLink(item)"
                class="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                {{ t('newMedia.readMore') }}
                <svg class="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </router-link>
            </div>
          </article>
        </div>

        <!-- Empty state -->
        <div v-if="filteredItems.length === 0" class="text-center py-16">
          <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ t('newMedia.empty.title') }}</h3>
          <p class="text-gray-600">{{ t('newMedia.empty.description') }}</p>
        </div>
      </div>
    </section>

    <!-- Featured Image Section -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('newMedia.cta.title') }}</h2>
            <p class="text-lg text-gray-600 mb-8">{{ t('newMedia.cta.subtitle') }}</p>
            <router-link to="/demo" class="btn btn-primary">
              {{ t('newMedia.cta.button') }}
            </router-link>
          </div>
          <div class="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/bim-ai/ar-construction.png"
              alt="AR Construction Technology"
              class="w-full h-auto"
            />
          </div>
        </div>
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

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Allow full text on desktop (md and up) */
@media (min-width: 768px) {
  .md\:truncate-none {
    overflow: visible;
    text-overflow: clip;
    white-space: normal;
  }
}
</style>
