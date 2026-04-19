<script setup lang="ts">
import { ref, defineAsyncComponent, computed, type Component } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// Active section and feature
const activeSection = ref<'web' | 'bim'>('web')
const activeFeatureIndex = ref(0)

// Lazy load mock UI components - using screenshot-based components
const ProductTasksMock = defineAsyncComponent(() => import('@/components/product/ProductTasksMock.vue'))
const ProductViewerMock = defineAsyncComponent(() => import('@/components/product/ProductViewerMock.vue'))
const ProductTimelineMock = defineAsyncComponent(() => import('@/components/product/ProductTimelineMock.vue'))
const ProductCoordinationMock = defineAsyncComponent(() => import('@/components/product/ProductCoordinationMock.vue'))
const ProductDrawingsMock = defineAsyncComponent(() => import('@/components/product/ProductDrawingsMock.vue'))
const ProductReportsMock = defineAsyncComponent(() => import('@/components/product/ProductReportsMock.vue'))

const BIMAssistantMock = defineAsyncComponent(() => import('@/components/product/BIMAssistantMock.vue'))
const BIMDashboardMock = defineAsyncComponent(() => import('@/components/product/BIMDashboardMock.vue'))
const BIMTasksMock = defineAsyncComponent(() => import('@/components/product/BIMTasksMock.vue'))
const BIMBoardMock = defineAsyncComponent(() => import('@/components/product/BIMBoardMock.vue'))
const BIMACCMock = defineAsyncComponent(() => import('@/components/product/BIMACCMock.vue'))
const BIMToolsMock = defineAsyncComponent(() => import('@/components/product/BIMToolsMock.vue'))

// Web AI Platform Features
const webFeatures: { key: string; icon: string; component: Component }[] = [
  { key: 'tasks', icon: '📋', component: ProductTasksMock },
  { key: 'viewer', icon: '🎨', component: ProductViewerMock },
  { key: 'timeline', icon: '📅', component: ProductTimelineMock },
  { key: 'coordination', icon: '⚠️', component: ProductCoordinationMock },
  { key: 'drawings', icon: '📐', component: ProductDrawingsMock },
  { key: 'reports', icon: '📊', component: ProductReportsMock },
]

// BIM AI Revit Add-in Features
const bimFeatures: { key: string; icon: string; component: Component }[] = [
  { key: 'assistant', icon: '✨', component: BIMAssistantMock },
  { key: 'dashboard', icon: '📊', component: BIMDashboardMock },
  { key: 'mytasks', icon: '📋', component: BIMTasksMock },
  { key: 'board', icon: '📌', component: BIMBoardMock },
  { key: 'acc', icon: '☁️', component: BIMACCMock },
  { key: 'tools', icon: '🔧', component: BIMToolsMock },
]

const currentFeatures = computed(() => activeSection.value === 'web' ? webFeatures : bimFeatures)
const currentFeature = computed(() => currentFeatures.value[activeFeatureIndex.value])

const selectFeature = (index: number) => {
  activeFeatureIndex.value = index
}

const switchSection = (section: 'web' | 'bim') => {
  activeSection.value = section
  activeFeatureIndex.value = 0
}
</script>

<template>
  <div class="product-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          <span>{{ t('product.hero.badge') || 'Complete BIM Platform' }}</span>
        </div>
        <h1 class="hero-title">{{ t('product.hero.title') }}</h1>
        <p class="hero-subtitle">{{ t('product.hero.subtitle') }}</p>

        <!-- Section Switcher -->
        <div class="section-switcher">
          <button
            @click="switchSection('web')"
            class="switch-btn"
            :class="{ active: activeSection === 'web' }"
          >
            <div class="switch-icon web-icon">
              <svg class="icon-svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
            </div>
            <span>Web AI</span>
          </button>

          <button
            @click="switchSection('bim')"
            class="switch-btn"
            :class="{ active: activeSection === 'bim' }"
          >
            <img src="/images/revit-icon.jpg" alt="Revit" class="switch-icon" />
            <span>BIM AI</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features-section">
      <div class="features-container">
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-icon-wrapper">
            <div v-if="activeSection === 'web'" class="section-icon web-platform-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
            </div>
            <img v-else src="/images/revit-icon.jpg" alt="Revit" class="section-icon revit-icon" />
          </div>
          <h2 class="section-title">
            {{ activeSection === 'web' ? t('product.web.title') : t('product.bim.title') }}
          </h2>
          <p class="section-subtitle">
            {{ activeSection === 'web' ? t('product.web.browserBased') || 'Browser-based collaboration' : t('product.bim.revitPlugin') || 'Revit Add-in Plugin' }}
            <template v-if="activeSection === 'web'">
              <span class="subtitle-separator">•</span>
              <a href="https://cloud.invoratec.com" target="_blank" rel="noopener noreferrer" class="cloud-link">cloud.invoratec.com</a>
            </template>
          </p>
          <a
            v-if="activeSection === 'web'"
            href="https://cloud.invoratec.com"
            target="_blank"
            rel="noopener noreferrer"
            class="signup-btn"
          >
            <svg class="signup-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
            </svg>
            {{ t('product.web.signupNow') || 'Sign Up Now - Free Trial' }}
          </a>
        </div>

        <!-- Feature Display -->
        <div class="feature-display">
          <!-- Feature List -->
          <div class="feature-list">
            <button
              v-for="(feature, index) in currentFeatures"
              :key="feature.key"
              @click="selectFeature(index)"
              class="feature-btn"
              :class="{ active: activeFeatureIndex === index }"
            >
              <div class="feature-icon">{{ feature.icon }}</div>
              <div class="feature-text">
                <h3 class="feature-title">{{ t(`product.features.${activeSection}.${feature.key}.title`) }}</h3>
                <p class="feature-desc">{{ t(`product.features.${activeSection}.${feature.key}.description`) }}</p>
              </div>
            </button>

            <!-- Try Web Platform Link -->
            <a
              v-if="activeSection === 'web'"
              href="https://cloud.invoratec.com"
              target="_blank"
              rel="noopener noreferrer"
              class="try-platform-link"
            >
              <div class="try-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </div>
              <div class="try-text">
                <span class="try-title">{{ t('product.web.tryItNow') || 'Try Web Platform' }}</span>
                <span class="try-url">cloud.invoratec.com</span>
              </div>
              <div class="try-arrow">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </a>
          </div>

          <!-- Mock UI Display -->
          <div class="mock-display">
            <div class="mock-frame">
              <!-- Browser Chrome -->
              <div class="browser-chrome">
                <div class="chrome-dots">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
                <div class="chrome-url">
                  {{ activeSection === 'bim' ? 'Autodesk Revit - InvoratecAI' : 'cloud.invoratec.com' }}
                </div>
              </div>

              <!-- Mock UI Component -->
              <div class="mock-content">
                <component
                  :is="currentFeature.component"
                  :key="currentFeature.key"
                />
              </div>

              <!-- Badge -->
              <div class="mock-badge">
                {{ activeSection === 'bim' ? 'Revit Add-in' : 'Cloud Platform' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Section -->
    <section class="comparison-section">
      <div class="comparison-container">
        <div class="comparison-header">
          <h2>{{ t('product.comparison.title') || 'Complete Platform' }}</h2>
          <p>{{ t('product.comparison.subtitle') || 'Seamlessly connect your Revit workflows with cloud-based project management' }}</p>
        </div>

        <div class="comparison-cards">
          <!-- Web AI Card -->
          <div class="comparison-card web">
            <div class="card-header">
              <div class="card-icon web-icon">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
              </div>
              <div>
                <h3>{{ t('features.web_ai.title') }}</h3>
                <p>{{ t('features.web_ai.subtitle') }}</p>
              </div>
            </div>
            <ul class="card-features">
              <li v-for="feature in webFeatures" :key="feature.key">
                <span class="check">✓</span>
                <span>{{ t(`product.features.web.${feature.key}.title`) }}</span>
              </li>
            </ul>
          </div>

          <!-- BIM AI Card -->
          <div class="comparison-card bim">
            <div class="card-header">
              <img src="/images/revit-icon.jpg" alt="Revit" class="card-icon" />
              <div>
                <h3>{{ t('features.bim_ai.title') }}</h3>
                <p>{{ t('features.bim_ai.subtitle') }}</p>
              </div>
            </div>
            <ul class="card-features">
              <li v-for="feature in bimFeatures" :key="feature.key">
                <span class="check purple">✓</span>
                <span>{{ t(`product.features.bim.${feature.key}.title`) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-bg"></div>
      <div class="cta-content">
        <h2>{{ t('product.cta.title') }}</h2>
        <p>{{ t('product.cta.subtitle') || 'Experience the power of AI-driven BIM management' }}</p>
        <div class="cta-buttons">
          <router-link to="/demo" class="cta-btn primary">
            {{ t('product.cta.button') }}
          </router-link>
          <router-link to="/pricing" class="cta-btn secondary">
            {{ t('nav.pricing') }}
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Base styles */
.product-page {
  min-height: 100vh;
  min-height: 100dvh;
  background: #f9fafb;
}

/* Hero Section */
.hero-section {
  position: relative;
  padding: 6rem 1rem 3rem;
  background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 9999px;
  margin-bottom: 1rem;
}

.badge-dot {
  width: 0.5rem;
  height: 0.5rem;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.hero-badge span {
  color: rgba(255,255,255,0.9);
  font-size: clamp(0.7rem, 2.5vw, 0.875rem);
  font-weight: 500;
}

.hero-title {
  color: white;
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.hero-subtitle {
  color: rgba(255,255,255,0.8);
  font-size: clamp(0.875rem, 3vw, 1.125rem);
  margin-bottom: 1.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.section-switcher {
  display: inline-flex;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 0.75rem;
  padding: 0.25rem;
}

.switch-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  background: transparent;
  border-radius: 0.5rem;
  color: rgba(255,255,255,0.8);
  font-weight: 600;
  font-size: clamp(0.75rem, 2.5vw, 0.875rem);
  cursor: pointer;
  transition: all 0.3s;
}

.switch-btn.active {
  background: white;
  color: #667EEA;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.switch-icon {
  width: clamp(1.5rem, 4vw, 2rem);
  height: clamp(1.5rem, 4vw, 2rem);
  border-radius: 0.5rem;
  object-fit: contain;
}

.switch-icon.web-icon {
  background: linear-gradient(135deg, #10b981, #14b8a6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-svg {
  width: 60%;
  height: 60%;
  color: white;
}

/* Features Section */
.features-section {
  padding: clamp(2rem, 5vw, 4rem) 1rem;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
}

.section-title {
  font-size: clamp(1.25rem, 4vw, 2.25rem);
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.section-icon-wrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.section-icon {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1rem;
}

.section-icon.web-platform-icon {
  background: linear-gradient(135deg, #10b981, #14b8a6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-icon.web-platform-icon svg {
  width: 60%;
  height: 60%;
  color: white;
}

.section-icon.revit-icon {
  object-fit: contain;
}

.section-subtitle {
  color: #6b7280;
  font-size: clamp(0.8rem, 2.5vw, 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.subtitle-separator {
  color: #d1d5db;
}

.cloud-link {
  color: #667EEA;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.cloud-link:hover {
  color: #764BA2;
  text-decoration: underline;
}

.signup-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
  color: white;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 0.75rem;
  transition: all 0.3s;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.signup-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
}

.signup-icon {
  width: 1.25rem;
  height: 1.25rem;
}

/* Feature Display - Orientation-based layout */
.feature-display {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Portrait: Stack vertically, fit to width */
@media (orientation: portrait) {
  .feature-display {
    flex-direction: column;
  }

  .feature-list {
    width: 100%;
  }

  .mock-display {
    width: 100%;
  }
}

/* Landscape: Side by side, fit to height */
@media (orientation: landscape) {
  .feature-display {
    flex-direction: row;
    align-items: flex-start;
    max-height: calc(100vh - 200px);
    max-height: calc(100dvh - 200px);
  }

  .feature-list {
    width: 40%;
    max-height: calc(100vh - 220px);
    max-height: calc(100dvh - 220px);
    overflow-y: auto;
  }

  .mock-display {
    width: 60%;
    max-height: calc(100vh - 220px);
    max-height: calc(100dvh - 220px);
  }
}

/* Desktop override */
@media (min-width: 1024px) {
  .feature-display {
    flex-direction: row;
    gap: 2rem;
    max-height: none;
  }

  .feature-list {
    width: 40%;
    max-height: none;
  }

  .mock-display {
    width: 60%;
    max-height: none;
  }
}

/* Feature List */
.feature-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.feature-btn {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  width: 100%;
  padding: clamp(0.625rem, 2vw, 1rem);
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 0.75rem;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s;
}

.feature-btn.active {
  background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
  border-color: transparent;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.feature-btn:not(.active):hover {
  background: #f9fafb;
}

.feature-icon {
  width: clamp(1.75rem, 4vw, 2.5rem);
  height: clamp(1.75rem, 4vw, 2.5rem);
  background: #f3f4f6;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(0.875rem, 2.5vw, 1.125rem);
  flex-shrink: 0;
}

.feature-btn.active .feature-icon {
  background: rgba(255,255,255,0.2);
}

.feature-text {
  flex: 1;
  min-width: 0;
}

.feature-title {
  font-size: clamp(0.8rem, 2.5vw, 0.95rem);
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.125rem;
}

.feature-btn.active .feature-title {
  color: white;
}

.feature-desc {
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  color: #6b7280;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.feature-btn.active .feature-desc {
  color: rgba(255,255,255,0.8);
}

/* Try Platform Link */
.try-platform-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: clamp(0.75rem, 2vw, 1rem);
  background: linear-gradient(135deg, #ecfdf5, #d1fae5);
  border: 2px solid #10b981;
  border-radius: 0.75rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 0.5rem;
}

.try-platform-link:hover {
  background: linear-gradient(135deg, #d1fae5, #a7f3d0);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
}

.try-icon {
  width: clamp(2rem, 4vw, 2.5rem);
  height: clamp(2rem, 4vw, 2.5rem);
  background: #10b981;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.try-icon svg {
  width: 60%;
  height: 60%;
  color: white;
}

.try-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.try-title {
  font-size: clamp(0.85rem, 2.5vw, 0.95rem);
  font-weight: 600;
  color: #065f46;
}

.try-url {
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  color: #10b981;
  font-weight: 500;
}

.try-arrow {
  width: 1.5rem;
  height: 1.5rem;
  color: #10b981;
  flex-shrink: 0;
}

.try-arrow svg {
  width: 100%;
  height: 100%;
}

/* Mock Display */
.mock-display {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mock-frame {
  position: relative;
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #1f2937, #111827);
  border-radius: 1rem;
  padding: 0.75rem;
  box-shadow: 0 25px 50px rgba(0,0,0,0.15);
}

/* Landscape: fit to height */
@media (orientation: landscape) and (max-width: 1023px) {
  .mock-frame {
    max-height: calc(100vh - 240px);
    max-height: calc(100dvh - 240px);
  }
}

.browser-chrome {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.chrome-dots {
  display: flex;
  gap: 0.25rem;
}

.dot {
  width: clamp(0.4rem, 1.5vw, 0.6rem);
  height: clamp(0.4rem, 1.5vw, 0.6rem);
  border-radius: 50%;
}

.dot.red { background: #ef4444; }
.dot.yellow { background: #eab308; }
.dot.green { background: #22c55e; }

.chrome-url {
  flex: 1;
  background: #374151;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  color: #9ca3af;
  font-size: clamp(0.6rem, 1.8vw, 0.75rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mock-content {
  width: 100%;
  aspect-ratio: 4 / 3;
  background: #f5f5f5;
  border-radius: 0.5rem;
  overflow: hidden;
}

/* Landscape: adjust aspect ratio to fit height */
@media (orientation: landscape) and (max-width: 1023px) {
  .mock-content {
    aspect-ratio: 16 / 9;
  }
}

.mock-content :deep(.screenshot-container) {
  width: 100%;
  height: 100%;
}

.mock-content :deep(.screenshot) {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
}

.mock-badge {
  position: absolute;
  bottom: -0.5rem;
  right: -0.5rem;
  background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
  color: white;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: clamp(0.6rem, 1.8vw, 0.75rem);
  font-weight: 500;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

/* Comparison Section */
.comparison-section {
  padding: clamp(2rem, 5vw, 4rem) 1rem;
  background: white;
}

.comparison-container {
  max-width: 900px;
  margin: 0 auto;
}

.comparison-header {
  text-align: center;
  margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
}

.comparison-header h2 {
  font-size: clamp(1.25rem, 4vw, 2rem);
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.comparison-header p {
  color: #6b7280;
  font-size: clamp(0.8rem, 2.5vw, 1rem);
  max-width: 500px;
  margin: 0 auto;
}

.comparison-cards {
  display: grid;
  gap: 1rem;
}

@media (min-width: 640px) {
  .comparison-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

.comparison-card {
  padding: clamp(1rem, 3vw, 1.5rem);
  border-radius: 1rem;
  border: 1px solid;
}

.comparison-card.web {
  background: linear-gradient(135deg, #ecfdf5, #ccfbf1);
  border-color: #a7f3d0;
}

.comparison-card.bim {
  background: linear-gradient(135deg, #faf5ff, #ede9fe);
  border-color: #c4b5fd;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.card-icon {
  width: clamp(2rem, 5vw, 3rem);
  height: clamp(2rem, 5vw, 3rem);
  border-radius: 0.75rem;
  object-fit: contain;
}

.card-icon.web-icon {
  background: linear-gradient(135deg, #10b981, #14b8a6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-icon.web-icon svg {
  width: 60%;
  height: 60%;
  color: white;
}

.card-header h3 {
  font-size: clamp(0.9rem, 2.5vw, 1.125rem);
  font-weight: 700;
  color: #111827;
}

.card-header p {
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  color: #10b981;
}

.comparison-card.bim .card-header p {
  color: #8b5cf6;
}

.card-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.card-features li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: clamp(0.75rem, 2vw, 0.875rem);
  color: #374151;
}

.check {
  width: 1.125rem;
  height: 1.125rem;
  background: #10b981;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.6rem;
  flex-shrink: 0;
}

.check.purple {
  background: #8b5cf6;
}

/* CTA Section */
.cta-section {
  position: relative;
  padding: clamp(2rem, 5vw, 4rem) 1rem;
  background: linear-gradient(135deg, #667EEA 0%, #764BA2 100%);
  overflow: hidden;
}

.cta-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.cta-bg::before,
.cta-bg::after {
  content: '';
  position: absolute;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
}

.cta-bg::before {
  width: 12rem;
  height: 12rem;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
}

.cta-bg::after {
  width: 16rem;
  height: 16rem;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
}

.cta-content {
  position: relative;
  z-index: 1;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.cta-content h2 {
  color: white;
  font-size: clamp(1.25rem, 4vw, 2rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
}

.cta-content p {
  color: rgba(255,255,255,0.8);
  font-size: clamp(0.8rem, 2.5vw, 1rem);
  margin-bottom: 1.5rem;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: center;
}

@media (min-width: 480px) {
  .cta-buttons {
    flex-direction: row;
    justify-content: center;
  }
}

.cta-btn {
  padding: 0.625rem 1.5rem;
  border-radius: 0.5rem;
  font-size: clamp(0.8rem, 2.5vw, 0.95rem);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
}

.cta-btn.primary {
  background: white;
  color: #667EEA;
}

.cta-btn.primary:hover {
  background: #f3f4f6;
}

.cta-btn.secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.cta-btn.secondary:hover {
  background: rgba(255,255,255,0.1);
}
</style>
