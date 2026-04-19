<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { getCaseStudy, getCaseStudyContent, getAllCaseStudies } from '../data/caseStudies'

const route = useRoute()
const { t, locale } = useI18n()

const slug = computed(() => route.params.slug as string)
const caseStudy = computed(() => getCaseStudy(slug.value))
const caseContent = computed(() => getCaseStudyContent(slug.value))

const content = computed(() => {
  if (!caseContent.value) return null
  // Support ja, zh, and en with fallback to en
  if (locale.value === 'ja' && caseContent.value.ja) return caseContent.value.ja
  if (locale.value === 'zh') return caseContent.value.zh
  return caseContent.value.en
})

// Get related case studies (other case studies)
const relatedCases = computed(() => {
  if (!caseStudy.value) return []
  return getAllCaseStudies()
    .filter(c => c.slug !== slug.value)
    .slice(0, 2)
})
</script>

<template>
  <div class="pt-20">
    <!-- Hero Section with gradient background -->
    <section v-if="caseStudy && content" class="relative bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900 text-white overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>
      </div>

      <div class="container-custom py-16 relative z-10">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <router-link to="/new-media" class="text-primary-400 hover:text-primary-300 transition-colors">{{ t('newMedia.hero.title') }}</router-link>
          <span class="text-gray-500 mx-2">/</span>
          <span class="text-gray-400">{{ t('newMedia.categories.caseStudy') }}</span>
        </nav>

        <div class="max-w-4xl">
          <!-- Category & Meta -->
          <div class="flex flex-wrap items-center gap-4 mb-6">
            <span class="px-4 py-1.5 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
              {{ caseStudy.industry }}
            </span>
            <span class="text-gray-400">{{ caseStudy.date }}</span>
            <span class="text-gray-500">|</span>
            <span class="text-gray-400">{{ caseStudy.readTime }} {{ t('common.read') }}</span>
          </div>

          <!-- Title -->
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {{ content.title }}
          </h1>

          <!-- Summary -->
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            {{ content.summary }}
          </p>

          <!-- Project Info -->
          <div class="flex flex-wrap gap-6 text-sm">
            <div>
              <span class="text-gray-500">{{ t('caseStudyDetail.client') }}:</span>
              <span class="ml-2 text-white">{{ content.client }}</span>
            </div>
            <div>
              <span class="text-gray-500">{{ t('common.location') }}:</span>
              <span class="ml-2 text-white">{{ content.location }}</span>
            </div>
            <div>
              <span class="text-gray-500">{{ t('caseStudyDetail.duration') }}:</span>
              <span class="ml-2 text-white">{{ content.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Image -->
    <section v-if="caseStudy" class="bg-white">
      <div class="container-custom -mt-8 relative z-20">
        <div class="max-w-4xl mx-auto">
          <div class="aspect-video bg-gradient-to-br from-blue-100 to-gray-100 rounded-2xl overflow-hidden shadow-xl">
            <img
              :src="caseStudy.image"
              :alt="content?.title"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section v-if="caseStudy" class="bg-white pt-12">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-3 gap-4 mb-8">
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
              <div class="text-3xl md:text-4xl font-bold text-blue-600">{{ caseStudy.stats.timeSaved }}</div>
              <div class="text-sm text-gray-600 mt-1">{{ t('caseStudyDetail.stats.timeSaved') }}</div>
            </div>
            <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
              <div class="text-3xl md:text-4xl font-bold text-green-600">{{ caseStudy.stats.costReduction }}</div>
              <div class="text-sm text-gray-600 mt-1">{{ t('caseStudyDetail.stats.costReduction') }}</div>
            </div>
            <div v-if="caseStudy.stats.errorReduction" class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
              <div class="text-3xl md:text-4xl font-bold text-purple-600">{{ caseStudy.stats.errorReduction }}</div>
              <div class="text-sm text-gray-600 mt-1">{{ t('caseStudyDetail.stats.errorReduction') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <article v-if="content" class="section bg-white pt-8">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <!-- Tags -->
          <div v-if="caseStudy" class="flex flex-wrap gap-2 mb-12 pb-8 border-b border-gray-200">
            <span
              v-for="tag in caseStudy.tags"
              :key="tag"
              class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Content Sections -->
          <div class="prose prose-lg max-w-none">
            <div
              v-for="(section, index) in content.sections"
              :key="index"
              class="mb-10"
            >
              <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {{ section.heading }}
              </h2>

              <p class="text-gray-600 leading-relaxed text-lg mb-4">
                {{ section.content }}
              </p>

              <!-- List items -->
              <ul v-if="section.list" class="space-y-3 my-6">
                <li
                  v-for="(item, itemIndex) in section.list"
                  :key="itemIndex"
                  class="flex items-start gap-3"
                >
                  <span class="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mt-0.5">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                  </span>
                  <span class="text-gray-700">{{ item }}</span>
                </li>
              </ul>

              <!-- Section image if provided -->
              <div v-if="section.image" class="my-8 rounded-xl overflow-hidden">
                <img :src="section.image" :alt="section.imageCaption || section.heading" class="w-full" />
                <p v-if="section.imageCaption" class="text-sm text-gray-500 mt-2 text-center italic">
                  {{ section.imageCaption }}
                </p>
              </div>
            </div>

            <!-- Testimonial -->
            <div v-if="content.testimonial" class="mt-12 p-8 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl border border-blue-100">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 text-4xl text-blue-400">"</div>
                <div>
                  <p class="text-gray-700 text-lg leading-relaxed italic mb-4">
                    {{ content.testimonial.quote }}
                  </p>
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {{ content.testimonial.author.charAt(0) }}
                    </div>
                    <div>
                      <div class="font-medium text-gray-900">{{ content.testimonial.author }}</div>
                      <div class="text-sm text-gray-500">{{ content.testimonial.role }}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Share & Actions -->
          <div class="mt-12 pt-8 border-t border-gray-200">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p class="text-gray-600 mb-2">{{ t('caseStudyDetail.shareCase') }}</p>
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

    <!-- Related Case Studies -->
    <section v-if="relatedCases.length > 0" class="section bg-gray-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">
            {{ t('caseStudyDetail.relatedCases') }}
          </h2>

          <div class="grid md:grid-cols-2 gap-6">
            <router-link
              v-for="relatedCase in relatedCases"
              :key="relatedCase.slug"
              :to="`/cases/${relatedCase.slug}`"
              class="group bg-white rounded-xl overflow-hidden shadow-soft hover:shadow-lg transition-all"
            >
              <div class="aspect-video overflow-hidden">
                <img
                  :src="relatedCase.image"
                  :alt="relatedCase.slug"
                  class="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div class="p-6">
                <span class="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                  {{ relatedCase.industry }}
                </span>
                <h3 class="text-lg font-bold text-gray-900 mt-3 group-hover:text-primary-600 transition-colors">
                  {{ t(`cases.items.${relatedCase.slug}.title`) }}
                </h3>
                <p class="text-gray-600 text-sm mt-2 line-clamp-2">
                  {{ t(`cases.items.${relatedCase.slug}.summary`) }}
                </p>
                <div class="flex gap-4 mt-3 text-sm">
                  <span class="text-blue-600 font-medium">{{ relatedCase.stats.timeSaved }} {{ t('caseStudyDetail.timeSaved') }}</span>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-4">{{ t('caseStudyDetail.cta.title') }}</h2>
        <p class="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{{ t('caseStudyDetail.cta.subtitle') }}</p>
        <router-link to="/demo" class="btn bg-white text-primary-600 hover:bg-gray-100">
          {{ t('newMedia.cta.button') }}
        </router-link>
      </div>
    </section>

    <!-- 404 State -->
    <section v-if="!caseStudy || !content" class="section bg-white min-h-screen flex items-center">
      <div class="container-custom text-center">
        <div class="text-6xl mb-4">📋</div>
        <h1 class="text-3xl font-bold text-gray-900 mb-4">
          {{ t('caseStudyDetail.notFound.title') }}
        </h1>
        <p class="text-gray-600 mb-8">
          {{ t('caseStudyDetail.notFound.description') }}
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
