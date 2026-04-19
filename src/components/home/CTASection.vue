<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="section bg-gradient-primary relative overflow-hidden">
    <!-- Background decorations -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span class="text-white/90 text-sm font-medium">{{ t('cta.badge') }}</span>
        </div>

        <!-- Title -->
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          {{ t('cta.title') }}
        </h2>

        <!-- Subtitle -->
        <p class="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
          {{ t('cta.subtitle') }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link
            to="/demo"
            class="btn bg-white text-primary-600 hover:bg-gray-100 shadow-lg"
          >
            {{ t('cta.primary') }}
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </router-link>
          <router-link
            to="/pricing"
            class="btn bg-white/10 text-white border-2 border-white/30 hover:bg-white/20"
          >
            {{ t('cta.secondary') }}
          </router-link>
        </div>

        <!-- Trust indicators -->
        <div class="mt-12 pt-8 border-t border-white/20">
          <p class="text-white/60 text-sm mb-4">{{ t('cta.trust') }}</p>
          <div class="flex flex-wrap justify-center gap-8 opacity-60">
            <div class="text-white font-semibold">Autodesk</div>
            <div class="text-white font-semibold">AECOM</div>
            <div class="text-white font-semibold">Turner</div>
            <div class="text-white font-semibold">Skanska</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>