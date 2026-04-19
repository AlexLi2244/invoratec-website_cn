<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const services = [
  { key: 'strategy', icon: '🎯' },
  { key: 'modeling', icon: '🏗️' },
  { key: 'coordination', icon: '🔄' },
  { key: 'standards', icon: '📋' },
]

const benefits = [
  { key: 'global', icon: '🌍' },
  { key: 'experienced', icon: '👷' },
  { key: 'scalable', icon: '📈' },
  { key: 'quality', icon: '✅' },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="/images/features/global-cloud.png"
          alt="BIM Consulting"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/85 to-blue-900/75"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span class="text-white/90 text-sm font-medium">{{ t('serviceBIM.hero.badge') }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{{ t('serviceBIM.hero.title') }}</h1>
          <p class="text-xl text-white/80 mb-8">{{ t('serviceBIM.hero.subtitle') }}</p>
          <div class="flex flex-wrap gap-4">
            <router-link to="/demo" class="btn btn-primary text-lg px-8 py-4">
              {{ t('serviceBIM.hero.cta') }}
            </router-link>
            <router-link to="/contact" class="btn bg-white/10 border border-white/20 text-white hover:bg-white/20 text-lg px-8 py-4">
              {{ t('serviceBIM.hero.contact') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('serviceBIM.services.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">{{ t('serviceBIM.services.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="service in services" :key="service.key" class="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center text-2xl mb-4">
              {{ service.icon }}
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t(`serviceBIM.services.items.${service.key}.title`) }}</h3>
            <p class="text-gray-600">{{ t(`serviceBIM.services.items.${service.key}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Global Resources Section -->
    <section class="section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ t('serviceBIM.global.title') }}</h2>
            <p class="text-lg text-white/80 mb-8">{{ t('serviceBIM.global.subtitle') }}</p>

            <div class="grid grid-cols-2 gap-4">
              <div v-for="benefit in benefits" :key="benefit.key" class="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                <div class="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center text-xl mb-3">
                  {{ benefit.icon }}
                </div>
                <h3 class="font-bold mb-1">{{ t(`serviceBIM.global.benefits.${benefit.key}.title`) }}</h3>
                <p class="text-white/60 text-sm">{{ t(`serviceBIM.global.benefits.${benefit.key}.description`) }}</p>
              </div>
            </div>
          </div>
          <div class="relative">
            <img
              src="/images/bim-ai/team-collaboration.png"
              alt="Global BIM Team"
              class="rounded-2xl shadow-2xl"
            />
            <div class="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
              <div class="text-3xl font-bold text-blue-600">500+</div>
              <div class="text-gray-500 text-sm">{{ t('serviceBIM.global.stats.modelers') }}</div>
            </div>
            <div class="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl">
              <div class="text-3xl font-bold text-cyan-600">24/7</div>
              <div class="text-gray-500 text-sm">{{ t('serviceBIM.global.stats.availability') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('serviceBIM.process.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">{{ t('serviceBIM.process.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-4 gap-6">
          <div class="relative">
            <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
              <h3 class="font-bold text-gray-900 mb-2">{{ t('serviceBIM.process.steps.assess.title') }}</h3>
              <p class="text-gray-600 text-sm">{{ t('serviceBIM.process.steps.assess.description') }}</p>
            </div>
            <div class="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-200"></div>
          </div>
          <div class="relative">
            <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
              <h3 class="font-bold text-gray-900 mb-2">{{ t('serviceBIM.process.steps.plan.title') }}</h3>
              <p class="text-gray-600 text-sm">{{ t('serviceBIM.process.steps.plan.description') }}</p>
            </div>
            <div class="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-200"></div>
          </div>
          <div class="relative">
            <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
              <h3 class="font-bold text-gray-900 mb-2">{{ t('serviceBIM.process.steps.execute.title') }}</h3>
              <p class="text-gray-600 text-sm">{{ t('serviceBIM.process.steps.execute.description') }}</p>
            </div>
            <div class="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-200"></div>
          </div>
          <div>
            <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mb-4">4</div>
              <h3 class="font-bold text-gray-900 mb-2">{{ t('serviceBIM.process.steps.optimize.title') }}</h3>
              <p class="text-gray-600 text-sm">{{ t('serviceBIM.process.steps.optimize.description') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('serviceBIM.cta.title') }}</h2>
        <p class="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{{ t('serviceBIM.cta.subtitle') }}</p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/demo" class="btn bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            {{ t('serviceBIM.cta.demo') }}
          </router-link>
          <a href="mailto:contact@invoratec.cn" class="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
            {{ t('serviceBIM.cta.contact') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.btn-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #0891b2 100%);
}
</style>