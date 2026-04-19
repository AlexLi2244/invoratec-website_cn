<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const cases = [
  { slug: 'shanghai-xintiandi', industry: 'Commercial', icon: '🏢' },
  { slug: 'ordos-smart-scenic', industry: 'Tourism', icon: '🏞️' },
  { slug: 'daxing-airport', industry: 'Infrastructure', icon: '✈️' },
]
</script>

<template>
  <div>
    <!-- Hero Section - extends to top for transparent navbar -->
    <section class="pt-32 pb-16 bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ t('cases.hero.title') }}</h1>
        <p class="text-xl text-white/80 max-w-2xl mx-auto">{{ t('cases.hero.subtitle') }}</p>
      </div>
    </section>

    <!-- Cases Grid -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="caseStudy in cases"
            :key="caseStudy.slug"
            class="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all border border-gray-100"
          >
            <div class="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-primary-100 group-hover:to-purple-100 transition-colors">
              <span class="text-5xl">{{ caseStudy.icon }}</span>
            </div>
            <div class="p-6">
              <span class="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{{ caseStudy.industry }}</span>
              <h2 class="text-h3 text-gray-900 mt-3 mb-2">{{ t(`cases.items.${caseStudy.slug}.title`) }}</h2>
              <p class="text-gray-600 mb-4">{{ t(`cases.items.${caseStudy.slug}.summary`) }}</p>

              <!-- Stats -->
              <div class="flex gap-4 mb-4 text-sm">
                <div>
                  <span class="text-primary-600 font-bold">40%</span>
                  <span class="text-gray-500 ml-1">{{ t('cases.timeSaved') }}</span>
                </div>
                <div>
                  <span class="text-primary-600 font-bold">25%</span>
                  <span class="text-gray-500 ml-1">{{ t('cases.costReduction') }}</span>
                </div>
              </div>

              <router-link
                :to="`/cases/${caseStudy.slug}`"
                class="text-primary-600 font-medium hover:underline inline-flex items-center"
              >
                {{ t('cases.readMore') }}
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-gray-50">
      <div class="container-custom text-center">
        <h2 class="text-h1 text-gray-900 mb-4">{{ t('cases.cta.title') }}</h2>
        <p class="text-lg text-gray-600 mb-8">{{ t('cases.cta.subtitle') }}</p>
        <router-link to="/demo" class="btn btn-primary">{{ t('cases.cta.button') }}</router-link>
      </div>
    </section>
  </div>
</template>