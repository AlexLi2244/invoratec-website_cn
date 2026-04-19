<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TermsLayout from './TermsLayout.vue'

const { t } = useI18n()
</script>

<template>
  <TermsLayout>
    <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ t('terms.cookies.title') }}</h1>
    <p class="text-gray-500 mb-6 md:mb-8 text-sm sm:text-base">{{ t('terms.security.lastUpdated') }}: December 24, 2024</p>

    <div class="prose prose-sm sm:prose-lg max-w-none text-gray-600 break-words overflow-hidden">
      <!-- Introduction -->
      <section class="mb-6 sm:mb-10">
        <p class="lead text-base sm:text-lg">{{ t('terms.cookies.content.intro') }}</p>
      </section>

      <!-- What Are Cookies -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.cookies.content.section1.title') }}</h2>
        <p>{{ t('terms.cookies.content.section1.content') }}</p>
        <p class="mt-4">{{ t('terms.cookies.content.section1.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.cookies.content.section1.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- Types of Cookies -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.cookies.content.section2.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.cookies.content.section2.subsection1.title') }}</h3>
        <p>{{ t('terms.cookies.content.section2.subsection1.intro') }}</p>

        <!-- Mobile: Card layout -->
        <div class="sm:hidden space-y-3 mt-4">
          <div class="bg-gray-50 p-3 rounded-lg">
            <code class="text-primary-600 text-sm">invoratec_user</code>
            <p class="text-sm mt-1">{{ t('terms.cookies.content.section2.subsection1.cookies[0].purpose') }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ t('terms.cookies.content.tableHeaders.duration') }}: {{ t('terms.cookies.content.section2.subsection1.cookies[0].duration') }}</p>
          </div>
          <div class="bg-gray-50 p-3 rounded-lg">
            <code class="text-primary-600 text-sm">locale</code>
            <p class="text-sm mt-1">{{ t('terms.cookies.content.section2.subsection1.cookies[1].purpose') }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ t('terms.cookies.content.tableHeaders.duration') }}: {{ t('terms.cookies.content.section2.subsection1.cookies[1].duration') }}</p>
          </div>
          <div class="bg-gray-50 p-3 rounded-lg">
            <code class="text-primary-600 text-sm">region</code>
            <p class="text-sm mt-1">{{ t('terms.cookies.content.section2.subsection1.cookies[2].purpose') }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ t('terms.cookies.content.tableHeaders.duration') }}: {{ t('terms.cookies.content.section2.subsection1.cookies[2].duration') }}</p>
          </div>
          <div class="bg-gray-50 p-3 rounded-lg">
            <code class="text-primary-600 text-sm">cookie_consent</code>
            <p class="text-sm mt-1">{{ t('terms.cookies.content.section2.subsection1.cookies[3].purpose') }}</p>
            <p class="text-xs text-gray-500 mt-1">{{ t('terms.cookies.content.tableHeaders.duration') }}: {{ t('terms.cookies.content.section2.subsection1.cookies[3].duration') }}</p>
          </div>
        </div>

        <!-- Desktop: Table layout -->
        <div class="hidden sm:block bg-gray-50 p-4 rounded-lg mt-4 overflow-x-auto">
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b">
                <th class="text-left py-2">{{ t('terms.cookies.content.tableHeaders.cookieName') }}</th>
                <th class="text-left py-2">{{ t('terms.cookies.content.tableHeaders.purpose') }}</th>
                <th class="text-left py-2">{{ t('terms.cookies.content.tableHeaders.duration') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b">
                <td class="py-2"><code>invoratec_user</code></td>
                <td class="py-2">{{ t('terms.cookies.content.section2.subsection1.cookies[0].purpose') }}</td>
                <td class="py-2">{{ t('terms.cookies.content.section2.subsection1.cookies[0].duration') }}</td>
              </tr>
              <tr class="border-b">
                <td class="py-2"><code>locale</code></td>
                <td class="py-2">{{ t('terms.cookies.content.section2.subsection1.cookies[1].purpose') }}</td>
                <td class="py-2">{{ t('terms.cookies.content.section2.subsection1.cookies[1].duration') }}</td>
              </tr>
              <tr class="border-b">
                <td class="py-2"><code>region</code></td>
                <td class="py-2">{{ t('terms.cookies.content.section2.subsection1.cookies[2].purpose') }}</td>
                <td class="py-2">{{ t('terms.cookies.content.section2.subsection1.cookies[2].duration') }}</td>
              </tr>
              <tr>
                <td class="py-2"><code>cookie_consent</code></td>
                <td class="py-2">{{ t('terms.cookies.content.section2.subsection1.cookies[3].purpose') }}</td>
                <td class="py-2">{{ t('terms.cookies.content.section2.subsection1.cookies[3].duration') }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.cookies.content.section2.subsection2.title') }}</h3>
        <p>{{ t('terms.cookies.content.section2.subsection2.intro') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.cookies.content.section2.subsection3.title') }}</h3>
        <p>{{ t('terms.cookies.content.section2.subsection3.intro') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.cookies.content.section2.subsection4.title') }}</h3>
        <p>{{ t('terms.cookies.content.section2.subsection4.content') }}</p>
      </section>

      <!-- Managing Cookies -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.cookies.content.section3.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.cookies.content.section3.subsection1.title') }}</h3>
        <p>{{ t('terms.cookies.content.section3.subsection1.content') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.cookies.content.section3.subsection1.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
        <p class="mt-4">{{ t('terms.cookies.content.section3.subsection1.note') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.cookies.content.section3.subsection2.title') }}</h3>
        <p>{{ t('terms.cookies.content.section3.subsection2.content') }}</p>
      </section>

      <!-- Third-Party Cookies -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.cookies.content.section4.title') }}</h2>
        <p>{{ t('terms.cookies.content.section4.content') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.cookies.content.section4.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
        <p class="mt-4">{{ t('terms.cookies.content.section4.note') }}</p>
      </section>

      <!-- Cookie Duration -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.cookies.content.section5.title') }}</h2>
        <p>{{ t('terms.cookies.content.section5.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.cookies.content.section5.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- Updates -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.cookies.content.section6.title') }}</h2>
        <p>{{ t('terms.cookies.content.section6.content') }}</p>
      </section>

      <!-- Contact -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.cookies.content.section7.title') }}</h2>
        <p>{{ t('terms.cookies.content.section7.intro') }}</p>
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
          <p><strong>{{ t('terms.cookies.content.section7.privacy') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
          <p><strong>{{ t('terms.cookies.content.section7.general') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
        </div>
      </section>
    </div>
  </TermsLayout>
</template>