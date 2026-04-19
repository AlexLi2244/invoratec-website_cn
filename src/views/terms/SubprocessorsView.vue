<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TermsLayout from './TermsLayout.vue'

const { t } = useI18n()

const subprocessors = [
  {
    name: 'Google Cloud Platform',
    purpose: 'Cloud infrastructure, data storage, and computing',
    location: 'United States',
    dataTypes: 'All customer data, user accounts, project data, BIM models',
    link: 'https://cloud.google.com/security/compliance'
  },
  {
    name: 'Firebase / Firestore',
    purpose: 'Real-time database and file storage',
    location: 'United States',
    dataTypes: 'User accounts, project data, file attachments',
    link: 'https://firebase.google.com/support/privacy'
  },
  {
    name: 'Anthropic',
    purpose: 'AI language model processing (Claude)',
    location: 'United States',
    dataTypes: 'AI query content (ephemeral processing only)',
    link: 'https://www.anthropic.com/privacy'
  },
  {
    name: 'Gmail / Google Workspace',
    purpose: 'Transactional email delivery',
    location: 'United States',
    dataTypes: 'Email addresses, notification content',
    link: 'https://workspace.google.com/security/'
  },
  {
    name: 'Autodesk',
    purpose: 'Construction Cloud integration (optional)',
    location: 'United States',
    dataTypes: 'Project files, model data (when ACC integration enabled)',
    link: 'https://www.autodesk.com/trust/privacy'
  }
]
</script>

<template>
  <TermsLayout>
    <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ t('terms.subprocessors.title') }}</h1>
    <p class="text-gray-500 mb-6 md:mb-8 text-sm sm:text-base">{{ t('terms.security.lastUpdated') }}: December 24, 2024</p>

    <div class="prose prose-sm sm:prose-lg max-w-none text-gray-600 break-words overflow-hidden">
      <!-- Introduction -->
      <section class="mb-6 sm:mb-10">
        <p class="lead text-base sm:text-lg">{{ t('terms.subprocessors.content.intro') }}</p>
      </section>

      <!-- What is a Sub-processor -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.subprocessors.content.section1.title') }}</h2>
        <p>{{ t('terms.subprocessors.content.section1.content') }}</p>
      </section>

      <!-- Sub-processor Requirements -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.subprocessors.content.section2.title') }}</h2>
        <p>{{ t('terms.subprocessors.content.section2.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.subprocessors.content.section2.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- Current Sub-processors -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.subprocessors.content.section3.title') }}</h2>

        <!-- Mobile: Card layout -->
        <div class="sm:hidden space-y-4 mt-4">
          <div v-for="sp in subprocessors" :key="sp.name" class="bg-gray-50 rounded-lg p-4">
            <a :href="sp.link" target="_blank" class="text-primary-600 hover:underline font-medium text-base">{{ sp.name }}</a>
            <div class="mt-2 space-y-1 text-sm">
              <p><span class="font-medium text-gray-700">{{ t('terms.subprocessors.content.tableHeaders.purpose') }}:</span> {{ sp.purpose }}</p>
              <p><span class="font-medium text-gray-700">{{ t('terms.subprocessors.content.tableHeaders.location') }}:</span> {{ sp.location }}</p>
              <p><span class="font-medium text-gray-700">{{ t('terms.subprocessors.content.tableHeaders.dataTypes') }}:</span> {{ sp.dataTypes }}</p>
            </div>
          </div>
        </div>

        <!-- Desktop: Table layout -->
        <div class="hidden sm:block overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 mt-6">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ t('terms.subprocessors.content.tableHeaders.subprocessor') }}</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ t('terms.subprocessors.content.tableHeaders.purpose') }}</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ t('terms.subprocessors.content.tableHeaders.location') }}</th>
                <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{{ t('terms.subprocessors.content.tableHeaders.dataTypes') }}</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="sp in subprocessors" :key="sp.name">
                <td class="px-4 py-4 whitespace-nowrap">
                  <a :href="sp.link" target="_blank" class="text-primary-600 hover:underline font-medium">{{ sp.name }}</a>
                </td>
                <td class="px-4 py-4 text-sm">{{ sp.purpose }}</td>
                <td class="px-4 py-4 whitespace-nowrap text-sm">{{ sp.location }}</td>
                <td class="px-4 py-4 text-sm">{{ sp.dataTypes }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- Infrastructure Sub-processors -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.subprocessors.content.section4.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.subprocessors.content.section4.subsection1.title') }}</h3>
        <p>{{ t('terms.subprocessors.content.section4.subsection1.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.subprocessors.content.section4.subsection1.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
        <p class="mt-4">{{ t('terms.subprocessors.content.section4.subsection1.note') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.subprocessors.content.section4.subsection2.title') }}</h3>
        <p>{{ t('terms.subprocessors.content.section4.subsection2.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.subprocessors.content.section4.subsection2.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- Regional Considerations -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.subprocessors.content.section5.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.subprocessors.content.section5.subsection1.title') }}</h3>
        <p>{{ t('terms.subprocessors.content.section5.subsection1.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.subprocessors.content.section5.subsection1.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.subprocessors.content.section5.subsection2.title') }}</h3>
        <p>{{ t('terms.subprocessors.content.section5.subsection2.content') }}</p>
      </section>

      <!-- Notification of Changes -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.subprocessors.content.section6.title') }}</h2>
        <p>{{ t('terms.subprocessors.content.section6.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.subprocessors.content.section6.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
        <p class="mt-4">{{ t('terms.subprocessors.content.section6.note') }}</p>
      </section>

      <!-- Subscribe to Updates -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.subprocessors.content.section7.title') }}</h2>
        <p>{{ t('terms.subprocessors.content.section7.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.subprocessors.content.section7.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- Contact -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.subprocessors.content.section8.title') }}</h2>
        <p>{{ t('terms.subprocessors.content.section8.intro') }}</p>
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
          <p><strong>{{ t('terms.subprocessors.content.section8.dpo') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
          <p><strong>{{ t('terms.subprocessors.content.section8.legal') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
          <p><strong>{{ t('terms.subprocessors.content.section8.general') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
        </div>
      </section>
    </div>
  </TermsLayout>
</template>