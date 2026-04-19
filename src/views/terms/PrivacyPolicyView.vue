<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import TermsLayout from './TermsLayout.vue'

const { t } = useI18n()
</script>

<template>
  <TermsLayout>
    <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ t('terms.privacy.title') }}</h1>
    <p class="text-gray-500 mb-6 md:mb-8 text-sm sm:text-base">{{ t('terms.security.lastUpdated') }}: December 24, 2024</p>

    <div class="prose prose-sm sm:prose-lg max-w-none text-gray-600 break-words overflow-hidden">
      <!-- Introduction -->
      <section class="mb-6 sm:mb-10">
        <p class="lead text-base sm:text-lg">{{ t('terms.privacy.content.intro') }}</p>
      </section>

      <!-- Information We Collect -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.privacy.content.section1.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.privacy.content.section1.subsection1.title') }}</h3>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.privacy.content.section1.subsection1.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.privacy.content.section1.subsection2.title') }}</h3>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.privacy.content.section1.subsection2.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.privacy.content.section1.subsection3.title') }}</h3>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.privacy.content.section1.subsection3.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- How We Use Information -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.privacy.content.section2.title') }}</h2>
        <p>{{ t('terms.privacy.content.section2.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.privacy.content.section2.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- How We Share Information -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.privacy.content.section3.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.privacy.content.section3.subsection1.title') }}</h3>
        <p>{{ t('terms.privacy.content.section3.subsection1.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.privacy.content.section3.subsection1.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.privacy.content.section3.subsection2.title') }}</h3>
        <p>{{ t('terms.privacy.content.section3.subsection2.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.privacy.content.section3.subsection2.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.privacy.content.section3.subsection3.title') }}</h3>
        <p>{{ t('terms.privacy.content.section3.subsection3.content') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.privacy.content.section3.subsection4.title') }}</h3>
        <p>{{ t('terms.privacy.content.section3.subsection4.content') }}</p>
      </section>

      <!-- Data Retention -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.privacy.content.section4.title') }}</h2>
        <p>{{ t('terms.privacy.content.section4.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.privacy.content.section4.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
        <p class="mt-4">{{ t('terms.privacy.content.section4.note') }}</p>
      </section>

      <!-- Your Rights -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.privacy.content.section5.title') }}</h2>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.privacy.content.section5.subsection1.title') }}</h3>
        <p>{{ t('terms.privacy.content.section5.subsection1.content') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.privacy.content.section5.subsection2.title') }}</h3>
        <p>{{ t('terms.privacy.content.section5.subsection2.content') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.privacy.content.section5.subsection3.title') }}</h3>
        <p>{{ t('terms.privacy.content.section5.subsection3.content') }}</p>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.privacy.content.section5.subsection4.title') }}</h3>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.privacy.content.section5.subsection4.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>

        <h3 class="text-lg sm:text-xl font-medium text-gray-800 mt-4 sm:mt-6 mb-2 sm:mb-3">{{ t('terms.privacy.content.section5.subsection5.title') }}</h3>
        <p>{{ t('terms.privacy.content.section5.subsection5.content') }}</p>
      </section>

      <!-- International Transfers -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.privacy.content.section6.title') }}</h2>
        <p>{{ t('terms.privacy.content.section6.intro') }}</p>
        <ul class="list-disc pl-6 mt-3 space-y-2">
          <li v-for="(item, index) in t('terms.privacy.content.section6.items', { returnObjects: true })" :key="index">{{ item }}</li>
        </ul>
      </section>

      <!-- Children's Privacy -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.privacy.content.section7.title') }}</h2>
        <p>{{ t('terms.privacy.content.section7.content') }}</p>
      </section>

      <!-- Updates -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.privacy.content.section8.title') }}</h2>
        <p>{{ t('terms.privacy.content.section8.content') }}</p>
      </section>

      <!-- Contact -->
      <section class="mb-6 sm:mb-10">
        <h2 class="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{{ t('terms.privacy.content.section9.title') }}</h2>
        <p>{{ t('terms.privacy.content.section9.intro') }}</p>
        <div class="bg-gray-50 p-4 rounded-lg mt-4">
          <p><strong>{{ t('terms.privacy.content.section9.company') }}</strong></p>
          <p><strong>{{ t('terms.privacy.content.section9.email') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
          <p><strong>{{ t('terms.privacy.content.section9.general') }}:</strong> <a href="mailto:contact@invoratec.cn" class="text-primary-600 hover:underline">contact@invoratec.cn</a></p>
        </div>
      </section>
    </div>
  </TermsLayout>
</template>