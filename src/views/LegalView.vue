<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const activeSection = ref('security')
const mobileMenuOpen = ref(false)

// Security Policy - standalone section
const securitySection = { key: 'security', icon: '🛡️' }

// Legal & Policies sections
const legalPolicySections = [
  { key: 'terms', icon: '📄' },
  { key: 'privacy', icon: '🔒' },
  { key: 'cookies', icon: '🍪' },
  { key: 'dpa', icon: '📋' },
  { key: 'subprocessors', icon: '🔗' },
  { key: 'ai', icon: '🤖' },
  { key: 'developer', icon: '👨‍💻' },
  { key: 'integrations', icon: '🔌' },
]

const selectSection = (key: string) => {
  activeSection.value = key
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="pt-20 min-h-screen bg-gray-50">
    <div class="container-custom py-6 md:py-12">
      <!-- Mobile Navigation Toggle -->
      <div class="lg:hidden mb-4">
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="w-full flex items-center justify-between bg-white rounded-xl p-4 shadow-soft"
        >
          <span class="font-medium text-gray-900">{{ t('docs.legal.' + activeSection) }}</span>
          <svg
            class="w-5 h-5 text-gray-500 transition-transform"
            :class="{ 'rotate-180': mobileMenuOpen }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <!-- Mobile Menu Dropdown -->
        <nav
          v-show="mobileMenuOpen"
          class="mt-2 bg-white rounded-xl p-4 shadow-soft"
        >
          <!-- Security Policy Section -->
          <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ t('docs.legal.security') }}</h2>
          <ul class="space-y-1 mb-6">
            <li>
              <button
                @click="selectSection(securitySection.key)"
                class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                :class="activeSection === securitySection.key ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
              >
                <span>{{ securitySection.icon }}</span>
                {{ t('docs.legal.' + securitySection.key) }}
              </button>
            </li>
          </ul>

          <!-- Legal & Policies Section -->
          <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ t('docs.legalPoliciesTitle') }}</h2>
          <ul class="space-y-1">
            <li v-for="section in legalPolicySections" :key="section.key">
              <button
                @click="selectSection(section.key)"
                class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                :class="activeSection === section.key ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
              >
                <span>{{ section.icon }}</span>
                {{ t('docs.legal.' + section.key) }}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div class="grid lg:grid-cols-4 gap-8">
        <!-- Sidebar (Desktop only) -->
        <aside class="hidden lg:block lg:col-span-1">
          <nav class="sticky top-24 bg-white rounded-xl p-4 shadow-soft max-h-[calc(100vh-8rem)] overflow-y-auto">
            <!-- Security Policy Section -->
            <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ t('docs.legal.security') }}</h2>
            <ul class="space-y-1 mb-6">
              <li>
                <button
                  @click="activeSection = securitySection.key"
                  class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                  :class="activeSection === securitySection.key ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
                >
                  <span>{{ securitySection.icon }}</span>
                  {{ t('docs.legal.' + securitySection.key) }}
                </button>
              </li>
            </ul>

            <!-- Legal & Policies Section -->
            <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ t('docs.legalPoliciesTitle') }}</h2>
            <ul class="space-y-1">
              <li v-for="section in legalPolicySections" :key="section.key">
                <button
                  @click="activeSection = section.key"
                  class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                  :class="activeSection === section.key ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
                >
                  <span>{{ section.icon }}</span>
                  {{ t('docs.legal.' + section.key) }}
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <!-- Main Content -->
        <main class="lg:col-span-3 min-w-0">
          <div class="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-soft overflow-x-hidden">
            <!-- Legal Content -->
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ t('docs.legal.' + activeSection) }}</h1>
            <p class="text-gray-500 mb-6 md:mb-8 text-sm sm:text-base">{{ t('terms.security.lastUpdated') }}: {{ t('docs.legalLastUpdated') }}</p>

            <div class="prose prose-sm sm:prose-lg max-w-none text-gray-600 break-words overflow-hidden">
              <!-- Terms of Service -->
              <div v-if="activeSection === 'terms'" v-html="t('docs.legalContent.terms')"></div>

              <!-- Privacy Policy -->
              <div v-else-if="activeSection === 'privacy'" v-html="t('docs.legalContent.privacy')"></div>

              <!-- Security Policy -->
              <div v-else-if="activeSection === 'security'" v-html="t('docs.legalContent.security')"></div>

              <!-- Cookie Policy -->
              <div v-else-if="activeSection === 'cookies'" v-html="t('docs.legalContent.cookies')"></div>

              <!-- DPA -->
              <div v-else-if="activeSection === 'dpa'" v-html="t('docs.legalContent.dpa')"></div>

              <!-- Sub-processors -->
              <div v-else-if="activeSection === 'subprocessors'" v-html="t('docs.legalContent.subprocessors')"></div>

              <!-- AI Terms -->
              <div v-else-if="activeSection === 'ai'" v-html="t('docs.legalContent.ai')"></div>

              <!-- Developer Terms -->
              <div v-else-if="activeSection === 'developer'" v-html="t('docs.legalContent.developer')"></div>

              <!-- Integrations -->
              <div v-else-if="activeSection === 'integrations'" v-html="t('docs.legalContent.integrations')"></div>
            </div>

            <!-- Help Section -->
            <div class="mt-6 md:mt-8 p-4 sm:p-6 bg-gradient-to-r from-primary-50 to-purple-50 rounded-xl">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ t('docs.help.title') }}</h3>
              <p class="text-gray-600 mb-4 text-sm sm:text-base">{{ t('docs.help.description') }}</p>
              <router-link to="/contact" class="btn btn-primary btn-sm">{{ t('docs.help.cta') }}</router-link>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>
