<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const openIndex = ref<number | null>(0)

const faqs = [
  { key: 'what' },
  { key: 'integration' },
  { key: 'training' },
  { key: 'pricing' },
  { key: 'support' },
]

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <section class="section bg-white">
    <div class="container-custom">
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <!-- Left Column - Header -->
        <div class="lg:sticky lg:top-24">
          <h2 class="text-h1 text-gray-900 mb-4">{{ t('faq.title') }}</h2>
          <p class="text-lg text-gray-600 mb-8">{{ t('faq.subtitle') }}</p>

          <!-- Contact CTA -->
          <div class="bg-gradient-primary rounded-2xl p-6 text-white">
            <h3 class="text-xl font-semibold mb-2">{{ t('faq.contact.title') }}</h3>
            <p class="text-white/80 mb-4">{{ t('faq.contact.description') }}</p>
            <router-link to="/demo" class="inline-flex items-center text-white font-medium hover:underline">
              {{ t('faq.contact.cta') }}
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </router-link>
          </div>
        </div>

        <!-- Right Column - Accordion -->
        <div class="space-y-4">
          <div
            v-for="(faq, index) in faqs"
            :key="faq.key"
            class="border border-gray-200 rounded-xl overflow-hidden transition-all"
            :class="{ 'border-primary-200 bg-primary-50/30': openIndex === index }"
          >
            <button
              @click="toggle(index)"
              class="w-full flex items-center justify-between p-6 text-left"
            >
              <span class="text-lg font-medium text-gray-900 pr-4">
                {{ t(`faq.items.${faq.key}.question`) }}
              </span>
              <div
                class="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all"
                :class="openIndex === index ? 'bg-primary-600 text-white rotate-180' : 'bg-gray-100 text-gray-500'"
              >
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </div>
            </button>

            <div
              class="overflow-hidden transition-all duration-300"
              :class="openIndex === index ? 'max-h-96' : 'max-h-0'"
            >
              <div class="px-6 pb-6 text-gray-600">
                {{ t(`faq.items.${faq.key}.answer`) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>