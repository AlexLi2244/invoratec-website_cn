<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TermsLayout from './TermsLayout.vue'

const { t } = useI18n()
</script>

<template>
  <TermsLayout>
    <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ t('terms.ai.title') }}</h1>
    <p class="text-gray-500 mb-6 md:mb-8 text-sm sm:text-base">{{ t('terms.security.lastUpdated') }}: December 24, 2024</p>

    <div class="prose prose-sm sm:prose-lg max-w-none text-gray-600 break-words overflow-hidden">
      <!-- Introduction -->
      <section class="mb-6 sm:mb-10">
        <p class="lead text-base sm:text-lg">{{ t('terms.ai.content.intro') }}</p>
      </section>

      <!-- AI Features Overview -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.ai.content.section1.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section1.subsection1.title') }}</h3>
        <p>{{ t('terms.ai.content.section1.subsection1.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.ai.content.section1.subsection1.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section1.subsection2.title') }}</h3>
        <p>{{ t('terms.ai.content.section1.subsection2.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.ai.content.section1.subsection2.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- AI Technology -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.ai.content.section2.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section2.subsection1.title') }}</h3>
        <p>{{ t('terms.ai.content.section2.subsection1.content') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section2.subsection2.title') }}</h3>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.ai.content.section2.subsection2.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- Data Usage -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.ai.content.section3.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section3.subsection1.title') }}</h3>
        <p>{{ t('terms.ai.content.section3.subsection1.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.ai.content.section3.subsection1.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section3.subsection2.title') }}</h3>
        <div class="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
          <p class="font-semibold text-green-800 mb-2">{{ t('terms.ai.content.section3.subsection2.importantTitle') }}</p>
          <ul class="list-disc pl-6 space-y-2 text-green-800">
            <li v-for="(item, index) in t('terms.ai.content.section3.subsection2.items', { returnObjects: true })" :key="index">{{ item }}</li>
          </ul>
        </div>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section3.subsection3.title') }}</h3>
        <p>{{ t('terms.ai.content.section3.subsection3.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.ai.content.section3.subsection3.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- Acceptable Use -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.ai.content.section4.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section4.subsection1.title') }}</h3>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.ai.content.section4.subsection1.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section4.subsection2.title') }}</h3>
        <p>{{ t('terms.ai.content.section4.subsection2.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.ai.content.section4.subsection2.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- Limitations -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.ai.content.section5.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section5.subsection1.title') }}</h3>
        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
          <p class="font-semibold text-yellow-800 mb-2">{{ t('terms.ai.content.section5.subsection1.importantNotice') }}</p>
          <p class="text-yellow-800">{{ t('terms.ai.content.section5.subsection1.content') }}</p>
        </div>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section5.subsection2.title') }}</h3>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.ai.content.section5.subsection2.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section5.subsection3.title') }}</h3>
        <p>{{ t('terms.ai.content.section5.subsection3.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.ai.content.section5.subsection3.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- Intellectual Property -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.ai.content.section6.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section6.subsection1.title') }}</h3>
        <p>{{ t('terms.ai.content.section6.subsection1.content') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.ai.content.section6.subsection2.title') }}</h3>
        <p>{{ t('terms.ai.content.section6.subsection2.content') }}</p>
      </section>

      <!-- Contact -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.ai.content.section7.title') }}</h2>
        <p>{{ t('terms.ai.content.section7.intro') }}</p>
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
          <p><strong>{{ t('terms.ai.content.section7.aiSupport') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
          <p><strong>{{ t('terms.ai.content.section7.privacy') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
          <p><strong>{{ t('terms.ai.content.section7.general') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
        </div>
      </section>
    </div>
  </TermsLayout>
</template>