<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const currentYear = new Date().getFullYear()

// Product links with anchors to specific sections
const productLinks = [
  { name: 'footer.product.bim_ai', path: '/product#bim-ai' },
  { name: 'footer.product.web_ai', path: '/product#web-ai' },
  { name: 'footer.product.download', path: '/download' },
  { name: 'footer.product.pricing', path: '/pricing' },
]

// Resources links
const resourceLinks = [
  { name: 'footer.resources.docs', path: '/docs' },
  { name: 'footer.resources.newMedia', path: '/new-media' },
  { name: 'footer.resources.demo', path: '/demo' },
  { name: 'docs.legalTitle', path: '/legal' },
]

// Company links
const companyLinks = [
  { name: 'footer.company_links.about', path: '/about' },
  { name: 'footer.company_links.contact', path: '/contact' },
]

// Bottom legal links (quick access)
const bottomLegalLinks = [
  { name: 'footer.legal.terms', path: '/legal' },
  { name: 'footer.legal.privacy', path: '/legal' },
  { name: 'footer.legal.cookies', path: '/legal' },
  { name: 'footer.legal.dpa', path: '/legal' },
]
</script>

<template>
  <footer class="bg-gray-900 text-white">
    <div class="container-custom py-10 md:py-16">
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12">
        <!-- Brand -->
        <div class="col-span-2 md:col-span-2 lg:col-span-4">
          <router-link to="/" class="flex items-center gap-2 sm:gap-3 mb-4">
            <img src="/logo.png" alt="InvoratecAI" class="h-8 sm:h-10 w-auto" />
            <span class="text-lg sm:text-xl font-bold text-white">{{ t('footer.company') }}</span>
          </router-link>
          <p class="text-gray-400 mb-4 sm:mb-6 max-w-sm leading-relaxed text-sm sm:text-base">
            {{ t('footer.tagline') }}
          </p>
          <!-- Social Links -->
          <div class="flex gap-3">
            <a href="https://twitter.com/invoratecai" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors group">
              <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/company/invoratecai" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors group">
              <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://youtube.com/@invoratecai" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors group">
              <svg class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Product Links -->
        <div class="col-span-1 lg:col-span-2">
          <h4 class="font-semibold text-white mb-3 sm:mb-5 text-sm sm:text-base">{{ t('footer.product.title') }}</h4>
          <ul class="space-y-2 sm:space-y-3">
            <li v-for="link in productLinks" :key="link.path">
              <router-link :to="link.path" class="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                {{ t(link.name) }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Resources Links -->
        <div class="col-span-1 lg:col-span-2">
          <h4 class="font-semibold text-white mb-3 sm:mb-5 text-sm sm:text-base">{{ t('footer.resources.title') }}</h4>
          <ul class="space-y-2 sm:space-y-3">
            <li v-for="link in resourceLinks" :key="link.path + link.name">
              <router-link :to="link.path" class="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                {{ t(link.name) }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Company Links -->
        <div class="col-span-2 lg:col-span-4">
          <h4 class="font-semibold text-white mb-3 sm:mb-5 text-sm sm:text-base">{{ t('footer.company_links.title') }}</h4>
          <ul class="space-y-2 sm:space-y-3">
            <li v-for="link in companyLinks" :key="link.path">
              <router-link :to="link.path" class="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
                {{ t(link.name) }}
              </router-link>
            </li>
            <li>
              <a href="mailto:contact@invoratec.cn" class="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-2">
                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span class="break-all">contact@invoratec.cn</span>
              </a>
            </li>
            <li>
              <a href="tel:+12135109160" class="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm flex items-center gap-2">
                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                (213) 510-9160
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-gray-800 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
        <p class="text-gray-500 text-xs sm:text-sm text-center md:text-left">
          © {{ currentYear }} {{ t('footer.company') }}. {{ t('footer.copyright') }}
        </p>
        <div class="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
          <router-link v-for="link in bottomLegalLinks" :key="link.name" :to="link.path" class="text-gray-500 hover:text-white text-xs sm:text-sm transition-colors">
            {{ t(link.name) }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>