<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const route = useRoute()
const { t, locale } = useI18n()

const isMenuOpen = ref(false)
const isScrolled = ref(false)
const isLangDropdownOpen = ref(false)

// Language options
const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'es', label: 'Español' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'pt', label: 'Português' },
  { code: 'ar', label: 'العربية' },
  { code: 'ru', label: 'Русский' },
]

const setLocale = (code: string) => {
  locale.value = code
  localStorage.setItem('locale', code)
  isLangDropdownOpen.value = false
}

// Pages that have dark hero sections (navbar should be transparent initially)
const darkHeroPages = ['/', '/about', '/cases', '/product', '/new-media']

// Check if current page has a dark hero
const hasDarkHero = computed(() => darkHeroPages.includes(route.path))

// Navbar should show solid background if scrolled OR if page doesn't have dark hero
const showSolidBg = computed(() => isScrolled.value || !hasDarkHero.value)

// Handle scroll for navbar background
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Check initial state
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const navLinks = computed(() => [
  { name: t('nav.home'), path: '/' },
  { name: t('nav.product'), path: '/product' },
  { name: t('nav.pricing'), path: '/pricing' },
  { name: t('nav.about'), path: '/about' },
  { name: t('nav.newMedia'), path: '/new-media' },
  { name: t('nav.download'), path: '/download' },
])

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const isActive = (path: string) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      showSolidBg ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent',
      showSolidBg ? 'py-3' : 'py-4'
    ]"
  >
    <div class="container-custom">
      <nav class="flex items-center justify-between">
        <!-- Logo - always blue -->
        <router-link to="/" class="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="InvoratecAI"
            class="h-10 w-auto"
          />
          <span class="text-xl font-bold" :class="showSolidBg ? 'text-gray-900' : 'text-white'">
            {{ t('nav.logo') }}
          </span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-8">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="relative font-medium transition-colors duration-200 py-2"
            :class="[
              isActive(link.path)
                ? (showSolidBg ? 'text-primary-600' : 'text-white font-semibold')
                : showSolidBg
                  ? 'text-gray-600 hover:text-primary-600'
                  : 'text-white hover:text-white/80'
            ]"
          >
            {{ link.name }}
            <!-- Active indicator underline -->
            <span
              v-if="isActive(link.path)"
              class="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
              :class="showSolidBg ? 'bg-primary-600' : 'bg-white'"
            ></span>
          </router-link>
        </div>

        <!-- Right side actions -->
        <div class="hidden lg:flex items-center gap-4">
          <!-- Language Dropdown -->
          <div class="relative">
            <button
              @click="isLangDropdownOpen = !isLangDropdownOpen"
              class="flex items-center gap-1.5 px-3 py-1.5 rounded-button border transition-colors duration-200"
              :class="showSolidBg ? 'border-gray-200 text-gray-600 hover:bg-gray-50' : 'border-white/30 text-white hover:bg-white/10'"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span class="text-sm font-medium">{{ t('nav.language') }}</span>
              <svg class="w-3 h-3 transition-transform" :class="isLangDropdownOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- Dropdown Menu -->
            <transition name="fade">
              <div
                v-if="isLangDropdownOpen"
                class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50 max-h-80 overflow-y-auto"
              >
                <button
                  v-for="lang in languages"
                  :key="lang.code"
                  @click="setLocale(lang.code)"
                  class="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 transition-colors flex items-center gap-2"
                  :class="locale === lang.code ? 'text-primary-600 font-medium' : 'text-gray-700'"
                >
                  <span v-if="locale === lang.code" class="w-1.5 h-1.5 rounded-full bg-primary-600"></span>
                  <span v-else class="w-1.5 h-1.5"></span>
                  {{ lang.label }}
                </button>
              </div>
            </transition>
          </div>

          <!-- Demo Button -->
          <router-link to="/demo" class="btn btn-primary">
            {{ t('nav.demo') }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="lg:hidden p-2 rounded-lg"
          :class="showSolidBg ? 'text-gray-600' : 'text-white'"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <transition name="slide-down">
        <div
          v-if="isMenuOpen"
          class="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100"
        >
          <div class="container-custom py-4 space-y-4">
            <router-link
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="block py-2 font-medium"
              :class="isActive(link.path) ? 'text-primary-600' : 'text-gray-600'"
              @click="isMenuOpen = false"
            >
              {{ link.name }}
            </router-link>
            <hr class="border-gray-100">
            <!-- Mobile Language Selector -->
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="lang in languages"
                :key="lang.code"
                @click="setLocale(lang.code)"
                class="px-2 py-2 text-xs font-medium rounded-lg border transition-colors"
                :class="locale === lang.code
                  ? 'bg-primary-50 border-primary-200 text-primary-600'
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50'"
              >
                {{ lang.label }}
              </button>
            </div>
            <router-link to="/demo" class="btn btn-primary w-full text-center" @click="isMenuOpen = false">
              {{ t('nav.demo') }}
            </router-link>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>