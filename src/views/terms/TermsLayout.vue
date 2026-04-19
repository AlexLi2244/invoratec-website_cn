<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { computed, ref } from 'vue'

const { t } = useI18n()
const route = useRoute()
const mobileMenuOpen = ref(false)

const termsLinks = [
  { key: 'terms', path: '/terms' },
  { key: 'privacy', path: '/terms/privacy' },
  { key: 'cookies', path: '/terms/cookies' },
  { key: 'dpa', path: '/terms/dpa' },
  { key: 'subprocessors', path: '/terms/subprocessors' },
  { key: 'ai', path: '/terms/ai' },
  { key: 'developer', path: '/terms/developer' },
  { key: 'integrations', path: '/terms/integrations' },
  { key: 'security', path: '/terms/security' },
]

const currentPath = computed(() => route.path)

const currentPageKey = computed(() => {
  const link = termsLinks.find(l => l.path === currentPath.value)
  return link ? link.key : 'terms'
})
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
          <span class="font-medium text-gray-900">{{ t(`terms.nav.${currentPageKey}`) }}</span>
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
          <!-- Back to Docs -->
          <router-link
            to="/docs"
            class="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-4 pb-4 border-b border-gray-200"
            @click="mobileMenuOpen = false"
          >
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {{ t('terms.backToDocs') }}
          </router-link>

          <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{{ t('terms.legalPolicies') }}</h2>
          <ul class="space-y-1">
            <li v-for="link in termsLinks" :key="link.key">
              <router-link
                :to="link.path"
                class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 block"
                :class="currentPath === link.path ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
                @click="mobileMenuOpen = false"
              >
                {{ t(`terms.nav.${link.key}`) }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="grid lg:grid-cols-4 gap-8">
        <!-- Main Content -->
        <main class="lg:col-span-3 lg:order-1 min-w-0">
          <div class="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-soft overflow-x-hidden">
            <slot></slot>
          </div>
        </main>

        <!-- Sidebar (Desktop only) -->
        <aside class="hidden lg:block lg:col-span-1 lg:order-2">
          <nav class="sticky top-24 bg-white rounded-xl p-4 shadow-soft">
            <!-- Back to Docs -->
            <router-link
              to="/docs"
              class="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-4 pb-4 border-b border-gray-200"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {{ t('terms.backToDocs') }}
            </router-link>

            <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{{ t('terms.legalPolicies') }}</h2>
            <ul class="space-y-1">
              <li v-for="link in termsLinks" :key="link.key">
                <router-link
                  :to="link.path"
                  class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 block"
                  :class="currentPath === link.path ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
                >
                  {{ t(`terms.nav.${link.key}`) }}
                </router-link>
              </li>
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  </div>
</template>