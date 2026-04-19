<script setup lang="ts">
import { ref, computed, onMounted, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const showMaintenanceModal = ref(false)

// Default values — overridden at runtime from /downloads/version.json (updated by Addin CI/CD)
const download = reactive({
  id: 'revit-all',
  name: 'BIM AI for Revit (中国版)',
  version: '2.0.0.0',
  date: '2026-04-19',
  size: '13 MB',
  type: 'Windows Installer',
  revitVersions: ['2026', '2025', '2024', '2023', '2022', '2021', '2020', '2019'],
  downloadUrl: '/downloads/InvoratecAI-Setup-CN.msi',
  buildHash: '',
  releaseNotes: '',
})

// Fetch latest version info from Addin CI/CD
onMounted(async () => {
  try {
    const res = await fetch('/downloads/version.json?t=' + Date.now(), { cache: 'no-store' })
    if (res.ok) {
      const data = await res.json()
      Object.assign(download, data)
    }
  } catch { /* keep defaults if version.json missing */ }
})

const downloadInstaller = () => {
  window.location.href = download.downloadUrl
}

const closeModal = () => {
  showMaintenanceModal.value = false
}

const systemRequirements = computed(() => [
  { label: t('downloadPage.requirements.os'), value: 'Windows 10/11 (64-bit)' },
  { label: t('downloadPage.requirements.revitVersion'), value: '2021, 2022, 2023, 2024, 2025, 2026' },
  { label: t('downloadPage.requirements.ram'), value: '8 GB minimum, 16 GB recommended' },
  { label: t('downloadPage.requirements.diskSpace'), value: '500 MB' },
  { label: t('downloadPage.requirements.internet'), value: t('downloadPage.requirements.internetRequired') },
])
</script>

<template>
  <div class="pt-20">
    <!-- Hero Section -->
    <section class="section bg-gradient-primary text-white">
      <div class="container-custom text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span class="text-white/90 text-sm font-medium">{{ t('downloadPage.hero.latestVersion') }}</span>
        </div>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">{{ t('downloadPage.hero.title') }}</h1>
        <p class="text-xl text-white/80 max-w-2xl mx-auto">{{ t('downloadPage.hero.subtitle') }}</p>

        <!-- Trial Badge -->
        <div class="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
          <div class="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
            <svg class="w-5 h-5 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
            </svg>
          </div>
          <div class="text-left">
            <p class="text-white font-semibold">{{ t('downloadPage.hero.trialTitle') }}</p>
            <p class="text-white/70 text-sm">{{ t('downloadPage.hero.trialSubtitle') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Downloads Section -->
    <section class="section bg-white">
      <div class="container-custom">
        <div class="max-w-md mx-auto">
          <div class="relative bg-white rounded-2xl border-2 border-primary-500 shadow-xl p-8">
            <!-- Latest Version Badge -->
            <div class="absolute -top-3 left-1/2 -translate-x-1/2">
              <span class="bg-primary-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                {{ t('downloadPage.cards.latestVersion') }}
              </span>
            </div>

            <div class="text-center mb-6">
              <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <img src="/images/revit-icon.jpg" alt="Revit Logo" class="w-14 h-14 object-contain" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ download.name }}</h3>
              <div class="flex items-center justify-center gap-4 text-sm text-gray-500">
                <span>v{{ download.version }}</span>
                <span>•</span>
                <span>{{ download.size }}</span>
              </div>
            </div>

            <!-- Supported Revit Versions -->
            <div class="mb-6">
              <p class="text-sm text-gray-500 mb-3 text-center">{{ t('downloadPage.cards.supportedVersions') }}</p>
              <div class="flex flex-wrap justify-center gap-2">
                <span
                  v-for="ver in download.revitVersions"
                  :key="ver"
                  class="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium"
                >
                  Revit {{ ver }}
                </span>
              </div>
            </div>

            <!-- Download Button -->
            <button
              @click="downloadInstaller"
              class="block w-full text-center py-4 rounded-xl font-semibold transition-all bg-gradient-primary text-white hover:opacity-90 cursor-pointer"
            >
              <span class="flex items-center justify-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                </svg>
                {{ t('downloadPage.cards.downloadInstaller') }}
              </span>
            </button>

            <p class="text-xs text-gray-400 text-center mt-3">{{ download.type }} • {{ t('downloadPage.cards.updated') }} {{ download.date }}</p>
          </div>
        </div>

        <!-- Trial Info Box -->
        <div class="mt-12 max-w-3xl mx-auto">
          <div class="bg-gradient-to-r from-primary-50 to-purple-50 rounded-2xl p-8 border border-primary-100">
            <div class="flex flex-col md:flex-row items-center gap-6">
              <div class="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center flex-shrink-0">
                <svg class="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="text-center md:text-left flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ t('downloadPage.trial.title') }}</h3>
                <p class="text-gray-600 mb-4">{{ t('downloadPage.trial.description') }}</p>
                <div class="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                  <span class="inline-flex items-center gap-1.5 text-green-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                    {{ t('downloadPage.trial.allFeatures') }}
                  </span>
                  <span class="inline-flex items-center gap-1.5 text-green-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                    {{ t('downloadPage.trial.noCreditCard') }}
                  </span>
                  <span class="inline-flex items-center gap-1.5 text-green-600">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                    {{ t('downloadPage.trial.autoActivation') }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Alternative Downloads -->
        <div class="mt-12 text-center">
          <p class="text-gray-600 mb-4">{{ t('downloadPage.olderVersions.title') }}</p>
          <a href="#" class="text-primary-600 hover:underline font-medium">
            {{ t('downloadPage.olderVersions.link') }} →
          </a>
        </div>
      </div>
    </section>

    <!-- System Requirements -->
    <section class="section bg-gray-50">
      <div class="container-custom">
        <h2 class="text-h1 text-gray-900 mb-8 text-center">{{ t('downloadPage.requirements.title') }}</h2>

        <div class="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 overflow-hidden">
          <div class="divide-y divide-gray-100">
            <div
              v-for="req in systemRequirements"
              :key="req.label"
              class="flex items-center justify-between px-6 py-4"
            >
              <span class="text-gray-600">{{ req.label }}</span>
              <span class="font-medium text-gray-900">{{ req.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Installation Guide -->
    <section class="section bg-white">
      <div class="container-custom">
        <h2 class="text-h1 text-gray-900 mb-8 text-center">{{ t('downloadPage.guide.title') }}</h2>

        <div class="max-w-3xl mx-auto">
          <div class="grid gap-6">
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="text-primary-600 font-bold">1</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">{{ t('downloadPage.guide.step1.title') }}</h3>
                <p class="text-gray-600">{{ t('downloadPage.guide.step1.description') }}</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="text-primary-600 font-bold">2</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">{{ t('downloadPage.guide.step2.title') }}</h3>
                <p class="text-gray-600">{{ t('downloadPage.guide.step2.description') }}</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="text-primary-600 font-bold">3</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">{{ t('downloadPage.guide.step3.title') }}</h3>
                <p class="text-gray-600">{{ t('downloadPage.guide.step3.description') }}</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div class="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span class="text-primary-600 font-bold">4</span>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">{{ t('downloadPage.guide.step4.title') }}</h3>
                <p class="text-gray-600">{{ t('downloadPage.guide.step4.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section bg-gray-50">
      <div class="container-custom text-center">
        <h2 class="text-h1 text-gray-900 mb-4">{{ t('downloadPage.help.title') }}</h2>
        <p class="text-lg text-gray-600 mb-8">{{ t('downloadPage.help.subtitle') }}</p>
        <div class="flex flex-wrap justify-center gap-4">
          <router-link to="/docs" class="btn btn-primary">{{ t('downloadPage.help.viewDocs') }}</router-link>
          <router-link to="/demo" class="btn btn-secondary">{{ t('downloadPage.help.requestDemo') }}</router-link>
        </div>
      </div>
    </section>

    <!-- Maintenance Modal -->
    <div v-if="showMaintenanceModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal"></div>
      <div class="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 text-center">
        <button @click="closeModal" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <div class="w-20 h-20 bg-gradient-to-br from-primary-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg class="w-10 h-10 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
          </svg>
        </div>

        <h3 class="text-2xl font-bold text-gray-900 mb-3">{{ t('downloadPage.maintenance.title') }}</h3>
        <p class="text-gray-600 mb-6">{{ t('downloadPage.maintenance.description') }}</p>

        <div class="bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl p-4 mb-6">
          <p class="text-sm font-medium text-primary-700">{{ t('downloadPage.maintenance.newFeatures') }}</p>
        </div>

        <button @click="closeModal" class="btn btn-primary w-full">
          {{ t('downloadPage.maintenance.understood') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-gradient-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
