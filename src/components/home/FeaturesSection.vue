<script setup lang="ts">
import { ref, defineAsyncComponent, computed, type Component } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Lazy load mock UI components
const WebAIAssistantMock = defineAsyncComponent(() => import('./mocks/WebAIAssistantMock.vue'))
const Web3DViewerMock = defineAsyncComponent(() => import('./mocks/Web3DViewerMock.vue'))
const WebKanbanMock = defineAsyncComponent(() => import('./mocks/WebKanbanMock.vue'))
const WebTimelineMock = defineAsyncComponent(() => import('./mocks/WebTimelineMock.vue'))
const WebACCMock = defineAsyncComponent(() => import('./mocks/WebACCMock.vue'))

const BIMAIAssistantMock = defineAsyncComponent(() => import('./mocks/BIMAIAssistantMock.vue'))
const BIMClashMock = defineAsyncComponent(() => import('./mocks/BIMClashMock.vue'))
const BIMDesignMock = defineAsyncComponent(() => import('./mocks/BIMDesignMock.vue'))
const BIMQAQCMock = defineAsyncComponent(() => import('./mocks/BIMQAQCMock.vue'))
const BIMSyncMock = defineAsyncComponent(() => import('./mocks/BIMSyncMock.vue'))

// Default to 'web' tab (Web AI first)
const activeTab = ref<'web' | 'bim'>('web')
const activeFeature = ref(0)

// Web AI - 5 most outstanding cloud platform features
const webFeatures: { key: string; component: Component }[] = [
  { key: 'web_assistant', component: WebAIAssistantMock },
  { key: 'web_viewer', component: Web3DViewerMock },
  { key: 'web_taskboard', component: WebKanbanMock },
  { key: 'web_timeline', component: WebTimelineMock },
  { key: 'web_acc', component: WebACCMock },
]

// Revit AI - 5 most outstanding add-in features
const bimFeatures: { key: string; component: Component }[] = [
  { key: 'bim_assistant', component: BIMAIAssistantMock },
  { key: 'bim_collision', component: BIMClashMock },
  { key: 'bim_design', component: BIMDesignMock },
  { key: 'bim_qaqc', component: BIMQAQCMock },
  { key: 'bim_sync', component: BIMSyncMock },
]

const currentFeatures = computed(() => activeTab.value === 'web' ? webFeatures : bimFeatures)

const selectFeature = (index: number) => {
  activeFeature.value = index
}

const switchTab = (tab: 'bim' | 'web') => {
  activeTab.value = tab
  activeFeature.value = 0
}
</script>

<template>
  <section class="section bg-white overflow-hidden">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h2 class="text-h1 text-gray-900 mb-4">{{ t('features.title') }}</h2>
        <p class="text-lg text-gray-600">{{ t('features.subtitle') }}</p>
      </div>

      <!-- Tab Switcher -->
      <div class="flex justify-center mb-12">
        <div class="inline-flex bg-gray-100 rounded-2xl p-1.5">
          <!-- Web AI Tab (First) -->
          <button
            @click="switchTab('web')"
            class="px-8 py-4 rounded-xl font-medium transition-all duration-300"
            :class="activeTab === 'web' ? 'bg-white shadow-lg text-primary-600' : 'text-gray-600 hover:text-gray-900'"
          >
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
              </div>
              <div class="text-left">
                <div class="font-semibold">{{ t('features.web_ai.title') }}</div>
                <div class="text-xs text-gray-500">{{ t('features.web_ai.subtitle') }}</div>
              </div>
            </div>
          </button>
          <!-- BIM AI Tab (Second) -->
          <button
            @click="switchTab('bim')"
            class="px-8 py-4 rounded-xl font-medium transition-all duration-300"
            :class="activeTab === 'bim' ? 'bg-white shadow-lg text-primary-600' : 'text-gray-600 hover:text-gray-900'"
          >
            <div class="flex items-center gap-3">
              <img src="/images/revit-logo.svg" alt="Revit" class="w-10 h-10 rounded-lg object-contain" />
              <div class="text-left">
                <div class="font-semibold">{{ t('features.bim_ai.title') }}</div>
                <div class="text-xs text-gray-500">{{ t('features.bim_ai.subtitle') }}</div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- Feature Display -->
      <div class="grid lg:grid-cols-5 gap-8 items-start">
        <!-- Feature List (Left) -->
        <div class="lg:col-span-2 space-y-3">
          <button
            v-for="(feature, index) in currentFeatures"
            :key="feature.key"
            @click="selectFeature(index)"
            class="w-full text-left p-5 rounded-2xl transition-all duration-300 group"
            :class="activeFeature === index
              ? 'bg-gradient-primary text-white shadow-lg scale-[1.02]'
              : 'bg-gray-50 hover:bg-gray-100 text-gray-900'"
          >
            <div class="flex items-start gap-4">
              <div
                class="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold flex-shrink-0 transition-colors"
                :class="activeFeature === index ? 'bg-white/20 text-white' : 'bg-white text-primary-600'"
              >
                {{ index + 1 }}
              </div>
              <div>
                <h3 class="font-semibold mb-1">{{ t(`features.items.${feature.key}.title`) }}</h3>
                <p
                  class="text-sm leading-relaxed transition-colors"
                  :class="activeFeature === index ? 'text-white/80' : 'text-gray-500'"
                >
                  {{ t(`features.items.${feature.key}.description`) }}
                </p>
              </div>
            </div>
          </button>
        </div>

        <!-- Feature Image (Right) -->
        <div class="lg:col-span-3">
          <div class="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-4 shadow-2xl">
            <!-- Browser chrome -->
            <div class="flex items-center gap-2 mb-3">
              <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div class="flex-1 bg-gray-700 rounded-lg h-7 flex items-center px-3">
                <span class="text-gray-400 text-xs">{{ activeTab === 'bim' ? t('features.browser.bim') : t('features.browser.web') }}</span>
              </div>
            </div>

            <!-- Mock UI Component -->
            <div class="mock-ui-wrapper">
              <div class="mock-ui-content">
                <component
                  :is="currentFeatures[activeFeature].component"
                  :key="currentFeatures[activeFeature].key"
                />
              </div>
            </div>

            <!-- Floating badge -->
            <div class="absolute -bottom-4 -right-4 bg-gradient-primary text-white px-4 py-2 rounded-xl shadow-lg text-sm font-medium">
              {{ activeTab === 'bim' ? t('features.badge.bim') : t('features.badge.web') }}
            </div>
          </div>
        </div>
      </div>

      <!-- View All Features CTA -->
      <div class="text-center mt-16">
        <router-link to="/product" class="btn btn-outline group">
          {{ t('nav.product') }}
          <svg class="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mock UI Wrapper - Scales content to fit */
.mock-ui-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #f5f5f5;
  border-radius: 8px;
  /* Use aspect ratio for consistent sizing */
  aspect-ratio: 4 / 3;
}

.mock-ui-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 600px;
  height: 450px;
  transform-origin: top left;
  /* Default scale for ~390px mobile */
  transform: scale(0.54);
}

/* Desktop - no scaling */
@media (min-width: 1024px) {
  .mock-ui-wrapper {
    min-height: 360px;
    max-height: 400px;
    aspect-ratio: auto;
  }
  .mock-ui-content {
    position: relative;
    width: 100%;
    height: 100%;
    transform: none;
  }
}

/* Tablet - scale down */
@media (min-width: 768px) and (max-width: 1023px) {
  .mock-ui-content {
    /* (768 - 64) / 600 = 1.17, but container is ~60% of screen */
    transform: scale(0.75);
  }
}

/* Small phones (~320-375px) */
@media (max-width: 375px) {
  .mock-ui-content {
    /* (320 - 64) / 600 = 0.43 */
    transform: scale(0.43);
  }
}

/* Larger phones (~400-430px) */
@media (min-width: 400px) and (max-width: 767px) {
  .mock-ui-content {
    /* (414 - 64) / 600 = 0.58 */
    transform: scale(0.58);
  }
}

/* Screenshot components */
.mock-ui-wrapper :deep(.screenshot-container) {
  width: 100%;
  height: 100%;
}

.mock-ui-wrapper :deep(.screenshot) {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Rendered mock UI components */
.mock-ui-wrapper :deep(.mock-container) {
  width: 100%;
  height: 100%;
}
</style>