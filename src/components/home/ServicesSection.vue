<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const services = [
  { key: 'consulting', image: '/images/features/global-cloud.png', color: 'from-blue-500 to-cyan-500', route: '/services/bim-consulting' },
  { key: 'ai', image: '/images/bim-ai/ai-robotics.png', color: 'from-purple-500 to-pink-500', route: '/services/ai-empowerment' },
  { key: 'support', image: '/images/services/technical-support.png', color: 'from-orange-500 to-red-500', route: '/services/technical-support' },
]
</script>

<template>
  <section class="section bg-gray-50">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-h1 text-gray-900 mb-4">{{ t('services.title') }}</h2>
        <p class="text-lg text-gray-600">{{ t('services.subtitle') }}</p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.key"
          class="group relative bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300"
        >
          <!-- Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="service.image"
              :alt="t(`services.items.${service.key}.title`)"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

            <!-- Badge -->
            <div
              class="absolute bottom-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium bg-gradient-to-r"
              :class="service.color"
            >
              {{ t(`services.items.${service.key}.title`) }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <p class="text-gray-600 mb-4">{{ t(`services.items.${service.key}.description`) }}</p>

            <!-- Features List -->
            <ul class="space-y-2">
              <li
                v-for="n in 3"
                :key="n"
                class="flex items-center text-sm text-gray-500"
              >
                <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ t(`services.items.${service.key}.features.${n - 1}`) }}
              </li>
            </ul>

            <!-- Learn More -->
            <router-link
              :to="service.route"
              class="inline-flex items-center mt-4 text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              {{ t('services.learnMore') }}
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>