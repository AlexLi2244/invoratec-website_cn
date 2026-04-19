<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const supportTiers = [
  { key: 'standard', icon: '📧', color: 'from-gray-500 to-gray-600' },
  { key: 'professional', icon: '💬', color: 'from-blue-500 to-cyan-600' },
  { key: 'enterprise', icon: '🏆', color: 'from-purple-500 to-pink-600' },
]

const supportFeatures = [
  { key: 'priority', icon: '⚡' },
  { key: 'integration', icon: '🔗' },
  { key: 'manager', icon: '👤' },
  { key: 'training', icon: '📚' },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0">
        <img
          src="/images/services/technical-support.png"
          alt="Technical Support"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-orange-900/95 via-orange-900/85 to-orange-900/75"></div>
      </div>

      <div class="container-custom relative z-10">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span class="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span class="text-white/90 text-sm font-medium">{{ t('serviceSupport.hero.badge') }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">{{ t('serviceSupport.hero.title') }}</h1>
          <p class="text-xl text-white/80 mb-8">{{ t('serviceSupport.hero.subtitle') }}</p>
          <div class="flex flex-wrap gap-4">
            <router-link to="/demo" class="btn btn-primary text-lg px-8 py-4">
              {{ t('serviceSupport.hero.cta') }}
            </router-link>
            <a href="mailto:contact@invoratec.cn" class="btn bg-white/10 border border-white/20 text-white hover:bg-white/20 text-lg px-8 py-4">
              {{ t('serviceSupport.hero.contact') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Support Tiers -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('serviceSupport.tiers.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">{{ t('serviceSupport.tiers.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="tier in supportTiers" :key="tier.key" class="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-shadow relative overflow-hidden">
            <div :class="`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tier.color} opacity-10 rounded-bl-full`"></div>
            <div :class="`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-2xl flex items-center justify-center text-3xl mb-6`">
              {{ tier.icon }}
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ t(`serviceSupport.tiers.items.${tier.key}.title`) }}</h3>
            <p class="text-gray-600 mb-6">{{ t(`serviceSupport.tiers.items.${tier.key}.description`) }}</p>
            <ul class="space-y-3">
              <li v-for="n in 4" :key="n" class="flex items-center text-sm text-gray-600">
                <svg class="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                {{ t(`serviceSupport.tiers.items.${tier.key}.features.${n - 1}`) }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 24/7 Support Section -->
    <section class="section bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ t('serviceSupport.availability.title') }}</h2>
            <p class="text-lg text-white/80 mb-8">{{ t('serviceSupport.availability.subtitle') }}</p>

            <div class="grid grid-cols-2 gap-4">
              <div v-for="feature in supportFeatures" :key="feature.key" class="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-4">
                <div class="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center text-xl mb-3">
                  {{ feature.icon }}
                </div>
                <h3 class="font-bold mb-1">{{ t(`serviceSupport.availability.features.${feature.key}.title`) }}</h3>
                <p class="text-white/60 text-sm">{{ t(`serviceSupport.availability.features.${feature.key}.description`) }}</p>
              </div>
            </div>
          </div>
          <div class="relative">
            <img
              src="/images/bim-ai/command-center.png"
              alt="24/7 Support Center"
              class="rounded-2xl shadow-2xl"
            />
            <div class="absolute -bottom-6 -left-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl p-6 shadow-xl text-white">
              <div class="text-4xl font-bold">24/7</div>
              <div class="text-white/80 text-sm">{{ t('serviceSupport.availability.badge') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Methods -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('serviceSupport.contact.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-2xl mx-auto">{{ t('serviceSupport.contact.subtitle') }}</p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
              📧
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('serviceSupport.contact.methods.email.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('serviceSupport.contact.methods.email.description') }}</p>
            <a href="mailto:contact@invoratec.cn" class="text-blue-600 font-medium hover:text-blue-700">
              contact@invoratec.cn
            </a>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
            <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
              💬
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('serviceSupport.contact.methods.chat.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('serviceSupport.contact.methods.chat.description') }}</p>
            <span class="text-green-600 font-medium">{{ t('serviceSupport.contact.methods.chat.action') }}</span>
          </div>
          <div class="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto">
              📞
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('serviceSupport.contact.methods.phone.title') }}</h3>
            <p class="text-gray-600 mb-4">{{ t('serviceSupport.contact.methods.phone.description') }}</p>
            <router-link to="/demo" class="text-purple-600 font-medium hover:text-purple-700">
              {{ t('serviceSupport.contact.methods.phone.action') }}
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Documentation Section -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/bim-ai/bim-workstation.png"
              alt="Documentation"
              class="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{{ t('serviceSupport.docs.title') }}</h2>
            <p class="text-lg text-gray-600 mb-6">{{ t('serviceSupport.docs.subtitle') }}</p>

            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-orange-600">📖</span>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900">{{ t('serviceSupport.docs.items.guides.title') }}</h3>
                  <p class="text-gray-600 text-sm">{{ t('serviceSupport.docs.items.guides.description') }}</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-orange-600">🎥</span>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900">{{ t('serviceSupport.docs.items.videos.title') }}</h3>
                  <p class="text-gray-600 text-sm">{{ t('serviceSupport.docs.items.videos.description') }}</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span class="text-orange-600">❓</span>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900">{{ t('serviceSupport.docs.items.faq.title') }}</h3>
                  <p class="text-gray-600 text-sm">{{ t('serviceSupport.docs.items.faq.description') }}</p>
                </div>
              </div>
            </div>

            <router-link to="/docs" class="inline-flex items-center mt-6 text-orange-600 font-medium hover:text-orange-700">
              {{ t('serviceSupport.docs.cta') }}
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">{{ t('serviceSupport.cta.title') }}</h2>
        <p class="text-white/80 text-lg mb-8 max-w-2xl mx-auto">{{ t('serviceSupport.cta.subtitle') }}</p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/demo" class="btn bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-4">
            {{ t('serviceSupport.cta.demo') }}
          </router-link>
          <a href="mailto:contact@invoratec.cn" class="btn border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4">
            {{ t('serviceSupport.cta.contact') }}
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.btn-primary {
  background: linear-gradient(135deg, #ea580c 0%, #dc2626 100%);
}
</style>