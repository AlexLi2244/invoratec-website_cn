<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const activeSection = ref('getting-started')
const mobileMenuOpen = ref(false)

// Documentation sections organized by category
const generalSections = [
  { key: 'getting-started', icon: '🚀' },
  { key: 'installation', icon: '💻' },
  { key: 'configuration', icon: '⚙️' },
]

const webPlatformSections = [
  { key: 'web-tasks', icon: '📋' },
  { key: 'web-viewer', icon: '🏗️' },
  { key: 'web-timeline', icon: '📅' },
  { key: 'web-coordination', icon: '🔄' },
  { key: 'web-sheets', icon: '📐' },
  { key: 'web-reports', icon: '📊' },
]

const revitAddinSections = [
  { key: 'revit-assistant', icon: '🤖' },
  { key: 'revit-tasks', icon: '✅' },
  { key: 'revit-tools', icon: '🔧' },
  { key: 'revit-projects', icon: '📁' },
  { key: 'revit-acc', icon: '☁️' },
]

const developerSections = [
  { key: 'api-reference', icon: '📚' },
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
          <span class="font-medium text-gray-900">{{ t(`docs.sections.${activeSection}.title`) }}</span>
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
          <!-- General Section -->
          <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ t('docs.navigation') }}</h2>
          <ul class="space-y-1 mb-6">
            <li v-for="section in generalSections" :key="section.key">
              <button
                @click="selectSection(section.key)"
                class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                :class="activeSection === section.key ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
              >
                <span>{{ section.icon }}</span>
                {{ t(`docs.sections.${section.key}.title`) }}
              </button>
            </li>
          </ul>

          <!-- Web Platform Section -->
          <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ t('docs.categories.webPlatform') }}</h2>
          <ul class="space-y-1 mb-6">
            <li v-for="section in webPlatformSections" :key="section.key">
              <button
                @click="selectSection(section.key)"
                class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                :class="activeSection === section.key ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
              >
                <span>{{ section.icon }}</span>
                {{ t(`docs.sections.${section.key}.title`) }}
              </button>
            </li>
          </ul>

          <!-- Revit Add-in Section -->
          <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ t('docs.categories.revitAddin') }}</h2>
          <ul class="space-y-1 mb-6">
            <li v-for="section in revitAddinSections" :key="section.key">
              <button
                @click="selectSection(section.key)"
                class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                :class="activeSection === section.key ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
              >
                <span>{{ section.icon }}</span>
                {{ t(`docs.sections.${section.key}.title`) }}
              </button>
            </li>
          </ul>

          <!-- Developer Section -->
          <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ t('docs.categories.developer') }}</h2>
          <ul class="space-y-1">
            <li v-for="section in developerSections" :key="section.key">
              <button
                @click="selectSection(section.key)"
                class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                :class="activeSection === section.key ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
              >
                <span>{{ section.icon }}</span>
                {{ t(`docs.sections.${section.key}.title`) }}
              </button>
            </li>
          </ul>
        </nav>
      </div>

      <div class="grid lg:grid-cols-4 gap-8">
        <!-- Sidebar (Desktop only) -->
        <aside class="hidden lg:block lg:col-span-1">
          <nav class="sticky top-24 bg-white rounded-xl p-4 shadow-soft max-h-[calc(100vh-8rem)] overflow-y-auto">
            <!-- General Section -->
            <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ t('docs.navigation') }}</h2>
            <ul class="space-y-1 mb-6">
              <li v-for="section in generalSections" :key="section.key">
                <button
                  @click="activeSection = section.key"
                  class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                  :class="activeSection === section.key ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
                >
                  <span>{{ section.icon }}</span>
                  {{ t(`docs.sections.${section.key}.title`) }}
                </button>
              </li>
            </ul>

            <!-- Web Platform Section -->
            <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ t('docs.categories.webPlatform') }}</h2>
            <ul class="space-y-1 mb-6">
              <li v-for="section in webPlatformSections" :key="section.key">
                <button
                  @click="activeSection = section.key"
                  class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                  :class="activeSection === section.key ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
                >
                  <span>{{ section.icon }}</span>
                  {{ t(`docs.sections.${section.key}.title`) }}
                </button>
              </li>
            </ul>

            <!-- Revit Add-in Section -->
            <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ t('docs.categories.revitAddin') }}</h2>
            <ul class="space-y-1 mb-6">
              <li v-for="section in revitAddinSections" :key="section.key">
                <button
                  @click="activeSection = section.key"
                  class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                  :class="activeSection === section.key ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
                >
                  <span>{{ section.icon }}</span>
                  {{ t(`docs.sections.${section.key}.title`) }}
                </button>
              </li>
            </ul>

            <!-- Developer Section -->
            <h2 class="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">{{ t('docs.categories.developer') }}</h2>
            <ul class="space-y-1">
              <li v-for="section in developerSections" :key="section.key">
                <button
                  @click="activeSection = section.key"
                  class="w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center gap-2 text-sm"
                  :class="activeSection === section.key ? 'bg-primary-100 text-primary-600 font-medium' : 'text-gray-600 hover:bg-gray-100'"
                >
                  <span>{{ section.icon }}</span>
                  {{ t(`docs.sections.${section.key}.title`) }}
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        <!-- Main Content -->
        <main class="lg:col-span-3 min-w-0">
          <div class="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-soft overflow-x-hidden">
            <!-- Documentation Content -->
            <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ t(`docs.sections.${activeSection}.title`) }}</h1>
            <p class="text-gray-500 mb-6 md:mb-8 text-sm sm:text-base">{{ t(`docs.sections.${activeSection}.description`) }}</p>

            <div class="prose prose-sm sm:prose-lg max-w-none text-gray-600 break-words overflow-hidden">
              <!-- Getting Started -->
              <div v-if="activeSection === 'getting-started'" v-html="t('docs.docsContent.getting-started')"></div>

              <!-- Installation -->
              <div v-else-if="activeSection === 'installation'" v-html="t('docs.docsContent.installation')"></div>

              <!-- Configuration -->
              <div v-else-if="activeSection === 'configuration'" v-html="t('docs.docsContent.configuration')"></div>

              <!-- Web Platform: Task Management -->
              <div v-else-if="activeSection === 'web-tasks'" v-html="t('docs.docsContent.web-tasks')"></div>

              <!-- Web Platform: 3D Model Viewer -->
              <div v-else-if="activeSection === 'web-viewer'" v-html="t('docs.docsContent.web-viewer')"></div>

              <!-- Web Platform: Timeline & Gantt -->
              <div v-else-if="activeSection === 'web-timeline'" v-html="t('docs.docsContent.web-timeline')"></div>

              <!-- Web Platform: Coordination -->
              <div v-else-if="activeSection === 'web-coordination'" v-html="t('docs.docsContent.web-coordination')"></div>

              <!-- Web Platform: Shop Drawings -->
              <div v-else-if="activeSection === 'web-sheets'" v-html="t('docs.docsContent.web-sheets')"></div>

              <!-- Web Platform: Reports & Analytics -->
              <div v-else-if="activeSection === 'web-reports'" v-html="t('docs.docsContent.web-reports')"></div>

              <!-- Revit Add-in: AI Assistant -->
              <div v-else-if="activeSection === 'revit-assistant'" v-html="t('docs.docsContent.revit-assistant')"></div>

              <!-- Revit Add-in: Task Management -->
              <div v-else-if="activeSection === 'revit-tasks'" v-html="t('docs.docsContent.revit-tasks')"></div>

              <!-- Revit Add-in: Tool Library -->
              <div v-else-if="activeSection === 'revit-tools'" v-html="t('docs.docsContent.revit-tools')"></div>

              <!-- Revit Add-in: Projects -->
              <div v-else-if="activeSection === 'revit-projects'" v-html="t('docs.docsContent.revit-projects')"></div>

              <!-- Revit Add-in: ACC Integration -->
              <div v-else-if="activeSection === 'revit-acc'" v-html="t('docs.docsContent.revit-acc')"></div>

              <!-- API Reference -->
              <div v-else-if="activeSection === 'api-reference'" v-html="t('docs.docsContent.api-reference')"></div>
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
