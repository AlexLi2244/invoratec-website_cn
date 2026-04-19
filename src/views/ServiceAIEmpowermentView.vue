<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const features = [
  { key: 'custom', icon: '🎨', color: 'from-purple-500 to-pink-600' },
  { key: 'local', icon: '🔒', color: 'from-green-500 to-emerald-600' },
  { key: 'training', icon: '🎓', color: 'from-blue-500 to-cyan-600' },
  { key: 'integration', icon: '🔗', color: 'from-orange-500 to-red-600' },
]

const useCases = [
  { key: 'design', icon: '✨' },
  { key: 'review', icon: '📋' },
  { key: 'automation', icon: '⚡' },
  { key: 'assistant', icon: '🤖' },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="/images/bim-ai/ai-robotics.png"
          alt="AI Empowerment"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-900/85 to-purple-900/75"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span class="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
            <span class="text-white/90 text-sm font-medium">{{ t('serviceAI.hero.badge') }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{{ t('serviceAI.hero.title') }}</h1>
          <p class="text-xl text-white/80 mb-8">{{ t('serviceAI.hero.subtitle') }}</p>
          <div class="flex flex-wrap gap-4">
            <router-link to="/demo" class="btn btn-primary text-lg px-8 py-4">
              {{ t('serviceAI.hero.cta') }}
            </router-link>
            <router-link to="/contact" class="btn bg-white/10 border border-white/20 text-white hover:bg-white/20 text-lg px-8 py-4">
              {{ t('serviceAI.hero.contact') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('serviceAI.features.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">{{ t('serviceAI.features.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="feature in features" :key="feature.key" class="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow">
            <div class="flex items-start gap-4">
              <div :class="`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-3xl flex-shrink-0`">
                {{ feature.icon }}
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ t(`serviceAI.features.items.${feature.key}.title`) }}</h3>
                <p class="text-gray-600 mb-4">{{ t(`serviceAI.features.items.${feature.key}.description`) }}</p>
                <ul class="space-y-2">
                  <li v-for="n in 3" :key="n" class="flex items-center text-sm text-gray-500">
                    <svg class="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                    {{ t(`serviceAI.features.items.${feature.key}.points.${n - 1}`) }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Section -->
    <section class="section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <img
              src="/images/bim-ai/control-room.png"
              alt="Local Server Security"
              class="rounded-2xl shadow-2xl"
            />
            <div class="absolute -bottom-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-4 shadow-xl text-white">
              <div class="flex items-center gap-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                </svg>
                <span class="font-bold">{{ t('serviceAI.security.badge') }}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ t('serviceAI.security.title') }}</h2>
            <p class="text-lg text-white/80 mb-6">{{ t('serviceAI.security.subtitle') }}</p>

            <div class="space-y-4">
              <div class="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                <h3 class="font-bold mb-2 flex items-center gap-2">
                  <span class="text-green-400">🔐</span>
                  {{ t('serviceAI.security.items.onpremise.title') }}
                </h3>
                <p class="text-white/60 text-sm">{{ t('serviceAI.security.items.onpremise.description') }}</p>
              </div>
              <div class="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                <h3 class="font-bold mb-2 flex items-center gap-2">
                  <span class="text-green-400">🛡️</span>
                  {{ t('serviceAI.security.items.encryption.title') }}
                </h3>
                <p class="text-white/60 text-sm">{{ t('serviceAI.security.items.encryption.description') }}</p>
              </div>
              <div class="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                <h3 class="font-bold mb-2 flex items-center gap-2">
                  <span class="text-green-400">📊</span>
                  {{ t('serviceAI.security.items.compliance.title') }}
                </h3>
                <p class="text-white/60 text-sm">{{ t('serviceAI.security.items.compliance.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases Section -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('serviceAI.useCases.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">{{ t('serviceAI.useCases.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="useCase in useCases" :key="useCase.key" class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
              {{ useCase.icon }}
            </div>
            <h3 class="font-bold text-gray-900 mb-2">{{ t(`serviceAI.useCases.items.${useCase.key}.title`) }}</h3>
            <p class="text-gray-600 text-sm">{{ t(`serviceAI.useCases.items.${useCase.key}.description`) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Web App Integration -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('serviceAI.webapp.title') }}</h2>
            <p class="text-lg text-gray-600 mb-6">{{ t('serviceAI.webapp.subtitle') }}</p>

            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900">{{ t('serviceAI.webapp.features.assistant.title') }}</h3>
                  <p class="text-gray-600 text-sm">{{ t('serviceAI.webapp.features.assistant.description') }}</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900">{{ t('serviceAI.webapp.features.reports.title') }}</h3>
                  <p class="text-gray-600 text-sm">{{ t('serviceAI.webapp.features.reports.description') }}</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900">{{ t('serviceAI.webapp.features.workflow.title') }}</h3>
                  <p class="text-gray-600 text-sm">{{ t('serviceAI.webapp.features.workflow.description') }}</p>
                </div>
              </div>
            </div>

            <router-link to="/product" class="inline-flex items-center mt-6 text-purple-600 font-medium hover:text-purple-700">
              {{ t('serviceAI.webapp.cta') }}
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </router-link>
          </div>
          <div>
            <img
              src="/images/features/web-ai-chat.png"
              alt="AI Web Platform"
              class="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('serviceAI.cta.title') }}</h2>
        <p class="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{{ t('serviceAI.cta.subtitle') }}</p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/demo" class="btn bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4">
            {{ t('serviceAI.cta.demo') }}
          </router-link>
          <a href="mailto:contact@invoratec.cn" class="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
            {{ t('serviceAI.cta.contact') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.btn-primary {
  background: linear-gradient(135deg, #9333ea 0%, #db2777 100%);
}
</style>