<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t, te } = useI18n()

const slug = route.params.slug as string

// Get case-specific stats or use defaults
const stats = computed(() => {
  const timeSaved = te(`cases.items.${slug}.stats.timeSaved`)
    ? t(`cases.items.${slug}.stats.timeSaved`)
    : '40%'
  const costReduction = te(`cases.items.${slug}.stats.costReduction`)
    ? t(`cases.items.${slug}.stats.costReduction`)
    : '25%'
  const errorReduction = te(`cases.items.${slug}.stats.errorReduction`)
    ? t(`cases.items.${slug}.stats.errorReduction`)
    : '50%'
  return { timeSaved, costReduction, errorReduction }
})

// Get the appropriate icon based on the case study slug
const caseIcon = computed(() => {
  switch (slug) {
    case 'shanghai-xintiandi':
      return '🏢'
    case 'ordos-smart-scenic':
      return '🏞️'
    case 'daxing-airport':
      return '✈️'
    default:
      return '🏗️'
  }
})
</script>

<template>
  <div class="pt-20">
    <article class="section bg-white">
      <div class="container-custom max-w-4xl">
        <!-- Breadcrumb -->
        <nav class="mb-8">
          <router-link to="/cases" class="text-primary-600 hover:underline">{{ t('cases.hero.title') }}</router-link>
          <span class="text-gray-400 mx-2">/</span>
          <span class="text-gray-600 line-clamp-1">{{ t(`cases.items.${slug}.title`) }}</span>
        </nav>

        <!-- Header -->
        <header class="mb-8">
          <span class="text-sm bg-primary-100 text-primary-600 px-3 py-1 rounded-full">{{ t('newMedia.categories.caseStudy') }}</span>
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">{{ t(`cases.items.${slug}.title`) }}</h1>
          <p class="text-xl text-gray-600">{{ t(`cases.items.${slug}.summary`) }}</p>
        </header>

        <!-- Featured Image -->
        <div class="aspect-video bg-gradient-to-br from-primary-100 to-purple-100 rounded-2xl mb-8 flex items-center justify-center">
          <span class="text-6xl">{{ caseIcon }}</span>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4 mb-8">
          <div class="bg-gray-50 rounded-xl p-6 text-center">
            <div class="text-3xl font-bold text-primary-600">{{ stats.timeSaved }}</div>
            <div class="text-sm text-gray-600">{{ t('cases.timeSaved') }}</div>
          </div>
          <div class="bg-gray-50 rounded-xl p-6 text-center">
            <div class="text-3xl font-bold text-primary-600">{{ stats.costReduction }}</div>
            <div class="text-sm text-gray-600">{{ t('cases.costReduction') }}</div>
          </div>
          <div class="bg-gray-50 rounded-xl p-6 text-center">
            <div class="text-3xl font-bold text-primary-600">{{ stats.errorReduction }}</div>
            <div class="text-sm text-gray-600">{{ t('cases.errorReduction', 'error reduction') }}</div>
          </div>
        </div>

        <!-- Content -->
        <div class="prose prose-lg max-w-none">
          <!-- Challenge Section -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span class="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-xl">🎯</span>
              {{ t('cases.challengeTitle', 'Challenge') }}
            </h2>
            <div class="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-xl">
              <p class="text-gray-700 leading-relaxed m-0">{{ t(`cases.items.${slug}.challenge`) }}</p>
            </div>
          </div>

          <!-- Solution Section -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">💡</span>
              {{ t('cases.solutionTitle', 'Solution') }}
            </h2>
            <div class="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-xl">
              <p class="text-gray-700 leading-relaxed m-0">{{ t(`cases.items.${slug}.solution`) }}</p>
            </div>
          </div>

          <!-- Results Section -->
          <div class="mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">🚀</span>
              {{ t('cases.resultsTitle', 'Results') }}
            </h2>
            <div class="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-xl">
              <p class="text-gray-700 leading-relaxed m-0">{{ t(`cases.items.${slug}.results`) }}</p>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <div class="bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl p-8 mt-12">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ t('cases.cta.title') }}</h3>
            <p class="text-gray-600 mb-6">{{ t('cases.cta.subtitle') }}</p>
            <router-link to="/demo" class="btn btn-primary">
              {{ t('cases.cta.button') }}
            </router-link>
          </div>
        </div>

        <!-- Back to Cases -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <router-link to="/cases" class="btn btn-outline">
            ← {{ t('cases.backToCases') }}
          </router-link>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>